<template>
 <div class="m-auto w-full max-w-[1080px] grid gap-[150px] md:grid-cols-2 grid-cols-1 items-center justify-items-center">

<div class="w-full max-w-[447px] h-auto text-right mt-[30px]">
  <div class="flex justify-end">
    <p class="border border-[#F7F9FE] bg-[#F7F9FE] w-[180px] text-[#3162DA] text-center font-bold text-[15px] py-1 px-1 rounded-[20px]">
      {{ $t("content.waterLeakageService") }}
    </p>
  </div>

  <h2 class="text-[32px] md:text-[40px] font-[700] mb-4">
    {{ $t("content.repairAndLeak") }}
  </h2>
  <p class="text-[14px] md:text-[16px] text-[#BDBDD3] mb-4">
    {{ $t("content.expertTeamDescription") }}
  </p>
  
  <div class="flex gap-3 justify-end pb-2">
    <p class="text-[14px] md:text-[16px] font-[700]">{{ $t("content.warrantyDuration") }}</p>
    <img class="w-[24px] h-[24px]" src="~/assets/imgs/tick-circle.png">
  </div>
  <div class="flex gap-3 justify-end pb-2">
    <p class="text-[14px] md:text-[16px] font-[700]">{{ $t("content.materialWarranty") }}</p>
    <img class="w-[24px] h-[24px]" src="~/assets/imgs/tick-circle.png">
  </div>
  <div class="flex gap-3 justify-end">
    <p class="text-[14px] md:text-[16px] font-[700]">{{ $t("content.highQualityService") }}</p>
    <img class="w-[24px] h-[24px]" src="~/assets/imgs/tick-circle.png">
  </div>
  
  <nuxt-link to="/contact">
    <button class="mt-8 w-full max-w-[182px] h-[60px] bg-[#3162DA] text-white rounded-[90px]">
      {{ $t("content.contactUs") }}
    </button>
  </nuxt-link>
</div>

<div class="flex justify-center">
  <img class="w-full h-auto max-w-[447px]" src="~/assets/imgs/twoman.png" alt="{{ $t('content.twomanAlt') }}">
</div>

</div>

<div class="container mx-auto mt-[100px] grid gap-1 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
  <!-- First Expert -->
  <div class="w-[343.26px] h-[475.54px] mt-[150px]">
    <img src="~/assets/imgs/nader.png" alt="{{ $t('content.naderName') }}">
    <h2 class="text-[24px] font-[500] text-center pt-4">{{ $t('content.naderName') }}</h2>
    <p class="text-center text-[16px] font-[400] text-[#BDBDD3]">{{ $t('content.leakageExpert') }}</p>
    <div class="pt-[40px] flex justify-center">
      <button class="w-[182px] h-[60px] bg-[#3162DA] text-white rounded-[90px]">{{ $t('content.contactUs') }}</button>
    </div>
  </div>

  <!-- Second Expert -->
  <div class="w-[343.26px] h-[475.54px] mt-[150px]">
    <img src="~/assets/imgs/ahmed.png" alt="{{ $t('content.ahmedName') }}">
    <h2 class="text-[24px] font-[500] text-center pt-4">{{ $t('content.ahmedName') }}</h2>
    <p class="text-center text-[16px] font-[400] text-[#BDBDD3]">{{ $t('content.leakageExpert') }}</p>
  </div>

  <!-- Third Expert Section -->
  <div class="grid grid-cols-1 justify-items-end">
    <div class="grid grid-cols-1 justify-items-end">
      <p class="border border-[#F7F9FE] bg-[#F7F9FE] w-[200px] text-center text-[20px] font-bold text-[#3162DA] px-6 rounded-[20px]">
        {{ $t('content.ourExperts') }}  
      </p>
      <p class="text-[40px] font-[500] text-right py-[30px]">{{ $t('content.bestExperts') }}</p>
    </div>
    <div class="w-[343.26px] h-[475.54px]">
      <img src="~/assets/imgs/nada.png" alt="{{ $t('content.nadaName') }}">
      <h2 class="text-[24px] font-[500] text-center pt-4">{{ $t('content.nadaName') }}</h2>
      <p class="text-center text-[16px] font-[400] text-[#BDBDD3]">{{ $t('content.leakageExpert') }}</p>
    </div>
  </div>
</div>

  
<div
  class="container relative bg-cover rounded-3xl h-[700px] p-12 md:mt-44 mt-12"
  :class="$i18n.locale == 'en' ? 'pr-0' : 'pl-0'"
>
  <p class="text-[18px] text-[#3162DA] font-medium text-end m-auto md:w-[80%]">
    {{ $t('content.ourRatings') }}
  </p>
  <h2 class="text-[40px] font-bold text-black text-end md:w-[80%] m-auto">
    {{ $t('content.clientOpinions') }}
  </h2>

  <Swiper
    :modules="[SwiperAutoplay, SwiperA11y, SwiperNavigation, SwiperPagination]"
    :loop="true"
    :breakpoints="breakpoints"
    :slides-per-view="2"
    :autoplay="{ delay: 7000, disableOnInteraction: true }"
    ref="swiper"
    :navigation="true"
    :pagination="{ clickable: true }"
  >
    <swiper-slide v-for="(item, index) in items" :key="index">
      <div class="mt-12">
        <div
          class="relative overflow-hidden rounded-3xl w-[544px] h-[450px] bg-[#F8FAFE]"
        >
          <div class="absolute top-[70px] right-[60px]">
            <img :src="item.image" alt="logo" class="m-auto max-h-[50px] w-[30px]" />
          </div>

          <p class="absolute top-[150px] w-[500px] h-[100px] font-bold text-[23px] text-end">
            {{ $t(`content.testimonials.${item.para}`) }}
          </p>

          <div class="flex absolute bottom-4 right-[40px]">
            <div class="text-end">
              <h2 class="pr-3 text-[24px]">{{ $t(`content.testimonials.${item.title}`) }}</h2>
              <p class="pr-3 text-[#BDBDD3]">{{ $t(`content.testimonials.${item.description}`) }}</p>
            </div>
            <img :src="item.logo" alt="logo" class="m-auto max-h-[70px] w-[62px] h-[62px]" />
          </div>
        </div>
      </div>
    </swiper-slide>
  </Swiper>
</div>

<div class="mt-6 m-auto bg-[#003773] h-[549px] grid gap-2 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-center justify-items-center">
  <div class="grid grid-cols-1 gap-[60px]">
    <!-- مهارة وخبرة فريق العمل -->
    <div class="h-[100px]">
      <div class="w-[293px] h-[67px] flex gap-5">
        <div class="ml-1">
          <h2 class="text-[23px] text-white font-[500] pb-1 text-right">
            {{ $t("content.teamSkillExperience") }}
          </h2>
          <p class="text-[#6686AC] text-right">
            {{ $t("content.teamSkillExperienceDesc") }}
          </p>
        </div>
        <img class="" src="~/assets/imgs/car.png" alt="icon" />
      </div>
    </div>
    <!-- رضا العملاء -->
    <div class="h-[100px]">
      <div class="w-[293px] h-[67px] flex gap-5">
        <div class="ml-1">
          <h2 class="text-[23px] text-white font-[500] pb-1 text-right">
            {{ $t("content.customerSatisfaction") }}
          </h2>
          <p class="text-[#6686AC] text-right">
            {{ $t("content.customerSatisfactionDesc") }}
          </p>
        </div>
        <img class="" src="~/assets/imgs/car.png" alt="icon" />
      </div>
    </div>
  </div>

  <!-- صورة كبيرة في الوسط -->
  <div class="mt-9">
    <img class="" src="~/assets/imgs/two.png" alt="two persons" />
  </div>

  <div class="grid grid-cols-1 gap-[60px]">
    <!-- مجموعة واسعة من الخدمات -->
    <div class="h-[100px]">
      <div class="w-[293px] h-[67px] flex gap-5">
        <div class="ml-1">
          <h2 class="text-[23px] text-white font-[500] pb-1 text-right">
            {{ $t("content.wideRangeServices") }}
          </h2>
          <p class="text-[#6686AC] text-right">
            {{ $t("content.wideRangeServicesDesc") }}
          </p>
        </div>
        <img class="" src="~/assets/imgs/car.png" alt="icon" />
      </div>
    </div>
    <!-- التكلفة العادلة -->
    <div class="h-[100px]">
      <div class="w-[293px] h-[67px] flex gap-5">
        <div class="ml-1">
          <h2 class="text-[23px] text-white font-[500] pb-1 text-right">
            {{ $t("content.fairCost") }}
          </h2>
          <p class="text-[#6686AC] text-right">
            {{ $t("content.fairCostDesc") }}
          </p>
        </div>
        <img class="" src="~/assets/imgs/car.png" alt="icon" />
      </div>
    </div>
  </div>
</div>

  
<div class="w-[1082px] m-auto mt-[150px] grid gap-[150px] md:grid-cols-2 grid-cols-1 items-center justify-items-center">
  <div>
    <img class="" src="~/assets/imgs/phonetwo.png" alt="phone image">
  </div>

  <div class="w-[400px] h-[392px]">
    <div class="text-end">
      <h2 class="text-black text-[40px] text-end font-bold pb-4">
        {{ $t("content.ourMission") }}
      </h2>
      <div class="text-[#ADB3DA] text-[20px]">
        <p class="pb-2">{{ $t("content.downloadApp") }}</p>
        <p>{{ $t("content.enjoyFastService") }}</p>
      </div>
      <img class="" src="~/assets/imgs/sahm.png" alt="arrow">
      <img class="" src="~/assets/imgs/download.png" alt="download button">
    </div>
  </div>
</div>


</template>

<script setup>
defineProps({
  items: {
    required: false,
  },
});

const breakpoints = {
  0: {
    slidesPerView: 1,
  },
  500: {
    slidesPerView: 1,
  },
  768: {
    slidesPerView: 2,
  },
  
};

const items = ref([
  { 
    title: "ahmedAmir", 
    para: "testimonial1",  
    logo: "/logo1.png",
    description: "founderCAS", 
    image: "/quote-down.png"
  },
  { 
    title: "mohamedGamal", 
    para: "testimonial2",  
    logo: "/logo1.png",
    description: "founderCAS", 
    image: "/quote-down.png"
  },
  { 
    title: "mohamedAhmed", 
    para: "testimonial3",  
    logo: "/logo1.png",
    description: "founderCAS", 
    image: "/quote-down.png"
  },
  { 
    title: "ibrahim", 
    para: "testimonial4",  
    logo: "/logo1.png",
    description: "founderCAS", 
    image: "/quote-down.png"
  }
]);

</script>
<style lang="scss">
.swiper-button-prev,
.swiper-button-next {
  @apply text-sm  bg-[#3162DA]  font-bold p-3 rounded-full w-9 h-9 -bottom-[31px]  z-50 relative;
  left: unset;
  right: unset;

  &::after {
    @apply text-sm text-white;
  }
}

.swiper-button-prev {
  @apply -bottom-11;
  inset-inline-start: 0.5rem;
}

.swiper-button-next {
  inset-inline-start: 3.5rem;
}

.zoom-in {
  transition: transform 0.5s ease;
}

.zoom-in:hover {
  transform: scale(1.3);
}

.swiper {
  @apply pb-[40px];
}
</style>


