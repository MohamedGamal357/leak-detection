<template>
  <VeeField :name="name" v-slot="{ field, meta }">
    <div
      class="input_wrapper"
      :class="`${!meta.valid && meta.touched ? error : ''} ${classes}`"
    >
      <label :for="id" class="label" v-if="label">{{ label }}</label>

      <textarea
        :rows="rows"
        :id="id"
        v-bind="field"
        :placeholder="placeholder"
        class="font-light border-[#D7DAEA] rounded-xl"
        :class="
          !meta.valid &&
          meta.touched &&
          'border-red-500 placeholder:text-red-500 lg:text-lg text-sm min-h-[130px] resize-none'
        "
      />

      <VeeErrorMessage
        v-if="!meta.valid && meta.touched"
        :name="name"
        as="div"
        class="text-red-500 text-sm"
      />
    </div>
  </VeeField>
</template>

<script setup>
defineProps({
  id: {
    required: true,
  },
  name: {
    required: true,
  },
  label: {
    required: false,
  },
  rows: {
    required: false,
  },
  classes: {
    required: false,
  },
  placeholder: {
    required: true,
  },
});
</script>
