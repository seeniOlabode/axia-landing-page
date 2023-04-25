<template>
  <nav :class="{ mobile: navIsOpen }">
    <menu-button @click="navIsOpen = !navIsOpen" class="toggle-button" />
    <ul class=""></ul>
  </nav>
</template>

<script>
// Component Imports
import MenuButton from "../shared/MenuButton.vue";

export default {
  name: "SiteMenu",
  components: {
    MenuButton,
  },
  data() {
    return {
      navIsOpen: false,
    };
  },
};
</script>

<style scoped>
.nav {
  display: flex;
  align-items: center;
  /* justify-content: center; */
}

.mobile {
  @apply fixed top-0 left-0 right-0 bottom-0 bg-white;
  padding: 20px;
  display: flex;
}

.mobile .toggle-button {
  @apply ml-auto;
}
</style>
