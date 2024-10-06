<template>
  <div class="form_wrapper">
    <VeeForm as="div" @submit="onSubmit" :validation-schema="schema">
      <form class="space-y-5">
        <inputs-base
          id="full_name"
          name="full_name"
          :placeholder="$t('FORMS.Placeholders.fullName')"
        />
        <inputs-phone
          @code_change="getPhoneCode($event)"
          :placeholder="$t('FORMS.Placeholders.phone')"
        />
        <inputs-base
          id="email_address"
          name="email"
          type="email"
          :placeholder="$t('FORMS.Placeholders.email')"
        />

        <inputs-textarea
          rows="5"
          id="subject"
          name="subject"
          :placeholder="$t('FORMS.Placeholders.subject')"
        />

        <div class="flex items-center justify-end">
          <button :disabled="btnLoading" class="base-btn" type="submit">
            {{ $t('BUTTONS.send') }}
          </button>
        </div>
      </form>
    </VeeForm>
  </div>
</template>

<script setup>
import * as yup from "yup";
import { useToast, POSITION } from "vue-toastification";
const toast = useToast();
const config = useRuntimeConfig();
const i18n = useI18n();
const phone_code = ref(null);
const btnLoading = ref(false);
const city = ref(null);
const country = ref(null);

const schema = yup.object({
  full_name: yup.string().required(i18n.t("FORMS.Validation.name")),
  email: yup
    .string()
    .email(i18n.t("FORMS.Validation.validEmail"))
    .required(i18n.t("FORMS.Validation.email")),
  phone: yup.string().required(i18n.t("FORMS.Validation.phone")),
  subject: yup.string().required(i18n.t("FORMS.Validation.subject")),
});

function resetInputs() {
  city.value = ref(null);
  country.value = ref(null);
}

function onSubmit(e, actions) {
  btnLoading.value = true;

  const SUBMITDATA = new FormData();

  SUBMITDATA.append("fullname", e.full_name);
  SUBMITDATA.append("subject", e.subject);
  SUBMITDATA.append(`email`, e.email);
  SUBMITDATA.append("phone", e.phone);
  SUBMITDATA.append(
    "phone_code",
    phone_code?.value.phone_code || e.phone_code?.value.phone_code
  );
  SUBMITDATA.append("type", "contact");

  $fetch("contact_us", {
    method: "POST",
    body: SUBMITDATA,
    baseURL: config.public.baseURL,
    headers: {
      "Accept-Language": i18n.locale.value,
    },
  })
    .then((res) => {
      btnLoading.value = false;
      resetInputs();
      actions.resetForm();
      toast.success(res.message, {
        timeout: 2000,
        position:
          i18n.locale.value == "en"
            ? POSITION.BOTTOM_RIGHT
            : POSITION.BOTTOM_LEFT,
      });
    })
    .catch((err) => {
      btnLoading.value = false;
      toast.error(err.response._data.message, {
        timeout: 2000,
        position:
          i18n.locale.value == "en"
            ? POSITION.BOTTOM_RIGHT
            : POSITION.BOTTOM_LEFT,
      });
    });
}

function getPhoneCode(e, s) {
  phone_code.value = e;
}
</script>

<style lang="scss">
.form_wrapper {
  @apply text-black rounded-[5rem] lg:p-11 gap-5;
  input,
  textarea {
    @apply bg-white rounded-[50px] border border-[#f3f4f7] focus:border-white w-full py-4 px-5 text-black focus:outline-none;
    &.error {
      @apply border-red-600;
    }
  }
  textarea {
    @apply rounded-3xl resize-none;
  }
}
</style>
