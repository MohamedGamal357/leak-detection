<template>
  <div class="">
    <div class="m-auto mt-10 flex flex-col md:flex-row justify-end px-[60px]">
      <div class="w-full md:w-[358px] h-[475px] rounded-[40px] text-end shadow-2xl">
        <h1 class="text-[24px] font-semibold px-3 py-4">{{ $t("profile.title") }}</h1>
        <div class="flex flex-col md:flex-row justify-end py-4 items-center">
          <div class="text-center md:text-right">
            <h2 class="text-[17px] font-bold">{{ $t("profile.name") }}</h2>
            <div class="flex justify-center md:justify-end items-center">
              <img class="px-1" src="~/assets/imgs/sa.png" alt="">
              <p class="text-[#BDBDD3]">+966-105685696</p>
            </div>
          </div>
          <img class="px-3 w-[100px]" src="~/assets/imgs/man2.png" alt="">
        </div>
        <aside class="w-full max-w-xs p-4 bg-white text-end">
          <ul class="space-y-6">
            <li class="flex items-center justify-between py-3">
              <font-awesome-icon icon="arrow-left" />
              <NuxtLink to="/test/address" class="text-gray-700 flex items-center space-x-2">
                <span class="text-[17px] font-bold">{{ $t("profile.orders") }}</span>
                <font-awesome-icon icon="folder-minus" />
              </NuxtLink>
            </li>
            <li class="flex items-center justify-between py-3">
              <div class="flex items-center">
                <label class="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" class="sr-only peer" />
                  <div
                    class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:bg-gray-700 dark:border-gray-600 peer-checked:bg-blue-600"
                  ></div>
                </label>
              </div>
              <a href="#" class="text-gray-700 flex items-center space-x-2">
                <span class="text-[17px] font-bold">{{ $t("profile.notifications") }}</span>
                <font-awesome-icon icon="bell" />
              </a>
            </li>
            <li class="flex items-center justify-end py-3">
              <!-- رابط تسجيل الخروج -->
              <a href="#" @click.prevent="showModal = true" class="text-red-500 flex items-center space-x-2">
                <span class="font-bold">{{ $t("profile.logout") }}</span>
                <font-awesome-icon icon="arrow-right-from-bracket" flip="horizontal" />
              </a>
            </li>

            <!-- نافذة منبثقة (Modal) -->
            <div v-if="showModal" class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
              <div class="bg-white p-6 rounded-lg shadow-lg max-w-sm">
                <p class="text-center mb-4 text-lg font-semibold">{{ $t("profile.confirmLogout") }}</p>
                <div class="flex gap-3 text-[19px] font-semibold">
                  <!-- زر نعم -->
                  <button @click="confirmLogout" class="bg-blue-600 hover:bg-[#3162DA] hover:text-white border border-[#3162DA] text-[#3162DA] rounded-full px-6 py-2">
                    {{ $t("profile.yes") }}
                  </button>
                  <!-- زر لا -->
                  <button @click="showModal = false" class="border border-[#3162DA] hover:bg-[#3162DA] hover:text-white text-[#3162DA] rounded-full px-7 py-2">
                    {{ $t("profile.no") }}
                  </button>
                </div>
              </div>
            </div>

            <li class="flex items-center justify-end">
              <!-- رابط حذف الحساب -->
              <a href="#" @click.prevent="showDeleteModal = true" class="text-red-500 flex items-center space-x-2">
                <span class="font-bold">{{ $t("profile.deleteAccount") }}</span>
                <font-awesome-icon icon="trash" />
              </a>
            </li>

            <!-- نافذة منبثقة (Modal) لحذف الحساب -->
            <div v-if="showDeleteModal" class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
              <div class="bg-white p-6 rounded-lg shadow-lg max-w-sm">
                <p class="text-center mb-4 text-lg font-semibold">{{ $t("profile.confirmDelete") }}</p>
                <div class="flex gap-3 text-[19px] font-semibold">
                  <!-- زر نعم -->
                  <button @click="confirmDelete" class="border border-[#3162DA] hover:bg-[#EF4444] hover:text-white hover:border-[#EF4444] text-[#3162DA] rounded-full px-7 py-2">
                    {{ $t("profile.yes") }}
                  </button>
                  <!-- زر لا -->
                  <button @click="showDeleteModal = false" class="border border-[#3162DA] hover:bg-[#3162DA] hover:text-white text-[#3162DA] rounded-full px-7 py-2">
                    {{ $t("profile.no") }}
                  </button>
                </div>
              </div>
            </div>
          </ul>
        </aside>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'محمد',
      phone: '01017751548',
      selectedCountryCode: '+966', // القيمة الافتراضية هي السعودية
      countryCodes: [
        { label: '+966 (Sa)', value: '+966' },
        { label: '+20 (Eg)', value: '+20' },
        { label: '+971 (UA)', value: '+971' },
        { label: '+1 (US)', value: '+1' },
        { label: '+44 (UK)', value: '+44' }
      ],
      showModal: false, // خاص بالـ modal لتسجيل الخروج
      showDeleteModal: false // خاص بالـ modal لحذف الحساب
    };
  },
  methods: {
    confirmPhone() {
      alert(`تم تأكيد رقم الهاتف: ${this.selectedCountryCode} ${this.phone}`);
    },
    saveData() {
      alert(`تم حفظ البيانات: الاسم: ${this.name} ورقم الهاتف: ${this.selectedCountryCode} ${this.phone}`);
    },
    confirmLogout() {
      // تنفيذ عملية تسجيل الخروج هنا
      this.showModal = false;
      // يمكنك إضافة منطق تسجيل الخروج هنا مثل الانتقال إلى صفحة أخرى
    },
    confirmDelete() {
      // منطق حذف الحساب هنا
      this.showDeleteModal = false;
      alert("تم حذف الحساب بنجاح");
      // يمكنك إضافة منطق إضافي لحذف الحساب مثل استدعاء API أو الانتقال إلى صفحة أخرى
    }
  }
};
</script>
