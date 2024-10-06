<template>
  <div class="container mx-auto p-6 max-w-4xl">
    <!-- التبويبات -->
    <div class="flex justify-around py-4 space-x-2">
      <button
        v-for="(tab, index) in tabs"
        :key="index"
        :class="tab === selectedTab ? 'bg-[#3162DA] text-white' : 'text-[#BDC1DF] bg-white'"
        class="py-3 px-6 rounded-full border-2 border-[#E4E6F3] transition duration-200 focus:outline-none"
        @click="selectedTab = tab"
      >
        {{ $t(tab) }}
      </button>
    </div>

    <!-- المحتوى الخاص بالتبويب المحدد -->
    <div v-if="selectedTab === 'currentOrders'">
      <div v-for="(order, index) in currentOrders" :key="index" class="mb-4">
        <NuxtLink to="/orderdetails" class="flex items-center justify-between bg-white shadow-md rounded-lg p-6">
          <div>
            <span
              :class="order.status === 'مقبول' ? 'bg-[#F6FCF8] text-[#12B347]' :
                       order.status === 'في الطريق' ? 'bg-[#F6FCF8] text-[#FFD600]' :
                       'bg-[#F6FCF8] text-[#FF9900]'"
              class="px-4 py-2 rounded-full font-semibold"
            >
              {{ $t(order.status) }}
            </span>
          </div>

          <div class="text-center">
            <p class="text-gray-400">{{ $t(order.service) }}</p>
            <div class="flex items-center space-x-1 justify-center text-gray-400">
              <font-awesome-icon icon="calendar-alt" />
              <span>{{ order.date }}</span>
            </div>
            <div class="flex items-center space-x-1 justify-center text-gray-400">
              <font-awesome-icon icon="clock" />
              <span>{{ order.time }}</span>
            </div>
          </div>

          <div class="flex items-center">
            <div class="text-end">
              <h3 class="font-semibold">{{ $t(order.client) }}</h3>
              <p class="text-gray-400">{{ $t(order.location) }}</p>
            </div>
            <img src="~/assets/imgs/mansmall.png" alt="client image" class="w-12 h-12 rounded-full mr-4" />
          </div>
        </NuxtLink>
      </div>
    </div>

    <div v-else-if="selectedTab === 'deferredOrders'">
      <p class="text-center text-gray-500">{{ $t("noDeferredOrders") }}</p>
    </div>

    <div v-else-if="selectedTab === 'completedOrders'">
      <p class="text-center text-gray-500">{{ $t("noCompletedOrders") }}</p>
    </div>

    <div v-else-if="selectedTab === 'previousOrders'">
      <p class="text-center text-gray-500">{{ $t("noPreviousOrders") }}</p>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default {
  components: {
    FontAwesomeIcon,
  },
  data() {
    return {
      selectedTab: "currentOrders", // تم تعديل القيمة الافتراضية للتبويب النشط
      tabs: ["currentOrders", "deferredOrders", "completedOrders", "previousOrders"], // تم تعديل أسماء التبويبات
      currentOrders: [
        {
          status: "مقبول",
          time: "05:00 مساءً",
          date: "25 أكتوبر 2023",
          service: "كشف تسرب مياه",
          client: "أحمد محمد",
          location: "المملكة العربية السعودية",
          img: "~/assets/imgs/profile-pic.jpg",
          link: "/order-details/1", // الرابط إلى صفحة الطلب
        },
        {
          status: "في الطريق",
          time: "05:00 مساءً",
          date: "25 أكتوبر 2023",
          service: "كشف تسرب مياه",
          client: "أحمد محمد",
          location: "المملكة العربية السعودية",
          img: "~/assets/imgs/profile-pic.jpg",
          link: "/order-details/2", // الرابط إلى صفحة الطلب
        },
        {
          status: "جاري الآن",
          time: "05:00 مساءً",
          date: "25 أكتوبر 2023",
          service: "كشف تسرب مياه",
          client: "أحمد محمد",
          location: "المملكة العربية السعودية",
          img: "~/assets/imgs/profile-pic.jpg",
          link: "/order-details/3", // الرابط إلى صفحة الطلب
        },
      ],
    };
  },
};
</script>

<style scoped>
button {
  min-width: 150px;
}
</style>
