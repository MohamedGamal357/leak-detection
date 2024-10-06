<template>
  <div class="bg-[#003773] m-auto flex flex-col md:flex-row justify-around items-center">
    <div class="grid grid-cols-1 gap-8 md:gap-[250px] mb-8 md:mb-0">
      <p class="text-[13px] text-white text-center w-full md:w-[336px] h-auto md:h-[93px] border border-[#003773] rounded-[50px] bg-[#0A4088] p-[18px]">
        <!-- نهتم بتلبية احتياجاتكم. سواء كنتم تحتاجون إلى إصلاح أو تركيب أنابيب الماء أو الصرف الصحي. -->
        {{ $t("content.fixWaterDescription") }}
      </p>
      <NuxtLink to="">
        <img class="w-[60px] md:w-[100px] h-auto" src="~/assets/imgs/butt.png" alt="{{ $t('content.buttonAlt') }}">
      </NuxtLink>
    </div>
    <div class="flex justify-center items-center relative mb-8 md:mb-0">
      <img class="w-[300px] md:w-[540px] h-auto" src="~/assets/imgs/one.png" alt="{{ $t('content.personAlt') }}">
      <div class="w-[192px] h-[139px] absolute bottom-0 md:bottom-auto md:top-[300px] -left-[50px] md:-left-[100px]">
        <div class="relative">
          <img src="~/assets/imgs/onesmall.png" alt="{{ $t('content.smallPersonAlt') }}">
          <img class="absolute top-[93px]" src="~/assets/imgs/buttomone.png" alt="{{ $t('content.smallButtonAlt') }}">
          <img class="absolute top-4 right-3" src="~/assets/imgs/mansmall.png" alt="{{ $t('content.manAlt') }}">
          <img class="absolute top-[85px] right-3" src="~/assets/imgs/rate.png" alt="{{ $t('content.ratingAlt') }}">
          <p class="absolute top-[20px] left-[50px] font-bold text-white  text-[12px] w-[60px] ">{{ $t("content.personName") }}</p>
          <p class="absolute top-[50px] left-5 text-[#ADB3DA] text-[14px] ">{{ $t("content.jobTitle") }}</p>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-1 gap-8 md:gap-[200px]">
      <h1 class="text-white w-full md:w-[280px] font-bold text-[24px] md:text-[30px] mb-4 text-center md:text-right">
        {{ $t("content.welcomeMessage") }}
      </h1>
      
      <div>
        <!-- صورة الفيديو -->
        <img @click="showModal = true" class="w-[80px] md:w-auto h-auto mt-4 cursor-pointer" src="~/assets/imgs/video.png" alt="{{ $t('content.videoAlt') }}">
      </div>
      
      <!-- نافذة منبثقة (Modal) -->
      <div v-if="showModal" class="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
        <div class="bg-white p-4 rounded-lg max-w-3xl w-[700px] h-[400px] relative">
          <!-- زر الإغلاق -->
          <button @click="showModal = false" class="absolute top-2 right-2 text-gray-700 hover:text-gray-900 text-[30px]">&times;</button>
          
          <!-- محتوى الفيديو -->
          <video controls autoplay class="w-[700px] h-auto rounded-lg">
            <source src="~/assets/video/Plumbing.mp4" type="video/mp4">
            {{ $t("content.noVideoSupport") }}
          </video>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineProps } from 'vue';
defineProps({
  item: {
    required: true,
  },
  universities: {
    required: true,
  },
});

export default {
  data() {
    return {
      showModal: false
    };
  }
}
</script>

<style lang="scss" scoped></style>
