<template>
  <header
    class="site-header shadow-md md:shadow-none bg-white z-50 sm:h-[101px]"
  >
    <div class="container w-full flex justify-between items-center">
      <a href="."
        ><img src="@/assets/logo.a67befb6.svg" alt="" class="logo"
      /></a>
      <site-menu />
    </div>
  </header>
</template>

<script>
// Component Imports
import SiteMenu from "./SiteMenu.vue";

export default {
  name: "SideHeader",
  components: {
    SiteMenu,
  },
};
</script>

<style>
.site-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 53px;
}

.site-header img.logo {
  width: 78px;
  @apply sm:w-[115px];
}
</style>
