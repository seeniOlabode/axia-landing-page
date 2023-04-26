<template>
  <site-header
    class="fixed left-0 right-0 top-0 layout-container xl:px-[320px]"
  />
  <main class="mt-[56px] sm:mt-[100px]">
    <site-hero class="layout-container mx-auto" />
    <courses-section class="layout-container sm:mt-[200px] mx-auto" />
    <advice-section class="layout-container lg:px-[320px]" />
    <onboard-section class="layout-container lg:px-[320px]" />
    <schools-section class="layout-container mx-auto" />
    <cta-aside class="layout-container md:px-[150px] lg:px-[320px]" />
    <success-section class="layout-container lg:px-[320px]" />
    <partner-section class="layout-container mx-auto" />
    <site-footer class="layout-container sm:mt-[200px] lg:px-[320px]" />
  </main>
</template>

<script>
// Component Imports
import SiteHeader from "./components/SiteHeader/SiteHeader.vue";
import SiteHero from "./components/SiteHero.vue";
import CoursesSection from "./components/Courses/CoursesSection.vue";
import AdviceSection from "./components/AdviceSection.vue";
import OnboardSection from "./components/OnboardSection.vue";
import SchoolsSection from "./components/Schools/SchoolsSection.vue";
import CtaAside from "./components/CtaAside.vue";
import SuccessSection from "./components/Success/SuccessSection.vue";
import PartnerSection from "./components/PartnerSection.vue";
import SiteFooter from "./components/SiteFooter.vue";

export default {
  name: "App",
  components: {
    SiteHeader,
    SiteHero,
    CoursesSection,
    AdviceSection,
    OnboardSection,
    SchoolsSection,
    CtaAside,
    SuccessSection,
    PartnerSection,
    SiteFooter,
  },
};
</script>

<style>
body {
  overflow-x: hidden;
}

#app {
  /* @apply container mx-auto; */
}
.layout-container {
  @apply px-[20px] sm:px-[58px] lg:px-[150px];
}

.layout-container:not(.cta, .partner, .advice, .onboard, header, footer) {
  @apply xl:container xl:mx-auto xl:px-[250px];
}
</style>
