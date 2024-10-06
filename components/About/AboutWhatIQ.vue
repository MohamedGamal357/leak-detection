<template>
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

  


<div class="container mx-auto mt-[30px]">
  <!-- قسم الصور -->
  <div class="grid md:grid-cols-2 grid-cols-1 gap-8">
    <img
      class="w-full h-auto max-w-[522px] max-h-[534px] mx-auto" 
      src="~/assets/imgs/glass.png" 
      alt="glass image">

    <img
      class="w-full h-auto max-w-[522px] max-h-[534px] mx-auto" 
      src="~/assets/imgs/hand.png" 
      alt="hand image">
  </div>

  <!-- قسم النص -->
  <div class="text-end mt-3">
    <h2 class="text-[22px] sm:text-[24px] md:text-[26px] font-bold py-2">
      {{ $t("plumbing.commonIssuesTitle") }}
    </h2>
    <p class="text-[14px] sm:text-[16px] text-[#BDBDD3] py-2">
      {{ $t("plumbing.commonIssuesDescription") }}
    </p>
  </div>
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
</template>

<script setup>
// استيراد ref من Vue
import { ref } from 'vue';

// تعريف الخصائص المطلوبة للمكون باستخدام defineProps
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


