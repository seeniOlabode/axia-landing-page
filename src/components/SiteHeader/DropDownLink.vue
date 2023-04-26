<template>
  <li
    @mouseenter="openSub = true"
    @mouseleave="openSub = false"
    class="relative"
  >
    <p class="flex link items-center gap-[5px]">
      {{ linkData.name }}
      <svg
        v-if="linkData.sub.length"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        style="fill: rgba(0, 0, 0, 1); transform: ; msfilter: "
      >
        <path
          d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"
        ></path>
      </svg>
    </p>
    <ul
      v-if="linkData.sub.length"
      class="absolute flex flex-col gap-[1.2rem] left-0 shadow-lg py-[12px] px-[16px] bg-white"
      v-show="openSub"
    >
      <li v-for="sub in linkData.sub" :key="linkData.name + sub">
        <p class="whitespace-nowrap link">
          {{ sub }}
        </p>
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  name: "DropDownLink",
  props: ["linkData"],
  data() {
    return {
      openSub: false,
    };
  },
};
</script>

<style scoped>
p {
  @apply cursor-pointer;
}
</style>
