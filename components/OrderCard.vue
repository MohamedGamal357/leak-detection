<template>
    <div class="flex items-center justify-between bg-white shadow-md rounded-lg p-6 mb-4">
      <div class="flex items-center">
        <img :src="order.img" alt="client image" class="w-12 h-12 rounded-full mr-4" />
        <div class="text-end">
          <h3 class="font-semibold">{{ order.client }}</h3>
          <p class="text-gray-400">{{ order.location }}</p>
        </div>
      </div>
  
      <div class="text-center">
        <p class="text-gray-400">{{ order.service }}</p>
        <div class="flex items-center space-x-1 justify-center text-gray-400">
          <font-awesome-icon icon="calendar-alt" />
          <span>{{ order.date }}</span>
        </div>
        <div class="flex items-center space-x-1 justify-center text-gray-400">
          <font-awesome-icon icon="clock" />
          <span>{{ order.time }}</span>
        </div>
      </div>
  
      <div>
        <span
          :class="order.status === 'مقبول' ? 'bg-green-200 text-green-800' :
                   order.status === 'في الطريق' ? 'bg-yellow-200 text-yellow-800' :
                   'bg-blue-200 text-blue-800'"
          class="px-4 py-2 rounded-full font-semibold"
        >
          {{ order.status }}
        </span>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      order: Object,
    },
  };
  </script>
  