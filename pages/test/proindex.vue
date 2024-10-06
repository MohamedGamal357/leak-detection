<template>
    <div class="flex">
        <test-account />
    </div>
    
 <!-- <div class="w-full max-w-[1080px] m-auto px-4 sm:px-6 lg:px-8">
    <form action="" class="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div class="flex gap-3 h-[60px] mt-10 sm:mt-20">
            <button class="text-[16px] sm:text-[19px] border border-[#FE7270] rounded-[43px] text-[#FE7270] p-2 sm:p-3 w-full sm:w-[164px]">
                الغاء الطلب
            </button>
            <button class="text-[16px] sm:text-[19px] border rounded-[43px] bg-[#3162DA] text-white p-2 sm:p-3 w-full sm:w-[164px]" type="submit">
                تأجيل الطلب
            </button>
        </div>

        <div class="text-end py-4 grid grid-cols-1 gap-4">
            <h1 class="text-[20px] sm:text-[24px] font-bold">
                تفاصيل الطلب
            </h1>

            <div class="w-full sm:w-[544px] h-auto sm:h-[110px] rounded-[15px] border border-white shadow-lg flex gap-4 sm:gap-9">
                <div class="grid grid-cols-1 gap-4 p-3">
                    <img src="~/assets/imgs/massege.png" alt="">

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
                                الممكلة العربية السعودية
                                <font-awesome-icon icon="location-dot" />
                            </p>
                        </div>
                        <img src="~/assets/imgs/mansmall.png" alt="">
                    </div>
                    <p class="py-2 text-[15px] sm:text-[17px] font-bold">
                        <span class="text-[#ADB3DA] px-2">الخدمة :</span>
                        كشف تسرب مياه
                    </p>
                </div>
            </div>

            <div class="w-full sm:w-[544px] rounded-[15px] border border-white shadow-lg py-4 flex justify-end">
                <div class="text-end grid grid-cols-1 w-full sm:w-[330px]">
                    <h2 class="text-[#ADB3DA] px-2 text-[16px] sm:text-[18px] font-semibold">: تفاصيل المشكلة</h2>
                    <p class="text-[16px] sm:text-[18px] text-end px-2">لدي مشكلة في انابيب المياه الخاصة بي لا استطيع تحديد المشكلة و لكن هناك تسرب ملحوظ</p>
                </div>
            </div>

            <div class="w-full sm:w-[544px] rounded-[15px] border border-white shadow-lg py-4 flex justify-end">
                <div class="grid grid-cols-1 px-3">
                    <h2 class="text-[#ADB3DA] px-2 text-[16px] sm:text-[17px] font-semibold">طريقة الدفع</h2>
                    <div class="flex gap-3 py-2">
                        <p class="text-[16px] sm:text-[18px]">نقدي</p>
                        <img class="border border-[#F7F7FF] p-2 rounded-full bg-[#F7F7FF]" src="~/assets/imgs/cash.png" alt="">
                    </div>
                </div>
            </div>

            <div class="w-full sm:w-[544px] rounded-[15px] border border-white shadow-lg py-4 flex justify-end">
                <div class="grid grid-cols-1 px-3">
                    <h2 class="text-[#ADB3DA] px-2 text-[16px] sm:text-[17px] font-semibold">الموقع</h2>
                    <div class="py-2">
                        <img src="~/assets/imgs/map2.png" alt="">
                        <p class="pt-2 text-[16px] sm:text-[18px]">الممكلة العربية السعودية، جدة</p>
                    </div>
                </div>
            </div>
        </div>
    </form>
</div> -->
</template>

<script setup>
const selectedBtnn = ref(null); 
const selectedCat = ref(null); 

</script>

<style lang="scss">
.selected {
    @apply bg-primary;
}
</style>