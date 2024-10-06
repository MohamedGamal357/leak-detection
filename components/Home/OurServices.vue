<template>
  <div></div>
  <!-- <div class="   h-[600px] bg-[#003773] m-auto ">
<h1 class="text-white w-[280px] font-bold z-10 md:absolute right-[140px] text-[30px]">
  مرحبًا بكم في موقعنا الخاص بخدمات كشف العوازل وتسريب المياه
</h1>
<div class="w-[336px] h-[93px] border border-[#003773] rounded-[50px] md:absolute z-[50] p-[18px] top-[50px] left-[190px] bg-[#0A4088]">
  <p class="text-[13px] text-white text-center p-[10px]">
    نهتم بتلبية احتياجاتكم. سواء كنتم تحتاجون إلى إصلاح أو تركيب أنابيب الماء أو الصرف الصحي. 
  </p>
</div>
<img  class="md:absolute bottom-0 right-[440px] w-[540px] h-[480px]"
src="~/assets/imgs/one.png" 
alt="persons">

<img class="absolute bottom-[80px] right-[80px]"
src="~/assets/imgs/video.png" 
alt="video">


<NuxtLink to="">
  <img 
  class="absolute bottom-[70px] left-[100px]"
src="~/assets/imgs/butt.png" 
alt="">
</NuxtLink>
  </div> -->
  <!-- <div class="container">
    <h2
      class="subtitle"
      :class="$i18n.locale == 'en' ? 'pl-3 border-l-2' : 'pr-3 border-r-2'"
    >
      {{ $t("TITLES.ourService") }}
    </h2>
    <div class="block md:flex xl:gap-12 gap-5 items-center">
      <div class="w-full h-full relative mb-12">
        <img
          src="@/assets/imgs/play.svg"
          alt="play video"
          class="absolute top-[50%] left-[50%] z-50 cursor-pointer"
          @click="showDialog = true"
        />
        <video
          :src="item.video"
          poster="/video.svg"
          class="rounded-full relative z-40"
        ></video>
        <div
          class="lg:w-[85%] md:w-[80%] lg:h-[85%] md:h-[80%] w-full h-full border border-primary rounded-full absolute lg:top-[80px] lg:left-[80px] md:top-[80px] md:left-[80px] top-2 left-2"
        ></div>
      </div>
      <div class="w-full">
        <h1 class="font-extrabold lg:text-5xl text-4xl mb-8">
          {{ item.title }}
        </h1>

        <p
          class="text-secondary"
          v-if="item.description"
          v-html="item.description"
        ></p>
      </div>

      <Dialog
        v-model:visible="showDialog"
        maximizable
        modal
        header=""
        :style="{ width: '50rem' }"
        :breakpoints="{ '1199px': '75vw', '575px': '90vw' }"
        v-if="showDialog"
      >
        <p class="m-0">
          <video
            :src="item.video"
            poster="/video.svg"
            class="m-auto"
            controls
            autoplay
          ></video>
        </p>
      </Dialog>
    </div>
  </div> -->
</template>

<script setup>
import Dialog from "primevue/dialog";
const showDialog = ref(false);

defineProps({
  item: {
    required: true,
  },
});
</script>

<style lang="scss" scoped></style>
