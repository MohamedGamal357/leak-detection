<template>
  <footer class="footer container mt-12" v-if="items">
    <div class="container pt-20 md:pb-0 pb-20">
      <div class="min-h-[250px] grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8">
        <div>
          <p class="footerTitle">{{ $t("content.aboutUs") }}</p>
          <div>
            <ul class="space-y-3">
              <li>
                <nuxt-Link :to="localePath('/about')">{{ $t("NAV.about") }}</nuxt-Link>
              </li>
              <li>
                <nuxt-Link :to="localePath('/contact')">{{ $t("NAV.contact") }}</nuxt-Link>
              </li>
              <li>
                <!-- TermsConditions -->
                <nuxt-Link :to="localePath('/TermsConditions')">{{ $t("NAV.terms") }}</nuxt-Link>
              </li>
              <li>
                <!-- PrivacyPolicy -->
                <nuxt-Link :to="localePath('/PrivacyPolicy')">{{ $t("NAV.privacy") }}</nuxt-Link>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <p class="footerTitle">{{ $t("content.quickAccess") }}</p>
          <ul class="space-y-3">
            <li>
              <nuxt-Link :to="localePath('/services')">{{ $t("NAV.services") }}</nuxt-Link>
            </li>
            <li>
              <!-- orderdetails -->
              <nuxt-Link :to="localePath('/orderdetails')">{{ $t("content.requestService") }}</nuxt-Link>
            </li>
          </ul>
        </div>
        <div>
          <p class="footerTitle">{{ $t("content.haveQuestions") }}</p>
          <ul class="space-y-3">
            <li class="flex gap-3">
              <img src="~/assets/imgs/Phone.png" alt="phone" />
              <a :href="`tel:${items.contact.phone}`">0100154544</a>
            </li>
            <li class="flex gap-3">
              <img src="~/assets/imgs/Email.png" alt="email" />
              <a :href="`mailto:${items.contact.email}`">{{ items.contact.email }}</a>
            </li>
          </ul>
        </div>
        <div>
          <img src="~/assets/imgs/logofooter.png" alt="logo" class="ml-[100px] mb-4" />
          <p class="text-[18px]">{{ $t("content.exampleText") }}</p>
          <div class="social flex items-center justify-start mt-6 gap-5">
            <a :href="items.social_links.twitter_link" target="_blank">
              <font-awesome-icon :icon="['fab', 'twitter']" class="socialMediaIcon" />
            </a>
            <a :href="items.social_links.instagram_link" target="_blank">
              <font-awesome-icon :icon="['fab', 'instagram']" class="socialMediaIcon" />
            </a>
            <a :href="items.social_links.youtube_link" target="_blank">
              <font-awesome-icon :icon="['fab', 'youtube']" class="socialMediaIcon" />
            </a>
            <a :href="items.social_links.facebook_link" target="_blank">
              <font-awesome-icon :icon="['fab', 'facebook']" class="socialMediaIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-wrap gap-4 ml-[120px] mb-7">
      <img src="~/assets/imgs/app.png" alt="app logo" class="text-center" />
      <img src="~/assets/imgs/google.png" alt="google logo" class="text-center" />
    </div>
  </footer>

  <div class="p-5 bg-[#3162DA] flex items-center justify-around m-auto">
    <p class="text-white text-center text-[20px]">
      {{ $t("content.copyright") }}
    </p>
  </div>
</template>

<script setup>
const date = new Date().getFullYear();
const i18n = useI18n();
const config = useRuntimeConfig();
const loading = ref(false);
const items = ref(null);

function fetchData() {
  loading.value = true;
  $fetch("home", {
    method: "GET",
    baseURL: config.public.baseURL,
    headers: {
      "Accept-Language": i18n.locale.value,
    },
  })
    .then((res) => {
      items.value = res.data;
      loading.value = false;
    })
    .catch(() => (loading.value = false));
}

onMounted(() => fetchData());
</script>

<style lang="scss" scoped>
.footer {
  @apply bg-white text-black;
  .footerTitle {
    @apply text-black font-bold text-[22px] mb-5 uppercase;
  }
  .socialMediaIcon {
    @apply hover:text-primary hover:scale-110 transition duration-500 text-[#3162DA] text-3xl;
  }
  li {
    @apply text-[16px] font-semibold;
  }
  .social {
    @apply flex ml-[50px];
  }
}
.router-link-active {
  @apply text-blue border-none;
}
</style>
