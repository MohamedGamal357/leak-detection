<template>
  <div class="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
    <div :class="modalSizeClass" class="bg-white text-black px-[70px] py-6 rounded-lg shadow-lg max-w-md">
      
      <!-- زر الإغلاق -->
      <button @click="$emit('close')" class="text-gray-500 float-right text-[29px]">&times;</button>

      <!-- محتويات التبويب بناءً على التبويب النشط -->
      <div v-if="activeTab === 'login'">
  <h3 class="text-[28px] font-semibold text-center mb-4">{{ $t("login.title") }}</h3>

  <!-- نموذج تسجيل الدخول -->
  <form @submit.prevent="handleLogin">
    <div class="grid grid-cols-1 text-end w-full md:w-[350px]">
      <label for="phone" class="text-[17px] font-semibold text-[#BDC1DF]">{{ $t("login.phone") }}</label>
      <div class="flex py-6">

        <!-- حقل إدخال رقم الهاتف -->
        <input
          type="text"
          id="phone"
          placeholder="=95652154888"
          class="flex-1 px-4 py-4 border text-end border-gray-300 rounded-[20px] focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <!-- قائمة اختيار رمز الدولة -->
        <select
          class="w-[80px] md:w-[120px] border border-gray-300 rounded-[20px] px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 ml-2"
        >
          <option value="+20">+20 🇪🇬</option>
          <option value="+971">+971 🇦🇪</option>
          <option value="+966">+966 🇸🇦</option>
          <option value="+1">+1 🇺🇸</option>
          <option value="+44">+44 🇬🇧</option>
        </select>
      </div>
    </div>
    <div class="grid grid-cols-1 text-end py-4 w-full md:w-[350px]">
      <label for="password" class="text-[17px] text-[#BDC1DF] font-semibold">{{ $t("login.password") }}</label>
      <input
        placeholder="........."
        type="password"
        id="password"
        v-model="password"
        class="text-[35px] border-2 rounded-[20px] w-full h-[62px] text-end px-4"
      />
      <button class="text-end pt-3 text-[17px] font-semibold text-[#3162DA]" @click="activeTab = 'forgot'">{{ $t("login.forgotPassword") }}</button>
    </div>
    <NuxtLink :to="localePath('/test/proindex')">
  <button class="text-[16px] font-bold border rounded-[100px] bg-[#3162DA] text-white w-[360px] h-[64px]" type="button">
    {{ $t("login.submit") }}
  </button>
</NuxtLink>

    <button class="pl-[80px] py-2 text-[18px] text-[#3162DA]" @click="activeTab = 'signup'">
      <span class="text-black">{{ $t("login.noAccount") }}</span> {{ $t("login.createAccount") }}
    </button>
  </form>
</div>

      <!-- نموذج إنشاء حساب -->
      <div v-if="activeTab === 'signup'">
    <h3 class="text-[28px] font-semibold text-center mb-4">{{ $t("signup.title") }}</h3>
    <form @submit.prevent="handleSignup">
        <div class="grid grid-cols-1 text-end w-full">
            <div class="py-3">
                <label for="text" class="text-[17px] text-[#BDC1DF] font-semibold">{{ $t("signup.name") }}</label>
                <input
                    value="احمد"
                    type="text"
                    id="text"
                    v-model="signupData.name"
                    class="text-[19px] border-2 rounded-[20px] w-full h-[62px] text-end px-4"
                />
            </div>
            <label for="phone" class="text-[17px] font-semibold text-[#BDC1DF]">{{ $t("signup.phone") }}</label>
            <div class="flex">
                <input
                    type="text"
                    id="phone"
                    placeholder="105685696454"
                    class="flex-1 px-4 py-4 border text-end border-gray-300 rounded-[20px] focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <select
                    class="w-[80px] md:w-[120px] border border-gray-300 rounded-[20px] px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 ml-2"
                >
                    <option value="+20">+20 🇪🇬</option>
                    <option value="+971">+971 🇦🇪</option>
                    <option value="+966">+966 🇸🇦</option>
                    <option value="+1">+1 🇺🇸</option>
                    <option value="+44">+44 🇬🇧</option>
                </select>
            </div>
        </div>
        <div class="grid grid-cols-1 text-end py-4 w-full md:w-[350px]">
            <label for="password" class="text-[17px] text-[#BDC1DF] font-semibold">{{ $t("signup.password") }}</label>
            <input
                placeholder="........."
                type="password"
                id="password"
                v-model="signupData.password"
                class="text-[35px] border-2 rounded-[20px] w-full h-[62px] text-end px-4"
            />
            <label for="confirmPassword" class="text-[17px] text-[#BDC1DF] font-semibold">{{ $t("signup.confirmPassword") }}</label>
            <input
                placeholder="........."
                type="password"
                id="confirmPassword"
                v-model="signupData.confirmPassword"
                class="text-[35px] border-2 rounded-[20px] w-full h-[62px] text-end px-4"
            />
        </div>
        <button class="text-[16px] font-bold border rounded-[100px] bg-[#3162DA] text-white w-[360px] h-[64px]" type="submit">
            {{ $t("signup.createAccount") }}
        </button>
        <button class="pl-[80px] py-2 text-[18px] text-[#3162DA]" @click="activeTab = 'login'">
            <span class="text-black">{{ $t("signup.alreadyHaveAccount") }}</span> {{ $t("signup.login") }}    
        </button>
    </form>
</div>


      <!-- نموذج نسيت كلمة المرور -->
      <div v-if="activeTab === 'forgot'">
    <h3 class="text-[28px] font-semibold text-center mb-4">{{ $t("forgot.title") }}</h3>
    <form @submit.prevent="handleIdentityVerification">
        <input v-model="forgotEmail" type="email" placeholder="forgetpassword" class="input-field mb-2" />
        <button type="submit" class="btn-primary">{{ $t("forgot.submit") }}</button>
    </form>
</div>


      <!-- نموذج تأكيد الهوية -->
      <div v-if="activeTab === 'identityVerification'">
    <h3 class="text-lg font-semibold text-center mb-4">{{ $t("identityVerification.title") }}</h3>
    <form @submit.prevent="handlePasswordReset">
        <input v-model="identityCode" type="text" placeholder="identityVerification" class="input-field mb-2" />
        <button type="submit" class="btn-primary">{{ $t("identityVerification.submit") }}</button>
    </form>
</div>


      <!-- نموذج تغيير كلمة المرور -->
      <div v-if="activeTab === 'passwordReset'">
    <h3 class="text-lg font-semibold text-center mb-4">{{ $t("passwordReset.title") }}</h3>
    <form @submit.prevent="handlePasswordUpdate">
        <input v-model="newPassword" type="password" placeholder="{{ $t('passwordReset.newPasswordPlaceholder') }}" class="input-field mb-2" />
        <input v-model="confirmNewPassword" type="password" placeholder="{{ $t('passwordReset.confirmPasswordPlaceholder') }}" class="input-field mb-2" />
        <button type="submit" class="btn-primary">{{ $t("passwordReset.submit") }}</button>
    </form>
</div>

    </div>
  </div>
</template>
<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';

// متغيرات الحالة
const activeTab = ref('login'); // التبويب النشط، افتراضيًا تسجيل الدخول
const signupData = ref({
  name: '',
  phone: '',
  password: '',
  confirmPassword: ''
});
const forgotEmail = ref('');
const identityCode = ref('');
const newPassword = ref('');
const confirmNewPassword = ref('');

// دالة لحساب حجم المودال
const modalSizeClass = computed(() => {
  switch (activeTab.value) {
    case 'login':
      return 'w-[500px] h-[500px]';
    case 'signup':
      return 'w-[500px] h-[600px]';
    case 'forgot':
    case 'identityVerification':
    case 'passwordReset':
      return 'w-[400px] h-[250px]';
    default:
      return 'w-[500px] h-[650px]';
  }
});

// استخدام useRouter للتوجيه
const router = useRouter();

function handleLogin() {
  router.push('/test/proindex');
}

function handleSignup() {
  alert('تم إنشاء الحساب بنجاح!');
}

function handleIdentityVerification() {
  activeTab.value = 'identityVerification';
}

function handlePasswordReset() {
  activeTab.value = 'passwordReset';
}

function handlePasswordUpdate() {
  alert('تم تغيير كلمة المرور بنجاح!');
}
</script>


<style scoped>
.input-field {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.btn-primary {
  display: block;
  width: 100%;
  padding: 0.75rem;
  background-color: #003773;
  color: white;
  text-align: center;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
