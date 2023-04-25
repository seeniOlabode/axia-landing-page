<template>
  <section class="courses">
    <h2 class="heading-2-headline">Courses for you</h2>
    <p class="body mt-[20px]">
      Here are some courses from our schools that we offer. Enroll and kickstart
      your tech career.
    </p>
    <section
      class="courses-list grid grid-cols-1 gap-10 mt-[48px] sm:grid-cols-2"
    >
      <single-course
        v-for="(course, i) in courses"
        :key="course.name + i + 'courses'"
        :courseData="course"
        class="course-card"
      />
    </section>
  </section>
</template>

<script>
import SingleCourse from "./SingleCourse.vue";

import Data from "@/data/data.json";

export default {
  name: "CoursesSection",
  components: {
    SingleCourse,
  },
  data() {
    return {
      courses: Data.courses,
    };
  },
};
</script>

<style scoped>
.course-card:not(:last-child) {
  @apply sm:basis-1/3 grow;
}

.course-card:last-child {
  @apply sm:basis-1/2;
}
</style>
