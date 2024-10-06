<template>
  <section 
    class="relative bg-cover bg-no-repeat bg-center min-h-[500px] md:h-[700px] bgk">
    <div class="container mx-auto flex flex-col-reverse md:flex-row items-center h-full">
      <div class="w-full md:w-1/2 p-8 text-white">
        <h1 
          class="text-[24px] md:text-[32px] lg:text-[40px] font-bold mb-4" 
          :class="{ 'text-right': isArabic, 'text-left': !isArabic }">
          {{ $t("about.maintenanceImportance") }}
        </h1>
        <p 
          class="text-[14px] md:text-[16px] lg:text-[18px] leading-relaxed" 
          :class="{ 'text-right': isArabic, 'text-left': !isArabic }">
          {{ $t("about.maintenanceDescription") }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  items: {
    required: false,
  },
});

// هنا نحدد ما إذا كانت اللغة عربية أو إنجليزية
const isArabic = true; // يمكنك تعديل هذا حسب اللغة الفعلية المستخدمة
</script>

<style>
.bgk {
  background-image: url('~/assets/imgs/about.png');
}

.text-right {
  text-align: right;
}

.text-left {
  text-align: left;
}
</style>
