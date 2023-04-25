<template>
  <header class="site-header shadow-md md:shadow-none bg-white z-50">
    <a href="."><img src="@/assets/logo.a67befb6.svg" alt="" class="logo" /></a>
    <site-menu />
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
header.site-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 53px;
}

header.site-header img.logo {
  width: 78px;
}
</style>
