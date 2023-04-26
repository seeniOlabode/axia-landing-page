<template>
  <ul class="md:flex gap-[20px] hidden">
    <drop-down-link
      v-for="link in links"
      :key="link.name + 'links'"
      :linkData="link"
    />
  </ul>
  <nav :class="{ mobile: navIsOpen }">
    <menu-button
      @click="navIsOpen = !navIsOpen"
      class="toggle-button sm:hidden"
    />
    <div class="tablet-menu hidden sm:flex sm:items-center">
      <action-button>Apply Now</action-button>
    </div>
    <div class="mobile-menu-list" v-if="navIsOpen">
      <nav class="mt-[100px] flex flex-wrap gap-y-[70px]">
        <ul class="nav-column basis-1/2 md:order-2 lg:basis-[50%]">
          <h2 class="heading-2" style="font-size: 16px">SCHOOLS</h2>

          <li
            v-for="link in schoolLinks"
            :key="link + 'linkk'"
            class="mt-[25px] md:mt-[45px] footer-link"
          >
            {{ link }}
          </li>
        </ul>
        <ul class="nav-column basis-1/2 lg:basis-[50%]">
          <h2 class="heading-2" style="font-size: 16px">COMPANY</h2>
          <li
            v-for="link in companyLinks"
            :key="link + 'linkk'"
            class="mt-[25px] md:mt-[45px] footer-link"
          >
            {{ link }}
          </li>
        </ul>
      </nav>
      <ul class="nav-column mt-[40px]">
        <h2 class="heading-2" style="font-size: 16px">HELP</h2>
        <li
          v-for="link in contactLinks"
          :key="link + 'linkk'"
          class="mt-[25px] md:mt-[45px] footer-link"
        >
          {{ link }}
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
// Component Imports
import MenuButton from "../shared/MenuButton.vue";
import ActionButton from "../shared/ActionButton.vue";
import DropDownLink from "./DropDownLink.vue";

export default {
  name: "SiteMenu",
  components: {
    MenuButton,
    ActionButton,
    DropDownLink,
  },
  data() {
    return {
      navIsOpen: false,
      links: [
        {
          name: "About",
          sub: [],
        },
        {
          name: "Schools",
          sub: ["School of Product", "School of Engineering", "School of Data"],
        },
        { name: "Join Our Community", sub: [] },
        { name: "Help", sub: ["FAQs", "Contact Us"] },
      ],
      schoolLinks: [
        "School of Product",
        "School of Data",
        "School of Engineering",
      ],
      companyLinks: [
        "About",
        "Blog",
        "FAQs",
        "Join Our Community",
        "Partnership",
      ],
      contactLinks: ["axiaafrica@gmail.com", "09015558035"],
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
}

.mobile .toggle-button {
  @apply ml-auto;
}

.mobile-menu-list {
  @apply text-black;
}

.footer-link {
  @apply text-sm font-bold;
}
</style>
