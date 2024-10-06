<template>
    <div class="container mx-auto p-4 mb-[100px]">
    <h1 class="text-2xl md:text-3xl text-end py-3">{{ $t('formcont.stayInTouch') }}</h1>
  
    <div class="flex flex-col md:flex-row gap-6 md:gap-[25px]">
      <!-- Card 1: Address -->
      <div class="w-full md:w-[370px] h-auto md:h-[203px] p-6 text-end rounded-[15px] shadow-xl shadow-[#d0d0ebb0]">
        <div class="flex justify-end">
          <img class="w-[80px] h-[80px] pb-4" src="~/assets/imgs/location@.png" alt="">
        </div>
        <div>
          <h2 class="text-[#ADB3DA] pb-4 text-lg md:text-[20px]">{{ $t('formcont.address') }}</h2>
          <p class="text-xl md:text-[24px] font-normal">{{ $t('formcont.addressDetail') }}</p>
        </div>
      </div>

      <!-- Card 2: Email -->
      <div class="w-full md:w-[370px] h-auto md:h-[203px] p-6 text-end rounded-[15px] shadow-xl shadow-[#d0d0ebb0]">
        <div class="flex justify-end">
          <img class="w-[80px] h-[80px] pb-4" src="~/assets/imgs/email@.png" alt="">
        </div>
        <div>
          <h2 class="text-[#ADB3DA] pb-4 text-lg md:text-[20px]">{{ $t('formcont.email') }}</h2>
          <p class="text-xl md:text-[24px] font-normal">emailperson@exaple.com</p>
        </div>
      </div>

      <!-- Card 3: Phone -->
      <div class="w-full md:w-[370px] h-auto md:h-[203px] p-6 text-end rounded-[15px] shadow-xl shadow-[#d0d0ebb0]">
        <div class="flex justify-end">
          <img class="w-[80px] h-[80px] pb-4" src="~/assets/imgs/phone1.png" alt="">
        </div>
        <div>
          <h2 class="text-[#ADB3DA] pb-4 text-lg md:text-[20px]">{{ $t('formcont.phone') }}</h2>
          <p class="text-xl md:text-[24px] font-normal">{{ $t('formcont.phoneDetail') }}</p>
        </div>
      </div>
    </div>
  </div>
<div class="w-full max-w-[1080px] bg-[#EFF2FC] h-auto md:h-[731px] lg:flex items-center gap-[60px] rounded-[48px] m-auto p-4 md:p-8">
    <form class="w-full max-w-[492px] text-end">
      <h2 class="text-[24px] md:text-[32px] font-bold">{{ $t('formcont.contactUs') }}</h2>
      <div class="grid justify-end pb-4">
        <label class="text-[14px] pb-3 text-[#BDBDD3]" for="name">{{ $t('formcont.name') }}</label>
        <input type="text" class="w-[492px] h-[60px] text-end rounded-[10px] p-4" id="name" :placeholder=" $t('formcont.namePlaceholder')">
      </div>
      <div class="grid justify-end pb-4">
        <label class="text-[14px] pb-3 text-[#BDBDD3]" for="email">{{ $t('formcont.email') }}</label>
        <input type="email" class="w-[492px] h-[60px] text-end rounded-[10px] p-4" id="email" :placeholder=" $t('formcont.emailPlaceholder')">
      </div>
      <div class="grid justify-end pb-4">
        <label class="text-[14px] pb-3 text-[#BDBDD3]" for="subject">{{ $t('formcont.subject') }}</label>
        <input type="text" class="w-[492px] h-[60px] text-end rounded-[10px] p-4" id="subject" :placeholder=" $t('formcont.subjectPlaceholder')">
      </div>
      <div class="grid justify-end pb-4">
        <label class="text-[14px] pb-3 text-[#BDBDD3]" for="message">{{ $t('formcont.message') }}</label>
        <textarea class="w-[492px] h-[150px] text-end rounded-[10px] p-4" :placeholder=" $t('formcont.messagePlaceholder')" id="message" cols="60" rows="5"></textarea>
      </div>
      <button class="w-full md:w-[208px] h-[60px] flex items-center justify-center gap-2 bg-[#3162DA] hover:bg-blue-700 text-white py-2 px-4 rounded-full">
        <font-awesome-icon :icon="['fas', 'paper-plane']" flip="horizontal" />
        <span>{{ $t('formcont.sendNow') }}</span>
      </button>
    </form>
    <div class="pt-[50px] md:pt-[100px] w-full md:-mb-28 lg:block hidden">
      <img class="w-full" src="~/assets/imgs/two2.png" alt="">
    </div>
  </div>


</template>

<script setup>



</script>