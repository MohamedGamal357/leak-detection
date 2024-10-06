<template>
  <div class="container grid md:grid-cols-2 grid-cols-1 gap-5">
    <div
      class="relative md:mb-[8rem] mb-3"
      v-for="item in items"
      :key="item.id"
    >
      <img
        :src="item.image"
        :alt="item.title"
        class="w-[100%] h-[330px] rounded-3xl"
      />
      <div
        class="bg-white rounded-xl md:absolute -bottom-[80px] p-5 left-[5%] md:w-[90%] space-y-2"
      >
        <h3 class="font-bold">
          {{ item.title }}
        </h3>
        <p class="text-secondary line-clamp-3 min-h-[72px]">
          {{ item.description }}
        </p>
        <div class="flex justify-between">
          <div class="">
            <img
              src="@/assets/imgs/calender.svg"
              alt="calender"
              class="inline"
            />
            <span class="text-secondary inline mx-1">{{
              item.added_date
            }}</span>
          </div>
          <nuxt-link
            :to="`/blog/${item.id}`"
            class="w-[40px] h-[40px] border border-primary rounded-full flex items-center justify-center text-primary"
          >
            <font-awesome-icon
              :icon="[
                'fas',
                $i18n.locale == 'en' ? 'arrow-right' : 'arrow-left',
              ]"
              class="ms-2"
            />
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  items: {
    required: true,
  },
});
</script>
