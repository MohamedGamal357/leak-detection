<template>
  <div class="loader_wrapper">
    <img
      alt="logo"
      src="/logo.png"
      class="loaderImg animate-pulse"
      width="200"
      height="400"
    />
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.loader_wrapper {
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  background: #fff;
  left: 0;
  top: 0;
  z-index: 500;
  .loaderImg {
    max-width: 100%;
    height: auto;
    display: block;
  }
}
</style>
