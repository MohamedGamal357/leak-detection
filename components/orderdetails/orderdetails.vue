<template>
  <div class="w-full m-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div class="flex gap-3 h-[60px] mt-10 sm:mt-20">
              <div>
  
      <!-- Cancel Order Button -->
      <button @click="showCancelModal = true" class="text-[16px] sm:text-[19px] border border-[#FE7270] rounded-[43px] text-[#FE7270] p-2 sm:p-3 w-full sm:w-[164px]">
        {{ $t("buttons.cancelOrder") }}
      </button>
  
      <!-- Modal for cancel reason -->
      <div v-if="showCancelModal" class="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
        <div class="bg-white p-6 rounded-md w-[300px] max-w-md">
          <h2 class="text-[20px] font-bold mb-4 text-end">{{ $t("modals.cancelReason.title") }}</h2>
          <form>
            <div v-for="(reason, index) in cancelReasons" :key="index" class="mb-2">
              <label class="flex items-center justify-between font-semibold">
                <input type="radio" v-model="selectedCancelReason" :value="reason" class="form-radio text-[#FE7270]">
                <span class="ml-2">{{ reason }}</span>
              </label>
            </div>
            <textarea v-if="selectedCancelReason === 'سبب اخر'" v-model="otherCancelReason" class="w-full p-2 border" placeholder="{{ $t('placeholders.enterReason') }}"></textarea>
            <div class="mt-4 flex justify-between">
              <button @click="showCancelModal = false; ConfirmationModal = true" class="bg-[#3162DA] w-full text-white py-2 px-4 rounded-[18px]">
                {{ $t("buttons.confirm") }}
              </button>
            </div>
          </form>
        </div>
      </div>
  
      <!-- Confirmation Modal -->
      <div v-if="ConfirmationModal" class="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
        <div class="bg-white p-6 rounded-md max-w-md">
          <h2 class="text-lg font-bold mb-4">{{ $t("modals.confirmation.title") }}</h2>
          <div class="mt-4 flex justify-center">
            <button @click="ConfirmationModal = false" class="bg-[#3162DA] w-full text-white py-2 px-4 rounded-[18px]">
              {{ $t("buttons.ok") }}
            </button>
          </div>
        </div>
      </div>
    </div>
              <div>
  
      <!-- Delay Order Button -->
      <button @click="showReasonModal = true" class="text-[16px] sm:text-[19px] border rounded-[43px] bg-[#3162DA] text-white p-2 sm:p-3 w-full sm:w-[164px]">
        {{ $t("buttons.delayOrder") }}
      </button>
  
      <!-- Modal for selecting reason -->
      <div v-if="showReasonModal" class="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
        <div class="bg-white p-6 rounded-md h-auto w-[350px] max-w-md">
          <h2 class="text-[20px] font-bold mb-4 text-end">{{ $t("modals.delayReason.title") }}</h2>
          <form>
            <div v-for="(reason, index) in reasons" :key="index" class="mb-2">
              <label class="flex items-center justify-between font-semibold">
                <input type="radio" v-model="selectedReason" :value="reason" class="form-radio text-blue-600">
                <span class="ml-2">{{ reason }}</span>
              </label>
            </div>
            <textarea v-if="selectedReason === 'سبب اخر'" v-model="otherReason" class="w-full p-2 border" placeholder="{{ $t('placeholders.enterReason') }}"></textarea>
            <div class="mt-4 flex justify-center">
              <button @click="showReasonModal = false; showTimeModal = true" class="bg-[#3162DA] w-full text-white py-2 px-4 rounded-[18px]">
                {{ $t("buttons.confirm") }}
              </button>
            </div>
          </form>
        </div>
      </div>
  
      <!-- Modal for selecting time -->
      <div v-if="showTimeModal" class="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
        <div class="bg-white p-6 rounded-md w-max-w-md">
          <h2 class="text-lg font-bold mb-4">{{ $t("modals.timeSelection.title") }}</h2>
  
          <!-- Date Selection -->
          <div class="flex justify-center mb-4 space-x-2 font-bold">
            <div v-for="(date, index) in dates" :key="index" @click="selectedDate = date" 
                 :class="['p-3 border rounded-md text-center', { 'border-[#3162DA] text-[#3162DA]': selectedDate === date }]">
              <div>{{ date.day }}</div>
              <div>{{ date.date }}</div>
            </div>
          </div>
  
          <!-- Time Selection -->
          <div class="flex justify-between mb-4 space-x-2 font-bold">
            <div v-for="(time, index) in times" :key="index" @click="selectedTime = time"
                 :class="['p-3 border w-full rounded-md text-center', { 'border-[#3162DA] text-[#3162DA]': selectedTime === time }]">
              {{ time }}
            </div>
          </div>
          <div class="mt-4 grid grid-cols-1 gap-2 font-bold">
            <button @click="showTimeModal = false; showConfirmationModal = true; showCancelModal= false" class="bg-[#3162DA] text-white py-2 px-4 rounded-[19px]">
              {{ $t("buttons.confirm") }}
            </button>
            <button @click="showTimeModal = false" class="bg-gray-300 text-black py-2 px-4 rounded-[19px]">
              {{ $t("buttons.skip") }}
            </button>
          </div>
        </div>
      </div>
  
      <!-- Modal for confirmation -->
      <div v-if="showConfirmationModal" class="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
        <div class="bg-white p-6 rounded-md h-[200px] grid grid-cols-1 w-[200px] max-w-md ">
          <h2 class="text-lg font-bold mb-4 text-center">{{ $t("modals.confirmation.title") }}</h2>
          <div class="mt-4 flex justify-center items-end">
            <button @click="showConfirmationModal = false" class="bg-[#3162DA] text-white py-2 px-4 rounded">
              {{ $t("buttons.ok") }}
            </button>
          </div>
        </div>
      </div>
    </div>
          </div>
  
          <div class="text-end py-4 grid grid-cols-1 gap-4">
              <h1 class="text-[20px] sm:text-[24px] font-bold">
                  {{ $t("orderDetails.title") }}
              </h1>
              <div class="w-full sm:w-[544px] h-auto sm:h-[110px] rounded-[15px] border border-white shadow-lg flex gap-4 sm:gap-9">
                  <div class="grid grid-cols-1 gap-4 p-3">
                    <div>
  
      <!-- رابط الصورة التي تضغط عليها لفتح النافذة المنبثقة -->
      <NuxtLink to="#" @click.prevent="openModal">
        <img src="~/assets/imgs/massege.png" alt="Open Chat" class="w-10 h-10 cursor-pointer">
      </NuxtLink>
  
      <!-- نافذة الدردشة المنبثقة -->
      <transition name="modal">
        <div v-if="isOpen" class="fixed inset-0 z-50 overflow-auto bg-smoke-light flex">
          <div class="relative p-4 bg-white w max-w-md m-auto flex-col flex rounded-lg">
  
            <!-- زر الإغلاق -->
            <button @click="closeModal" class="absolute top-2 right-2 text-gray-600 hover:text-gray-900">
              &times;
            </button>
  
            <!-- محتوى النافذة المنبثقة -->
            <div class="flex flex-col space-y-4">
  <div class="flex justify-between items-center border-b pb-2">
    <h3 class="text-lg font-medium">{{ $t("user.name") }}</h3>
    <span class="text-gray-400 text-sm">{{ $t("user.role") }}</span>
  </div>

  <div class="flex-1 overflow-auto">
    <div class="text-left">
      <p class="bg-gray-200 p-2 rounded-lg my-2 max-w-xs">{{ $t("chatMessages.greeting") }}</p>
      <span class="text-xs text-gray-400 block">8:13 مساءً</span>
    </div>
  </div>

  <!-- إدخال الرسالة -->
  <div class="border-t pt-2">
    <input type="text" placeholder="{{ $t('placeholders.enterMessage') }}" class="w-full p-2 border rounded-lg">
  </div>
</div>

          </div>
        </div>
      </transition>
    </div>
                     
  
                      <div class="flex gap-2 sm:gap-3 text-[#ADB3DA] text-[14px] sm:text-[16px]">
                          <p>05:00 مساء <font-awesome-icon icon="clock" /></p>
                          <p>25 اكتوبر 2023 <font-awesome-icon icon="calendar-days" /></p>
                      </div>
                  </div>
                  <div class="w-full sm:w-[227px] py-3">
                      <div class="flex">
                          <div class="px-4">
                              <h1 class="text-[14px] sm:text-[16px] font-bold">احمد محمد</h1>
                              <p class="text-[#ADB3DA] font-bold text-[12px] sm:text-[14px]">
                                  المملكة العربية السعودية
                                  <font-awesome-icon icon="location-dot" />
                              </p>
                          </div>
                          <img src="~/assets/imgs/mansmall.png" alt="">
                      </div>
                      <p class="py-2 text-[15px] sm:text-[17px] font-bold">
                          <span class="text-[#ADB3DA] px-2">{{ $t("service.label") }} :</span>
                          {{ $t("service.name") }}
                      </p>
                  </div>
              </div>
  
              <div class="w-full sm:w-[544px] rounded-[15px] border border-white shadow-lg py-4 flex justify-end">
                  <div class="text-end grid grid-cols-1 w-full sm:w-[330px]">
                      <h2 class="text-[#ADB3DA] px-2 text-[16px] sm:text-[18px] font-semibold">: {{ $t("problemDetails.title") }}</h2>
                      <p class="text-[16px] sm:text-[18px] text-end px-2">{{ $t("problemDetails.content") }}</p>
                  </div>
              </div>
  
              <div class="w-full sm:w-[544px] rounded-[15px] border border-white shadow-lg py-4 flex justify-end">
                  <div class="grid grid-cols-1 px-3">
                      <h2 class="text-[#ADB3DA] px-2 text-[16px] sm:text-[17px] font-semibold">{{ $t("paymentMethod.title") }}</h2>
                      <div class="flex gap-3 py-2">
                          <p class="text-[16px] sm:text-[18px]">{{ $t("paymentMethod.method") }}</p>
                          <img class="border border-[#F7F7FF] p-2 rounded-full bg-[#F7F7FF]" src="~/assets/imgs/cash.png" alt="">
                      </div>
                  </div>
              </div>
  
              <div class="w-full sm:w-[544px] rounded-[15px] border border-white shadow-lg py-4 flex justify-end">
                  <div class="grid grid-cols-1 px-3">
                      <h2 class="text-[#ADB3DA] px-2 text-[16px] sm:text-[17px] font-semibold">{{ $t("location.title") }}</h2>
                      <div class="py-2">
                          <img src="~/assets/imgs/map2.png" alt="">
                          <p class="pt-2 text-[16px] sm:text-[18px]">{{ $t("location.address") }}</p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  // لمكون النافذة المنبثقة الأساسية
  const isOpen = ref(false);
  
  // لمكون تأخير الطلب
  const showReasonModal = ref(false);
  const showTimeModal = ref(false);
  const showConfirmationModal = ref(false);
  const ConfirmationModal = ref(false);
  const selectedReason = ref('');
  const otherReason = ref('');
  const selectedDate = ref('');
  const selectedTime = ref('');
  const reasons = ['ليس هناك اسباب', 'قمت بتغيير رأيي', 'لست بالمنزل الآن', 'سبب اخر'];
  const dates = [
    { day: 'الاثنين', date: '18' },
    { day: 'الثلاثاء', date: '19' },
    { day: 'الاربعاء', date: '20' },
    { day: 'الخميس', date: '21' },
    { day: 'الجمعة', date: '22' }
  ];
  const times = ['9:00 ص', '9:45 م', '10:30 م'];
  
  // لمكون إلغاء الطلب
  const showCancelModal = ref(false);
  const selectedCancelReason = ref('');
  const otherCancelReason = ref('');
  const cancelReasons = ['ليس هناك اسباب', 'قمت بتغيير رأيي', 'لست بالمنزل الآن', 'سبب اخر'];
  
  // طرق النافذة المنبثقة
  const openModal = () => {
    isOpen.value = true;
  };
  
  const closeModal = () => {
    isOpen.value = false;
  };
  
  // طرق لمكون تأخير الطلب
  const openReasonModal = () => {
    showReasonModal.value = true;
  };
  
  const closeReasonModal = () => {
    showReasonModal.value = false;
  };
  
  const openTimeModal = () => {
    showTimeModal.value = true;
  };
  
  const closeTimeModal = () => {
    showTimeModal.value = false;
  };
  
  // هنا نقوم بتعديل طرق فتح النوافذ لجعل نافذة التأكيد تغلق نافذة التأجيل
  const openConfirmationModal = () => {
    showConfirmationModal.value = true;
    showCancelModal.value = false; // تأكد من إغلاق نافذة تأكيد إلغاء الطلب
  };
  
  const closeConfirmationModal = () => {
    showConfirmationModal.value = false;
  };
  
  // طرق لمكون إلغاء الطلب
  const openCancelModal = () => {
    showCancelModal.value = true;
    ConfirmationModal.value = false; // تأكد من إغلاق نافذة تأكيد تأجيل الطلب
  };
  
  const closeCancelModal = () => {
    showCancelModal.value = false;
  };
  </script>
  
  <style>
  /* تأثير الدخول والخروج للنافذة */
  .modal-enter-active, .modal-leave-active {
    transition: opacity 0.5s;
  }
  .modal-enter, .modal-leave-to {
    opacity: 0;
  }
  
  /* خلفية شفافة */
  .bg-smoke-light {
    background-color: rgba(0, 0, 0, 0.5);
  }
  
  .flexcash{
      display: flex;
      justify-content: flex-end;
  }
  </style>
  