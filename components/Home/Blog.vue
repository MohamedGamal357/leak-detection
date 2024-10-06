<template>
  <div class="m-auto mb-[60px] w-full max-w-[1080px] h-auto sm:h-[410px] mt-[60px] sm:mt-[90px] bg-[url('~/assets/imgs/back.png')] bg-[#F7F7FC] rounded-[30px] sm:rounded-[60px] gap-6 sm:gap-[100px] flex flex-col sm:flex-row justify-center items-center">
    <div class="flex justify-center mt-[60px] gap-[180px] flex-col items-center">
  <div>
    <img class="border border-white bg-white p-7 rounded-[20px] -mt-[40px] sm:-mt-[90px] w-[200px] sm:w-[170px]" src="~/assets/imgs/photo1.png" alt="{{ $t('blog.leakDetectionTechnicianAlt') }}">
    <p class="text-center text-[#3464DB] py-2 font-bold">{{ $t('blog.leakDetectionTechnician') }}</p>
  </div>
  <div>
    <img class="border border-white bg-white p-7 rounded-[20px] -mt-[40px] sm:-mt-[90px] w-[200px] sm:w-[170px]" src="~/assets/imgs/photo2.png" alt="{{ $t('blog.insulationTechnicianAlt') }}">
    <p class="text-center text-[#3464DB] py-2 font-bold">{{ $t('blog.insulationTechnician') }}</p>
  </div>
</div>


    <div class="text-center sm:text-end py-3 grid gap-4">
      <div class="flex justify-center sm:justify-end py-6">
        <h1 class="text-[#3162DA] w-[200px]  border border-white  h-[40px]  text-center px-4 py-2 text-[16px]  font-bold rounded-[32px] bg-white">
          {{ $t("blog.ourServices") }}
        </h1>
      </div>
      <div class="flex justify-end">
        <p class="text-[28px] sm:text-[40px] w-[300px] sm:w-[500px] ">
        {{ $t("blog.chooseService") }} <span class="text-[#3162DA]">{{ $t("blog.service") }}</span> {{ $t("blog.expertsHandle") }}
      </p>
      </div>
      
      <p class="text-[#ADB3DA] text-[16px] sm:text-[18px]">
        {{ $t("blog.selectServiceAndProblem") }}
      </p>
    </div>
  </div>

  <div class="w-full max-w-[1080px] h-auto m-auto mb-[50px] lg:mb-[100px] grid gap-[50px] lg:gap-[90px] mt-[50px] lg:mt-[100px] md:grid-cols-2 grid-cols-1 px-4">
    
    <!-- القسم الأول: فيديو -->
    <div class="flex justify-center lg:justify-start">
      <div>
        <img @click="showModal = true" class="w-[200px] md:w-[450px] h-auto mt-4 cursor-pointer" src="~/assets/imgs/video2.png" alt="video">
      </div>

      <!-- نافذة منبثقة (Modal) -->
      <div v-if="showModal" class="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
        <div class="bg-white p-4 rounded-lg max-w-3xl w-[90%] sm:w-[700px] h-auto sm:h-[400px] relative">
          <button @click="showModal = false" class="absolute top-2 right-2 text-gray-700 hover:text-gray-900 text-[30px]">&times;</button>
          
          <video controls autoplay class="w-full h-auto rounded-lg">
            <source src="~/assets/video/Plumbing.mp4" type="video/mp4">
            {{ $t("blog.noVideoSupport") }}
          </video>
        </div>
      </div>
    </div>

    <!-- القسم الثاني: معلومات الشركة -->
    <div class="grid grid-cols-2 gap-[30px] lg:gap-[50px]">
      
      <!-- صورة كبيرة وعنوان -->
      <div class="col-span-2 text-end">
        <div class="flex justify-center lg:justify-end">
  <p class="text-[#3464DB] border border-[#F7F7FC] bg-[#F7F7FC] rounded-[12px] px-5 py-1">
    {{ $t("blog.aboutUs") }}
  </p>
</div>

        <h3 class="text-[30px] md:text-[40px] font-bold mt-4">
          {{ $t("blog.bestExperts") }}
        </h3>
      </div>

      <!-- خدمة سريعة -->
      <div class="flex flex-row-reverse items-start px-2 md:px-7">
        <img src="~/assets/imgs/fast.png" alt="fast" class="mr-3">
        <div class="px-4">
          <p class="text-[18px] md:text-[20px] font-bold text-end">
            {{ $t("blog.fastService") }}
          </p>
          <p class="text-[#ADB3DA] w-[160px] md:w-[200px] text-right text-[14px] md:text-[16px]">
            {{ $t("blog.fastServiceDescription") }}
          </p>
        </div>
      </div>

      <!-- عروض حصرية -->
      <div class="flex flex-row-reverse items-start px-2 md:pl-7">
        <img src="~/assets/imgs/sale.png" alt="sale" class="mr-3">
        <div class="px-4">
          <p class="text-[18px] md:text-[20px] font-bold text-end">
            {{ $t("blog.exclusiveOffers") }}
          </p>
          <p class="text-[#ADB3DA] w-[160px] md:w-[200px] text-right text-[14px] md:text-[16px]">
            {{ $t("blog.exclusiveOffersDescription") }}
          </p>
        </div>
      </div>

      <!-- تقييمات عالية -->
      <div class="flex flex-row-reverse items-start px-2 md:px-7">
        <img src="~/assets/imgs/star.png" alt="star" class="mr-3">
        <div class="px-4">
          <p class="text-[18px] md:text-[20px] font-bold text-end">
            {{ $t("blog.highRatings") }}
          </p>
          <p class="text-[#ADB3DA] w-[160px] md:w-[200px] text-right text-[14px] md:text-[16px]">
            {{ $t("blog.highRatingsDescription") }}
          </p>
        </div>
      </div>

      <!-- فريق مؤهل -->
      <div class="flex flex-row-reverse items-start px-2 md:px-7">
        <img src="~/assets/imgs/team.png" alt="team" class="mr-3">
        <div class="px-4">
          <p class="text-[18px] md:text-[20px] font-bold text-end">
            {{ $t("blog.qualifiedTeam") }}
          </p>
          <p class="text-[#ADB3DA] w-[160px] md:w/[200px] text-right text-[14px] md:text-[16px]">
            {{ $t("blog.qualifiedTeamDescription") }}
          </p>
        </div>
      </div>

      <!-- زر اعرف المزيد -->
      <div class="col-span-2 flex justify-center lg:justify-end">
        <button class="w-[160px] sm:w-[188px] h-[50px] sm:h-[60px] border rounded-[90px] bg-[#3162DA]">
          <p class="text-white text-lg font-[700]">{{ $t("blog.learnMore") }}</p>
        </button>
      </div>

    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue';

// تعريف الخصائص المطلوبة للمكون
const props = defineProps({
  items: {
    required: true,
  },
  item: {
    required: true,
  },
  universities: {
    required: true,
  }
});

// حالة التحكم في إظهار أو إخفاء الموديل
const showModal = ref(false);
</script>

<style lang="scss" scoped>

</style>
