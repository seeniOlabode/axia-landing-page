<template>
  <article class="relative">
    <div class="card-caption p-[20px] sm:p-[24px]">
      <h4 class="heading-2 font-bold">
        {{ schoolData.name }}
      </h4>
      <p class="text-sm leading-[20px] mt-[12px] mb-[16px]">
        {{ schoolData.description }}
      </p>
      <action-button buttonType="secondary" icon="arrow" class="sm:mt-[64px]">
        View Courses
      </action-button>
    </div>
  </article>
</template>

<script>
import ActionButton from "../shared/ActionButton.vue";

export default {
  name: "SingleCourse",
  props: {
    schoolData: {
      type: Object,
      required: true,
    },
  },
  components: {
    ActionButton,
  },
  computed: {
    courseImgPath() {
      return require("@/assets/" + "course-" + this.schoolData.img + ".png");
    },
  },
};
</script>

<style scoped>
article {
  @apply bg-[rgb(250,245,238)];
}

article::before {
  content: " ";
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  transform: translate(-12px, 40px);
  z-index: -1;
  height: 90%;
  @apply border-[3px] border-black border-r-0 border-t-0;
}
</style>
