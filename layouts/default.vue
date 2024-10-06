<template>
  <div>
    <Header />
    <slot />
    <Footer />
  </div>
</template>

<script setup>
const i18n = useI18n();

useHead({
  titleTemplate: `${i18n.t("appName")} | %s`,
});
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
