<template>
  <client-only>
    <NuxtLayout>
      <div>
        <NuxtLoadingIndicator :color="'#fff'" :height="5" />

        <NuxtPage />
      </div>
    </NuxtLayout>
  </client-only>
</template>

<script setup>
if (process.client) {
  const wow = new window.WOW();
  wow.init();
  // console.log(wow);
}
</script>
