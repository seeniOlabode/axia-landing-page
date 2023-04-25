<template>
  <div class="menu-button-container">
    <button class="menu-button" ref="menuButton" @click="play = !play"></button>
  </div>
</template>

<script>
import Lottie from "lottie-web";

export default {
  name: "MenuButton",
  data() {
    return {
      animation: null,
      play: false,
    };
  },
  watch: {
    // Watch play value and play animation based on value
    play(value) {
      if (value) {
        this.animation.playSegments([0, 55], true);
      } else {
        this.animation.playSegments([55, 103]);
      }
    },
  },
  mounted() {
    // Set up Lottie Animation for Menu Button

    // Get a path to the Lottie.json
    const imagePath = new URL("../../assets/menu.json", import.meta.url).href;

    // Create Animation
    this.animation = Lottie.loadAnimation({
      container: this.$refs.menuButton,
      path: imagePath,
      renderer: "svg",
      loop: false,
      autoplay: false,
      name: "Menu Animation",
      width: 200,
      rendererSettings: {},
    });

    // Reset Animation and set it's speed
    this.animation.goToAndStop(0, true);
    this.animation.setSpeed(5);
    this.animation.resize(10, 100);
  },
};
</script>

<style>
.menu-button-container {
  position: relative;
  height: 20px;
  width: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.menu-button {
  border: none;
  outline: none;
  background: none;
  cursor: pointer;
  position: absolute;
  width: 500%;
}

.menu-button {
}
</style>
