<!-- layouts/profile-layout.vue -->
<template>
    <div class="flex">
      <!-- الجزء الثابت: الحساب الشخصي -->
      <aside class="w-1/4 bg-white p-4">
        <!-- صورة واسم المستخدم والمعلومات الأخرى -->
        <img src="/path-to-image" alt="Profile Picture" class="w-24 h-24 rounded-full mx-auto mb-4">
        <p class="text-center">أحمد محمود</p>
        <p class="text-center text-sm">+966-10565896454</p>
      </aside>
  
      <!-- هنا هيكون المحتوى المتغير لكل صفحة -->
      <main class="w-3/4 p-8">
        <nuxt />
      </main>
    </div>
  </template>
  