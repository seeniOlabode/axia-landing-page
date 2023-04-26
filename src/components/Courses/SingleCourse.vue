<template>
  <article class="relative">
    <div
      class="course-image-container w-full h-[141px] md:h-[233px] overflow-hidden"
    >
      <img class="w-full" :src="courseImgPath" alt="" />
    </div>
    <div class="card-caption p-[20px] flex flex-col items-start">
      <h4 class="heading-2 font-bold">
        {{ courseData.name }}
      </h4>
      <p class="text-sm leading-[20px] mt-[12px] mb-[16px]">
        {{ courseData.description }}
      </p>
      <action-button
        buttonType="secondary"
        icon="arrow"
        style="justify-self: end"
      >
        Enroll Now
      </action-button>
    </div>
  </article>
</template>

<script>
import ActionButton from "../shared/ActionButton.vue";

export default {
  name: "SingleCourse",
  props: {
    courseData: {
      type: Object,
      required: true,
    },
  },
  components: {
    ActionButton,
  },
  computed: {
    courseImgPath() {
      return require("@/assets/img/" +
        "course-" +
        this.courseData.img +
        ".png");
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
  top: 0;
  right: 0;
  bottom: 0;
  transform: translate(-12px, 28px);
  z-index: -1;
  @apply border-[3px] border-black border-r-0;
}
</style>
