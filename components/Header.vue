<template>
  <nav 
    :class="isHomePage ? 'text-white bg-[#003773]' : 'bg-white text-black'"
    class="header py-3 flex items-center justify-around m-auto">
    
    <!-- شعار -->
    <div class="flex gap-5 items-center">
      <div class="relative">
        
        <!-- أيقونة الإشعارات -->
        <div @click="toggleNotificationPopup" class="cursor-pointer border border-[#003773] bg-[#003773] rounded-[20px]">
          <img src="~/assets/imgs/nafo.png" alt="{{ $t('content.notificationsAlt') }}" class="w-[40px] h-[40px]" />
        </div>

        <!-- النافذة المنبثقة للإشعارات -->
        <div v-if="isNotificationPopupOpen" class="absolute mt-2 w-[344px] h-[270px] text-black bg-white shadow-lg rounded-lg p-4 z-50">
          <div class="flex justify-between items-center mb-4">
            <h3 class="text-lg font-semibold">{{ $t('content.notifications') }}</h3>
            <button @click="clearNotifications" class="text-red-500 hover:text-red-700">
              <i class="fas fa-trash"></i>
            </button>
          </div>

          <ul>
            <li v-for="(notification, index) in notifications" :key="index" class="p-2 border-b cursor-pointer hover:bg-gray-100"
                @click="showNotificationDetails(notification)">
              <div class="flex justify-between items-center">
                <span>{{ notification.title }}</span>
                <i class="fas fa-file-alt"></i>
              </div>
            </li>
          </ul>
        </div>

        <!-- النافذة المنبثقة لتفاصيل الإشعار -->
        <div v-if="isDetailPopupOpen" class="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
          <div class="bg-white p-6 rounded-lg w-[400px] shadow-lg">
            <h3 class="text-xl font-semibold mb-4">{{ selectedNotification.title }}</h3>
            <p class="text-gray-600">{{ selectedNotification.details }}</p>
            <button @click="closeDetailPopup" class="mt-4 py-2 px-4 bg-blue-600 text-black rounded-lg">{{ $t('content.close') }}</button>
          </div>
        </div>
      </div>

      <!-- أيقونة الشخص لفتح الموديل -->
      <div @click="toggleModal" class="cursor-pointer border border-[#003773] bg-[#003773] w-[40px] rounded-[30px]">
        <img 
          src="~/assets/imgs/person.png"
          alt="{{ $t('content.personIconAlt') }}" 
          class="w-[35px] h-[35px] mt-1" />
      </div>

      <!-- رابط تغيير اللغة -->
      <nuxt-link :to="switchLocalePath($i18n.locale == 'ar' ? '/' : 'ar')">
        <font-awesome-icon :icon="['fas', 'globe']" />
        {{ $t(`NAV.${$i18n.locale}`) }}
      </nuxt-link>
    </div>

    <!-- الروابط الرئيسية -->
    <div class="lg:flex  items-center gap-6">
      <ul class="flex justify-center font-bold gap-8 uppercase">
        <li>
          <nuxt-link to="/">{{ $t('NAV.home') }}</nuxt-link>
        </li>
        <li>
          <nuxt-link :to="localePath('/about')">{{ $t('NAV.about') }}</nuxt-link>
        </li>
        <li>
          <nuxt-link :to="localePath('/services')">{{ $t('NAV.services') }}</nuxt-link>
        </li>
        <li>
          <nuxt-link :to="localePath('/contact')">{{ $t('NAV.contact') }}</nuxt-link>
        </li>
      </ul>
    </div>

    <!-- الشعار -->
    <img 
      v-if="$route.path === '/' || $route.path === '/ar'"
      src="~/assets/imgs/logofooter.png" 
      alt="{{ $t('content.logoAlt') }}" 
      class="w-[71px] h-[37px] cursor-pointer" 
      @click="reloadPage" />
    
    <img 
      v-else
      src="~/assets/imgs/logofooter.png" 
      alt="{{ $t('content.logoAlt') }}" 
      class="w-[71px] h-[37px] cursor-pointer" 
      @click="reloadPage" />

    <!-- الموديل الذي يظهر عند الضغط على أيقونة الشخص -->
    <Modal v-if="isModalOpen" @close="toggleModal" />
  </nav>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import Modal from '~/components/Modal.vue';
import { ref } from 'vue';
const route = useRoute();

// التحكم في عرض الموديل
const isModalOpen = ref(false);
const toggleModal = () => {
  isModalOpen.value = !isModalOpen.value;
};

// التحكم في إشعارات النوافذ
const isNotificationPopupOpen = ref(false);
const notifications = ref([
  { title: 'تم الدفع بنجاح قم بالدفع الآن!', details: 'تم تأكيد الدفع للخدمة بنجاح. يمكنك متابعة الخدمات الآن.' },
  { title: 'تم الدفع بنجاح قم بتقييم الفني', details: 'يرجى تقييم الفني الذي قام بالخدمة.' },
  { title: 'إخبارنا عن تجربتك مع شركة تسريب المياه', details: 'نود سماع رأيك حول تجربتك الأخيرة.' },
  { title: 'تمت الموافقة على تأجيل طلب دعمك!', details: 'تم تأجيل الطلب بناءً على مشكلتك. سوف نقوم بإرسال موعد جديد.' },
]);

// التحكم في تفاصيل الإشعارات
const isDetailPopupOpen = ref(false);
const selectedNotification = ref({});
const toggleNotificationPopup = () => {
  isNotificationPopupOpen.value = !isNotificationPopupOpen.value;
};
const showNotificationDetails = (notification) => {
  selectedNotification.value = notification;
  isDetailPopupOpen.value = true;
};
const closeDetailPopup = () => {
  isDetailPopupOpen.value = false;
};
const clearNotifications = () => {
  notifications.value = [];
};

// الصفحة الرئيسية
const isHomePage = computed(() => route.path === '/');

// تغيير اللغة
const { t } = useI18n();
const switchLocalePath = (path) => {
  return path;
};
</script>

<style lang="scss">
.header {
  .router-link-active {
    @apply relative inline-block;
  }

  .router-link-active::after {
    @apply m-auto h-[1px]  w-[50%] absolute -bottom-1 left-[25%];
    content: "";
  }
}
</style>
