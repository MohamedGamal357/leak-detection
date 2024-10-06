<template>
  <div class="w-full md:w-1/2 lg:w-1/3 flex mt-7">
    <div class="py-5">
      <div class="grid grid-cols-1 justify-items-center">
        <img class="w-[120px] md:w-[150px] lg:w-[180px]" src="~/assets/imgs/manprofile2.png" alt="">

        <li class="flex items-center justify-end">
          <!-- رابط تغيير كلمة المرور -->
          <a href="#" @click.prevent="showPasswordModal = true" class="text-blue-500 flex items-center space-x-2">
            <span class="font-bold">{{ $t("changePassword.title") }}</span>
            <font-awesome-icon icon="key" />
          </a>
        </li>

        <!-- نافذة منبثقة (Modal) لتغيير كلمة المرور -->
        <div v-if="showPasswordModal" class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div class="bg-white p-6 rounded-lg shadow-lg w-[520px] max-w-md relative">
            <!-- زر الإغلاق -->
            <button @click="showPasswordModal = false" class="absolute top-2 right-2 text-gray-700 hover:text-gray-900 text-xl">&times;</button>

            <!-- عنوان النافذة -->
            <h2 class="text-center text-xl font-bold mb-4">{{ $t("changePassword.modalTitle") }}</h2>

            <!-- حقول كلمة المرور -->
            <div class="space-y-4 text-end text-[18px] font-semibold">
              <div>
                <label class="block mb-1 text-gray-700">{{ $t("changePassword.currentPassword") }}</label>
                <input v-model="currentPassword" type="password" class="text-end w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" />
              </div>

              <div>
                <label class="block mb-1 text-gray-700">{{ $t("changePassword.newPassword") }}</label>
                <input v-model="newPassword" type="password" class="text-end w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" />
              </div>

              <div>
                <label class="block mb-1 text-gray-700">{{ $t("changePassword.confirmPassword") }}</label>
                <input v-model="confirmPassword" type="password" class="text-end w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" />
              </div>
            </div>

            <!-- زر التأكيد -->
            <button @click="changePassword" class="mt-6 w-full bg-[#3162DA] text-white rounded-full py-2 font-bold">{{ $t("changePassword.confirmButton") }}</button>
          </div>
        </div>
      </div>

      <form @submit.prevent="saveData">
        <div class="grid grid-cols-1 text-end py-4 w-full md:w-[350px]">
          <label for="name" class="text-[17px] text-[#BDC1DF]">{{ $t("profile.name") }}</label>
          <input
            type="text"
            id="name"
            v-model="name"
            class="text-[18px] border-2 rounded-[20px] w-full h-[62px] text-end px-4"
          />
        </div>

        <div class="grid grid-cols-1 text-end w-full md:w-[350px]">
          <label for="phone" class="text-[17px] text-[#BDC1DF]">{{ $t("profile.phone") }}</label>
          <div class="flex py-6">
            <input
              v-model="phone"
              type="text"
              id="phone"
              placeholder="105685696454"
              class="flex-1 px-4 py-4 border text-end border-gray-300 rounded-[20px] focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            
            <select
              v-model="selectedCountryCode"
              class="w-[80px] md:w-[120px] border border-gray-300 rounded-[20px] px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 ml-2"
            >
              <option v-for="code in countryCodes" :key="code.value" :value="code.value">
                {{ code.label }}
              </option>
            </select>
          </div>
          <button class="text-[16px] sm:text-[19px] border rounded-[43px] bg-[#3162DA] text-white p-2 sm:p-3 w-full md:w-[100px]" type="submit">
            {{ $t("profile.save") }}
          </button>
        </div>
      </form>
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
        // يمكنك إضافة المزيد من أكواد الدول هنا
      ],
      showPasswordModal: false, // التحكم في عرض النافذة المنبثقة لتغيير كلمة المرور
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    };
  },
  methods: {
    confirmPhone() {
      alert(`تم تأكيد رقم الهاتف: ${this.selectedCountryCode} ${this.phone}`);
    },
    saveData() {
      alert(`تم حفظ البيانات: الاسم: ${this.name} ورقم الهاتف: ${this.selectedCountryCode} ${this.phone}`);
    },
    changePassword() {
      // تحقق من المدخلات أو أي منطق خاص بتغيير كلمة المرور
      if (this.newPassword !== this.confirmPassword) {
        alert("كلمات المرور الجديدة وتأكيد كلمة المرور غير متطابقتين.");
        return;
      }

      if (this.currentPassword && this.newPassword) {
        // إضافة منطق تغيير كلمة المرور هنا (مثلاً استدعاء API)
        alert("تم تغيير كلمة المرور بنجاح.");
        this.showPasswordModal = false; // إغلاق الـ modal بعد العملية
      } else {
        alert("يرجى ملء جميع الحقول.");
      }
    }
  }
};
</script>
