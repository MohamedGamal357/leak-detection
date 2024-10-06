<template>
  <div class="w-full max-w-[1080px] m-auto mt-10 grid gap-6 md:grid-cols-2 grid-cols-1">
    <div class="py-6 w-full md:w-[290px] h-[1090px] bg-[#F7F7FC] grid grid-cols-1 justify-items-center gap-5 rounded-[21px] border border-[#F7F7FC]">
      <input 
        :placeholder="$t('service.searchPlaceholder')" 
        class="text-end w-[90%] md:w-[254px] rounded-[15px] mb-4"
        type="search" name="" id="">

      <div class="w-[90%] md:w-[254px] h-auto bg-white border-[3px] border-[#3162DA] rounded-[15px] grid justify-items-center p-4">
        <img src="~/assets/imgs/plumservices.png" alt="service image">
        <h2 class="text-[16px] font-semibold">
          {{ $t('service.companyName') }}
        </h2>
        <p class="text-[#BDBDD3]">
          {{ $t('service.tradeRecord') }}
        </p>
        <img src="~/assets/imgs/rateservi.png" alt="rating image">
      </div>

      <div class="w-[90%] md:w-[254px] h-auto bg-white rounded-[15px] grid justify-items-center p-4">
        <img src="~/assets/imgs/plumservices.png" alt="service image">
        <h2 class="text-[16px] font-semibold">
          {{ $t('service.companyName') }}
        </h2>
        <p class="text-[#BDBDD3]">
          {{ $t('service.tradeRecord') }}
        </p>
        <img src="~/assets/imgs/rateservi.png" alt="rating image">
      </div>

      <div class="w-[90%] md:w-[254px] h-auto bg-white rounded-[15px] grid justify-items-center p-4">
        <img src="~/assets/imgs/plumservices.png" alt="service image">
        <h2 class="text-[16px] font-semibold">
          {{ $t('service.companyName') }}
        </h2>
        <p class="text-[#BDBDD3]">
          {{ $t('service.tradeRecord') }}
        </p>
        <img src="~/assets/imgs/rateservi.png" alt="rating image">
      </div>

      <div class="w-[90%] md:w-[254px] h-auto bg-white rounded-[15px] grid justify-items-center py-4">
        <img src="~/assets/imgs/plumservices.png" alt="service image">
        <h2 class="text-[16px] font-semibold">
          {{ $t('service.companyName') }}
        </h2>
        <p class="text-[#BDBDD3]">
          {{ $t('service.tradeRecord') }}
        </p>
        <img src="~/assets/imgs/rateservi.png" alt="rating image">
      </div>
    </div>

    <div class="text-end py-4 w-full">
      <h1 class="text-[30px] md:text-[40px] font-semibold pb-3">
        {{ $t('service.technicianTitle') }}
      </h1>

      <div class="flex gap-6 justify-center">
        <img src="~/assets/imgs/slider.png" alt="slider image">
        <img src="~/assets/imgs/man.png" alt="technician image">
      </div>

      <div class="text-end w-full md:w-[522px] ml-9 h-auto mt-6 font-semibold">
        <h2 class="text-[20px] pb-3">
          {{ $t('service.detailsTitle') }}
        </h2>
        <p class="text-[16px] text-[#BDBDD3]">
          {{ $t('service.detailsDescription') }}
        </p>

        <h2 class="text-[16px] mt-4 pb-3">
          {{ $t('service.bookingInstructions') }}
        </h2>
        <p class="text-[16px] text-[#BDBDD3]">
          {{ $t('service.enterData') }}
        </p>

        <form class="text-end mt-4" action="">
          <div class="grid grid-cols-1 w-full md:w-[500px] h-auto ml-6">
            <label class="text-[14px] pb-3" for="problem">
              {{ $t('service.problemDetails') }}
            </label>
            <textarea
              :placeholder="$t('service.enterProblemDetails')" 
              class="border border-[#dfdfe9] text-end text-[14px] p-2 rounded-[8px]"
              name="problem" id="problem" cols="30" rows="5">
            </textarea>
          </div>
        </form>

        <div class="mt-[40px] flexo">
          <img src="~/assets/imgs/location@.png" alt="location icon"> 

          <div class="flex gap-5 items-center">
            <div class="text-end">
              <h2 class="text-[19px] font-semibold">
                {{ $t('service.address') }}
              </h2>
              <p class="text-[12px] text-[#BDBDD3]">
                {{ $t('service.addressDetails') }}
              </p>
            </div>

            <img src="~/assets/imgs/map.png" alt="map icon">  
          </div>
        </div>    
      </div>
    </div>

    <form class="w-full max-w-lg mx-auto h-auto p-4" @submit.prevent="submitForm">
      <div class="grid grid-cols-1 text-end text-[16px] pb-3 font-semibold">
        <label class="mr-2 px-3 -mb-3 z-10 text-[#BDBDD3] border ms-auto border-white bg-white" for="country">
          {{ $t('form.country') }}
        </label>
        <input class="text-end border border-[#F7F7FC] rounded-[10px] p-3" type="text" id="country" :placeholder="$t('form.countryPlaceholder')" value="السعودية">
      </div>

      <div class="grid grid-cols-1 text-end text-[16px] pb-3 font-semibold">
        <label class="mr-2 px-3 -mb-3 z-10 text-[#BDBDD3] border ms-auto border-white bg-white" for="city">
          {{ $t('form.city') }}
        </label>
        <input class="text-end border border-[#F7F7FC] rounded-[10px] p-3" type="text" id="city" :placeholder="$t('form.cityPlaceholder')" value="جدة">
      </div>

      <div class="grid grid-cols-1 text-end text-[16px] pb-3 font-semibold">
        <label class="mr-2 px-3 -mb-3 z-10 text-[#BDBDD3] border ms-auto border-white bg-white" for="buildingNumber">
          {{ $t('form.buildingNumber') }}
        </label>
        <input class="text-end border border-[#F7F7FC] rounded-[10px] p-3" type="text" id="buildingNumber" :placeholder="$t('form.buildingNumberPlaceholder')" value="2">
      </div>

      <div class="grid grid-cols-1 text-end text-[16px] pb-3 font-semibold">
        <label class="mr-2 px-3 -mb-3 z-10 text-[#BDBDD3] border ms-auto border-white bg-white" for="floorNumber">
          {{ $t('form.floorNumber') }}
        </label>
        <input class="text-end border border-[#F7F7FC] rounded-[10px] p-3" type="text" id="floorNumber" :placeholder="$t('form.floorNumberPlaceholder')" value="4">
      </div>

      <div class="grid grid-cols-1 text-end text-[16px] pb-3 font-semibold">
        <label class="mr-2 px-3 -mb-3 z-10 text-[#BDBDD3] border ms-auto border-white bg-white" for="apartmentNumber">
          {{ $t('form.apartmentNumber') }}
        </label>
        <input class="text-end border border-[#F7F7FC] rounded-[10px] p-3" type="text" id="apartmentNumber" :placeholder="$t('form.apartmentNumberPlaceholder')" value="19">
      </div>

      <div class="p-4">
        <div class="text-right mb-4">
          <h3 class="text-gray-700">{{ $t('form.selectDateTime') }}</h3>
        </div>

        <div class="flex justify-between space-x-2 rtl:space-x-reverse">
          <button v-for="(day, index) in days" :key="index" 
                  @click="selectDay(index)" 
                  :class="['selectedBtn relative flex-1 text-center p-2 border-2 rounded-lg hover:border-[#3162DA] focus:border-[#3162DA] focus:outline-none', { 'border-[#3162DA]': selectedDay === index }]">
            <span class="block text-[16px] font-bold">{{ day.date }}</span>
            <span class="block text-xs text-gray-500">{{ day.name }}</span>
            <div v-if="selectedDay === index" class="selectedIcon absolute -top-2 right-0">
              <img src="~/assets/imgs/point.png" alt="Selected">
            </div>
          </button>
        </div>

        <!-- اختيار التوقيت -->
        <div class="mt-4 flex space-x-2 rtl:space-x-reverse">
          <button v-for="(time, index) in times" :key="index" 
                  @click="selectTime(index)" 
                  :class="['selectedBtn relative flex-1 text-center p-2 border-2 rounded-lg hover:border-[#3162DA] focus:border-[#3162DA] focus:outline-none', { 'border-[#3162DA]': selectedTime === index }]">
            <span class="block text-[16px] font-bold">{{ time }}</span>
            <div v-if="selectedTime === index" class="selectedIcon absolute -top-2 right-0">
              <img src="~/assets/imgs/true.png" alt="Selected">
            </div>
          </button>
        </div>
      </div>

      <div class="p-4">
        <h2 class="text-end py-3">{{ $t('form.paymentMethod') }}</h2>
        <div class="flex justify-end gap-9">
          
          <div>
            <button 
              @click="selectPaymentMethod('online')" 
              :class="[ 'relative flex-1 text-center p-3 border-2 rounded-lg hover:border-[#3162DA] focus:border-[#3162DA] focus:outline-none', { 'border-[#3162DA]': selectedPaymentMethod === 'online' }]">
              <div class="flex gap-2">
                <p class="block text-[16px] font-bold">{{ $t('form.paymentOnline') }}</p>
                <img src="~/assets/imgs/online.png" alt="Online Payment">
              </div>
              
              <div class="absolute -top-2 right-0" v-if="selectedPaymentMethod === 'online'">
                <img src="~/assets/imgs/true.png" alt="Selected">
              </div>
            </button>
          </div>

          <!-- زر الدفع نقدي -->
          <div>
            <button 
              @click="selectPaymentMethod('cash')" 
              :class="[ 'pb-4 relative flex-1 text-center p-3 border-2 rounded-lg hover:border-[#3162DA] focus:border-[#3162DA] focus:outline-none', { 'border-[#3162DA]': selectedPaymentMethod === 'cash' }]">
              <div class="flex gap-2">
                <p class="block text-[16px] font-bold">{{ $t('form.paymentCash') }}</p>
                <img src="~/assets/imgs/cash.png" alt="Cash Payment">
              </div>
              
              <div class="absolute -top-2 right-0" v-if="selectedPaymentMethod === 'cash'">
                <img src="~/assets/imgs/true.png" alt="Selected">
              </div>
            </button>
          </div>
        </div>
      </div>

      <div class="flex justify-end py-6">
        <button class="bg-[#3162DA] p-4 rounded-[90px] text-white px-8 text-[18px]" type="submit">
          {{ $t('form.confirmBooking') }}
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
const days = [
  { date: '18', name: 'الاثنين' },
  { date: '19', name: 'الثلاثاء' },
  { date: '21', name: 'الاربعاء' },
  { date: '22', name: 'الخميس' },
  { date: '23', name: 'الجمعة' }
];

const times = ['9:00 م', '9:45 م', '9:30 م'];

const selectedDay = ref(null);
const selectedTime = ref(null);
const selectedPaymentMethod = ref(null);

const selectDay = (index) => {
  selectedDay.value = index;
};

const selectTime = (index) => {
  selectedTime.value = index;
};

const selectPaymentMethod = (method) => {
  selectedPaymentMethod.value = method;
};
</script>

<style lang="scss">
.selectedIcon img {
  width: 20px;
  height: 20px;
}
.flexo {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.selectedBtn:focus .selectedIcon {
  @apply flex;
}
.selectedBtn {
  transition: border-color 0.4s ease;
}
</style>
