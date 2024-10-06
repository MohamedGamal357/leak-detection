<template>
  <!-- <div
    class="container relative  bg-cover rounded-3xl  h-[700px] p-12 md:mt-44 mt-12"
    :class="$i18n.locale == 'en' ? ' pr-0' : ' pl-0'"
  >
  <p class="text-[18px] text-[#3162DA] font-medium text-end m-auto md:w-[80%]">تقييماتنا</p>
    <h2 class="text-[40px] font-bold text-black text-end md:w-[80%] m-auto">
      اراء عملائنا
    </h2>
    <Swiper
      :modules="[
        SwiperAutoplay,
        SwiperA11y,
        SwiperNavigation,
        SwiperPagination,
      ]"
      :loop="true"
      :breakpoints="breakpoints"
      :slides-per-view="2"
      :autoplay="{
        delay: 7000,
        disableOnInteraction: true,
      }"
      ref="swiper"
      :navigation="true"
    >
      <swiper-slide v-for="(item, index) in items" :key="index">
        <div class="mt-12">
          <div
            class="relative overflow-hidden rounded-3xl w-[544px] h-[400px] bg-[#F8FAFE] "
          >
          <div class=" absolute top-[70px] right-[60px]">
              <img :src="item.image" alt="logo" class="m-auto max-h-[50px] w-[30px]" />
            </div>

            <p class=" absolute top-[150px] w-[500px] h-[100px] font-bold text-[23px] text-end">
              {{ item.para }}
            </p>
            <div
              class="absolute rounded-b-3xl py-3 w-[264px] z-50 bg-white bottom-0 justify-center"
            >
            
            </div>
            <div class=" flex absolute bottom-4 right-[40px]">
              <div class="text-end">
                <h2 class="pr-3 text-[24px]">
  {{ item.title}}
</h2>
              <p class="pr-3 text-[#BDBDD3]">
                {{ item.description }}</p>
              </div>
              
              <img :src="item.logo" alt="logo" class="m-auto max-h-[70px] w-[62px] h-[62px]" />
            </div>
          </div>
        </div>
      </swiper-slide>
    </Swiper>
  </div> -->
  <div></div>
</template>

<!-- <script setup>
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
  title: "احمد عامر", 
  para:"لقد استدعيت فريق تسريب المياه الخاص بكم لإصلاح تسريب في منزلي، وأنا سعيد جدًا بالخدمة التي تلقيتها. كان الفريق محترفًا وودودًا، وأصلحوا المشكلة بسرعة وبأعلى جودة. أوصي بشدة بخدماتكم.",
  logo: "/logo1.png",
  description:"مؤسس شركة CAS",
  image:"/quote-down.png"
  },
  { 
  title: "محمد جمال", 
  para:"لقد استدعيت فريق تسريب المياه الخاص بكم لإصلاح تسريب في منزلي، وأنا سعيد جدًا بالخدمة التي تلقيتها. كان الفريق محترفًا وودودًا، وأصلحوا المشكلة بسرعة وبأعلى جودة. أوصي بشدة بخدماتكم.",
  logo: "/logo1.png",
  description:"مؤسس شركة CAS",
  image:"/quote-down.png"
  },
  { 
  title: "محمد احمد ", 
  para:"لقد استدعيت فريق تسريب المياه الخاص بكم لإصلاح تسريب في منزلي، وأنا سعيد جدًا بالخدمة التي تلقيتها. كان الفريق محترفًا وودودًا، وأصلحوا المشكلة بسرعة وبأعلى جودة. أوصي بشدة بخدماتكم.",
  logo: "/logo1.png",
  description:"مؤسس شركة CAS",
  image:"/quote-down.png"
  },
  { 
  title: "السيد ابراهيم", 
  para:"لقد استدعيت فريق تسريب المياه الخاص بكم لإصلاح تسريب في منزلي، وأنا سعيد جدًا بالخدمة التي تلقيتها. كان الفريق محترفًا وودودًا، وأصلحوا المشكلة بسرعة وبأعلى جودة. أوصي بشدة بخدماتكم.",
  logo: "/logo1.png",
  description:"مؤسس شركة CAS",
  image:"/quote-down.png"
  },
  
  
  
]);
</script>

<style lang="scss">
.swiper-button-prev,
.swiper-button-next {
  @apply text-sm  bg-[#3162DA]  font-bold p-3 rounded-full w-9 h-9 -bottom-8  z-50 relative;
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
</style> -->
