<template>
  <section
    class="onboard bg-[rgb(17,17,17)] text-white py-[48px] lg:py-[144px]"
  >
    <header>
      <h2 class="heading-2-headline">Get onboard with us</h2>
    </header>
    <div class="md:flex md:gap-[50px] md:mt-[50px]">
      <div class="md:basis-[100%]">
        <img
          src="@/assets/img/quotes.svg"
          alt=""
          width="35"
          class="mt-[30px]"
        />
        <p class="mt-[30px]">
          Axia Africa is an organization that is focused on equipping African
          youths with the knowledge and digital skills needed today Our aim is
          to make tech knowledge accessible to every individual irrespective of
          age, literacy, and location. We are looking forward to building a
          strong community of ready-to-work personnel and employable candidates
          around the world in the tech space.
        </p>
      </div>

      <div class="mt-[50px] md:basis-[100%] w-full grow md:-order-1">
        <img src="@/assets/img/onboard.svg" class="w-full" alt="" />
      </div>
    </div>

    <div class="mt-[50px] md:mt-[100px]">
      <header class="">
        <h2 class="heading-2-headline line-before flex items-center">
          Why choose us
        </h2>
      </header>
      <p class="mt-[20px]">
        We at Axia Africa are intentional about our students and focused about
        building a community. The tech space in Africa is fast growing and we
        have the necessary programmes to help launch you into that space. We
        sharpen your skills to give you leverage in your career while navigating
        the job market
      </p>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.line-before::before {
  content: " ";
  display: inline-block;
  height: 3px;
  width: 80px;
  background: white;
  @apply mr-[20px];
}
</style>
