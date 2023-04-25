<template>
  <site-header class="fixed left-0 right-0 top-0 layout-container" />
  <main class="mt-[56px]">
    <site-hero class="layout-container" />
    <courses-section class="layout-container" />
    <advice-section class="layout-container" />
    <onboard-section class="layout-container" />
    <schools-section class="layout-container" />
    <cta-aside class="layout-container" />
    <success-section class="layout-container" />
    <partner-section class="layout-container" />
    <site-footer class="layout-container" />
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
.layout-container {
  @apply px-[20px] sm:px-[58px];
}
</style>
