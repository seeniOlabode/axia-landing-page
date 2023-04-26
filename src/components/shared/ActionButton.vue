<template>
  <button class="" :class="buttonType">
    <slot></slot>
    <img v-if="icon" width="20" src="@/assets/img/right-arrow.svg" alt="" />
  </button>
</template>

<script>
export default {
  name: "ActionButton",
  props: {
    buttonType: {
      type: String,
      required: false,
      default: "primary",
    },
    icon: {
      type: String,
      required: false,
    },
  },
};
</script>

<style scoped>
button {
  padding: 12px 0;
  @apply font-semibold;
}
.primary {
  box-shadow: 6px 7px 0 0px rgb(34 34 84);
  transition: all 0.3s ease;
  @apply border-[3px] border-[rgb(0,0,0)] px-[24px];
}

.primary:hover {
  background: rgb(34 34 84);
  color: white;
  box-shadow: 6px 7px 0 0px rgb(240 183 63);
}

.secondary {
  text-decoration: underline;
  @apply text-axia-darkish flex items-center justify-center gap-[12px];
  transition: transform 0.3s ease;
}

.secondary img {
  transition: transform 0.3s ease;
}

.secondary:hover {
  transform: translateX(-4px);
}

.secondary:hover img {
  transform: translateX(8px);
}

.blue-parent .primary,
.black-parent .primary {
  border-color: white;
  box-shadow: 6px 7px 0 0px white;
}

.blue-parent .primary:hover,
.black-parent .primary:hover {
  background: white;
  @apply text-axia-blue;
  box-shadow: 6px 7px 0 0px rgb(240 183 63);
}
</style>
