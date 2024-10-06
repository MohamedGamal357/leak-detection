<template>
  <VeeField type="file" :name="name" v-slot="{ meta, field }">
    <!-- :class="dragOver ? 'bg-red-500' : 'bg-third'" -->
    <div
      class="input_wrapper"
      :class="{
        error: !meta.valid && meta.touched,
      }"
      v-bind="getRootProps()"
    >
      <label :for="id" class="label" v-if="label">{{ label }}</label>

      <div
        class="upload border hid_input rounded-xl p-2"
        :class="{
          uploading: uploadPercentage,
          'border-dashed bg-third !cursor-move': dragOver,
        }"
        @dragover="dragOver = true"
        @dragleave="dragOver = false"
      >
        <input
          ref="refFile"
          type="file"
          :id="id"
          @change="uploadFile($event.target.files[0])"
          class="hidden"
          :accept="accept"
          :multiple="multiple ? true : false"
        />

        <input type="text" class="hidden" :name="name" v-bind="field" />
        <label
          :for="id"
          class="text-xl text-center p-7 rounded-lg !flex flex-col justify-center items-center gap-3 cursor-pointer"
        >
          <img
            width="180"
            height="180"
            class="mx-auto w-[180px] h-[180px] object-cover"
            v-if="preview && no_preview"
            :src="preview"
            alt=""
          />
          <template v-else>
            <img class="m-auto" v-if="!cvFile" src="@/assets/imgs/upload.svg" width="25" height="25" />
            <span>
              {{ $t("TITLES.dragOrDropFile") }}
            </span>
          </template>
        </label>

        <div class="flex gap-2 pb-7">
          <img src="@/assets/images/icons/file.png" alt="file upload" />
          <div class="flex flex-col flex-1">
            <h5 class="flex items-center justify-between">
              <span class="text-[#191D23]">
                {{ $t("LABELS.uploadingFile") }}</span
              >
              <div
                class="text-primary font-bold flex items-center gap-2"
                v-if="uploadFinshed"
              >
                <i
                  class="fas fa-check rounded-full bg-[#047857] text-white border p-1"
                ></i>
                <button
                  @click="cancelReq"
                  class="text-primary border w-6 h-6 rounded-full border-primary transition hover:bg-primary hover:!text-white"
                >
                  <i class="fas fa-times"></i>
                </button>
              </div>
              <div
                class="text-primary font-bold flex items-center gap-2"
                v-if="uploadPercentage && !uploadFinshed"
              >
                <span class="text-primary font-bold">
                  {{ uploadPercentage + "%" }}
                </span>

                <button
                  @click="cancelReq"
                  class="text-primary border w-6 h-6 rounded-full border-primary transition hover:bg-primary hover:!text-white"
                >
                  <i class="fas fa-times"></i>
                </button>
              </div>
            </h5>
            <div class="rounded-lg h-1 w-full bg-[#E7EAEE] mt-auto">
              <div
                class="h-2 rounded-lg bg-[#047857] transition"
                :style="`width:${uploadPercentage}%;`"
              ></div>
            </div>
          </div>
        </div>
      </div>

      <VeeErrorMessage
        v-if="!meta.valid && meta.touched"
        :name="name"
        as="div"
        class="text-red-500"
      />
    </div>
  </VeeField>
  <div v-if="preview && !no_preview" class="flex items-center gap-3 flex-wrap">
    <div class="relative">
      <button
        class="absolute border w-6 h-6 bg-primary rounded-full -top-1 -left-1 text-base z-10"
        type="button"
        @click="cancelReq"
      >
        <i class="fas fa-times text-white"></i>
      </button>
      <Image
        width="80"
        height="60"
        class="rounded-lg h-[60px] w-[80px] object-cover border"
        image-class="rounded-lg h-[60px] w-[80px] object-cover border-line preview_image"
        :src="preview"
        alt=""
        preview
      />
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from "vue";
import axios from "axios";
import { toast } from "vue3-toastify";
import { useDropzone } from "vue3-dropzone";
import { useI18n } from "vue-i18n";

import { useField } from "vee-validate";

const { t } = useI18n();
const config = useRuntimeConfig();

const props = defineProps({
  itemValue: {
    required: true,
  },
  id: {
    required: true,
  },
  name: {
    required: true,
  },
  label: {
    required: false,
  },
  placeholder: {
    required: true,
  },
  modalName: {
    required: true,
  },
  modalType: {
    required: true,
  },

  multiple: {
    type: Boolean,
  },
  returnFile: {
    required: false,
  },
  baseUrl: {
    required: false,
  },
});
const emit = defineEmits(["update:itemValue"]);
const preview = ref(null);

const { getRootProps, getInputProps, ...rest } = useDropzone({ onDrop });
function onDrop(acceptFiles, rejectReasons) {
  uploadFile(acceptFiles[0]);
}

const uploadPercentage = ref(0);
const filename = ref("");
const uploadFinshed = ref(false);
const refFile = ref();

const file = ref(null);
let request = null;

const inputField = useField(props.name);
function uploadFile(file) {
  uploadPercentage.value = 0;

  if (props.returnFile) {
    dragOver.value = false;
    preview.value = URL.createObjectURL(file);
    uploadPercentage.value = 100;
    emit("update:itemValue", preview.value);
    inputField.setValue(file);

    uploadFinshed.value = true;
  } else {
    request = axios.CancelToken.source();
    const frmData = new FormData();
    frmData.append("file", file);
    frmData.append('attachment_type', 'file')
    frmData.append('model', 'cv')
    axios({
      url: "attachments",
      method: "POST",
      data: frmData,
      baseURL: config.public.generalURL,
      onUploadProgress: (event) =>
        (uploadPercentage.value = parseInt(
          Math.round((event.loaded / event.total) * 100)
        )),
      cancelToken: request.token,
    })
      .then((res) => {
        dragOver.value = false;
        preview.value = URL.createObjectURL(file);

        emit("update:itemValue", preview.value);
        inputField.setValue(res.data.data);
        uploadFinshed.value = true;
      })
      .catch((err) => {
        toast.error(err.response?.data.message || t("STATUS.uploadCanceled"));
        dragOver.value = false;
        cancelReq();
      });
  }
}

function cancelReq() {
  if (request) request.cancel();
  uploadPercentage.value = 0;
  preview.value = null;
  emit("update:itemValue", "");
  refFile.value.value = null;
  request = null;
  inputField.setValue("");
}
const dragOver = ref(false);
watch(
  () => props.itemValue,
  (newVal) => {
    if (newVal) {
      preview.value = props.itemValue;
    }
  },
  {
    deep: true,
  }
);
onMounted(() => {
  if (props.itemValue) {
    preview.value = props.itemValue;
  }
});
</script>

<style lang="scss">
.input_wrapper {
  &.upload_image {
    input {
      display: none;
    }
    label {
      cursor: pointer;
      max-width: 300px;

      margin-inline: auto;
      img {
        height: 200px;
        object-fit: cover;
        width: 100%;
        border-radius: 1rem;
      }
    }
    margin-bottom: 1.5rem;
  }
  .upload {
    > div {
      @apply hidden;
    }
    &.uploading {
      input {
        @apply hidden;
      }
      > div {
        @apply flex;
      }
    }
    &.hid_input {
      input {
        @apply hidden;
      }
      &.uploading {
        // > label {
        //   @apply hidden;
        // }
      }
    }
  }
}
</style>
