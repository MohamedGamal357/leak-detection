<template>
    
    <div class="w-[358px] h-[475px]  rounded-[40px] text-end shadow-2xl">

<h1 class="text-[24px] font-semibold px-3 py-4">
    الحساب الشخصي
</h1>

<div class="flex justify-end py-4">

<div class="">
    <h2 class="text-[17px] font-bold">
        احمد محمود
    </h2>
    <div class="flex ">
        <img
    class="px-1" 
    src="~/assets/imgs/sa.png" 
    alt="">
        <p class="text-[#BDBDD3]">
        +966-105685696
    </p>
   
    </div>
    
</div>
<img 
class="px-3"
src="~/assets/imgs/man2.png" 
alt="">
</div>
<aside class="w-full max-w-xs p-4 bg-white text-end">
    <ul class="space-y-6">
      <li class="flex items-center justify-between py-3">
        <font-awesome-icon icon="arrow-left" />
        <nuxtlink to="/test/pofile" class="text-gray-700 flex items-center space-x-2">
          <span>طلباتي</span>
          <font-awesome-icon icon="folder-minus" />
        </nuxtlink>
      </li>
      <li class="flex items-center justify-between py-3">
        <div class="flex items-center">
    <label class="relative inline-flex items-center cursor-pointer">
      <input type="checkbox"  class="sr-only peer" />
      <div
        class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:bg-gray-700 dark:border-gray-600 peer-checked:bg-blue-600"
      ></div>
      <span class="ml-3 text-sm font-medium text-gray-900"> </span>
    </label>
  </div>
        <a href="#" class="text-gray-700 flex items-center space-x-2">
          <span>الإشعارات</span>
          <font-awesome-icon icon="bell" />
        </a>
      </li>

     

      <li class="flex items-center justify-end py-3">
        <a href="#" class="text-red-500 flex items-center space-x-2">
          <span>تسجيل الخروج</span>
          <font-awesome-icon icon="arrow-right-from-bracket" flip="horizontal" />
        </a>
      </li>

      <li class="flex items-center justify-end">
        <a href="#" class="text-red-500 flex items-center space-x-2">
          <span>حذف الحساب</span>
          <font-awesome-icon icon="trash" />
        </a>
      </li>
    </ul>
  </aside>
    </div>
</template>