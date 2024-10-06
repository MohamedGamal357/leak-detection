<template>
  <div>
    <!-- الصورة التي تظهر النافذة المنبثقة عند الضغط عليها -->
    <div @click="openModal" class="cursor-pointer">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-10 h-10 text-blue-500">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m0 0a2 2 0 00-2-2H5a2 2 0 00-2 2zm0 0v8a2 2 0 002 2h14a2 2 0 002-2V8" />
      </svg>
    </div>

    <!-- النافذة المنبثقة -->
    <transition name="modal">
      <div v-if="isOpen" class="fixed z-10 inset-0 overflow-y-auto">
        <div class="flex items-center justify-center min-h-screen">
          <div class="bg-white rounded-lg p-6 shadow-lg w-96 relative">
            <button @click="closeModal" class="absolute top-2 right-2 text-gray-500 hover:text-gray-700">X</button>
            <!-- محتوى الشات -->
            <div class="flex flex-col h-80">
              <div class="flex-1 overflow-auto">
                <!-- رسالة المستخدم -->
                <div class="text-left">
                  <p class="bg-gray-200 p-2 rounded-lg my-2 max-w-xs">مرحبا اين انت</p>
                </div>
              </div>
              <!-- إدخال النص -->
              <div class="mt-4">
                <input type="text" class="w-full p-2 border rounded-lg" placeholder="اكتب شيئا...">
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false
    };
  },
  methods: {
    openModal() {
      this.isOpen = true;
    },
    closeModal() {
      this.isOpen = false;
    }
  }
};
</script>

<style scoped>
.modal-enter-active, .modal-leave-active {
  transition: opacity 0.5s;
}
.modal-enter, .modal-leave-to {
  opacity: 0;
}
</style>
