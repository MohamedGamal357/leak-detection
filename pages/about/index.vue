<template>
  <main-loader v-if="loading" />
  <div v-else>
    <aboutHeader :items="about" />
    <AboutWhatIQ :item="about.abouts[0]" />
  </div>
</template>

<script setup>
const config = useRuntimeConfig();
const i18n = useI18n();
const loading = ref(true);
const about = ref(null);

function fetchData() {
  $fetch("about", {
    method: "GET",
    baseURL: config.public.baseURL,
    headers: {
      "Accept-Language": i18n.locale.value,
    },
  }).then((res) => {
    about.value = res.data;
    loading.value = false;
  });
}

onMounted(() => fetchData());
</script>
