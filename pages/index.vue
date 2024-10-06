<template>
  <main-loader v-if="loading" />
  <div v-else class="">
    <!-- v-for="item in home.sliders" :key="item.id" -->
    <div >
      <HomeMainSection :item="item" :universities="home.universities" />
    </div>
    <HomeOurServices :item="home.services[0]" />
    <HomeSlider :items="home.universities" />
    <HomeBlog :items="home.blogs" />
    <HomeContact :items="contact" />
  </div>
</template>

<script setup>
const i18n = useI18n();
const config = useRuntimeConfig();

const loading = ref(true);
const home = ref(null);
const contact = {
  img: "contact.png",
  title: i18n.t("TITLES.contact"),
};

function fetchData() {
  $fetch("home", {
    method: "GET",
    baseURL: config.public.baseURL,
    headers: {
      "Accept-Language": i18n.locale.value,
    },
  }).then((res) => {
    home.value = res.data;
    loading.value = false;
  });
}

onMounted(() => fetchData());
</script>

<style lang="scss" scoped></style>
