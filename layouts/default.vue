<template>
  <div>

    <Navbar/>
    <nuxt />

  </div>
</template>


<style>
  [v-cloak] {
    display: none;
  }


  .page-enter-active,
  .page-leave-active {
    transition-property: opacity;
    transition-timing-function: ease-in-out;
    transition-duration: 200ms;
  }


  .page-enter,
  .page-leave-to {
    opacity: 0;
  }

  html,
  body {
    font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    position: relative;
  }

  #__nuxt::before {
    background-image: url('../assets/backgrounds/pattern.png');
    content: " ";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 500;
    pointer-events: none;
    opacity: 1;
    height: 100%;
  }

  .js-tilt-glare-inner {
    width: 2200px !important;
    height: 2200px !important;
  }

  /* purgecss start ignore */
  .tippy-tooltip.dark-theme {
    color: white;
    box-shadow: 0 0 20px 4px rgba(154, 161, 177, .15), 0 4px 80px -8px rgba(36, 40, 47, .25), 0 4px 4px -2px rgba(91, 94, 105, .15);
    background-color: #000
  }

  .tippy-tooltip.dark-theme[x-placement^=top] .tippy-arrow {
    border-top: 8px solid #000;
    border-right: 8px solid transparent;
    border-left: 8px solid transparent
  }

  .tippy-tooltip.dark-theme[x-placement^=bottom] .tippy-arrow {
    border-bottom: 8px solid #000;
    border-right: 8px solid transparent;
    border-left: 8px solid transparent
  }

  .tippy-tooltip.dark-theme[x-placement^=left] .tippy-arrow {
    border-left: 8px solid #000;
    border-top: 8px solid transparent;
    border-bottom: 8px solid transparent
  }

  .tippy-tooltip.dark-theme[x-placement^=right] .tippy-arrow {
    border-right: 8px solid #000;
    border-top: 8px solid transparent;
    border-bottom: 8px solid transparent
  }

  .tippy-tooltip.dark-theme .tippy-backdrop {
    background-color: #000
  }

  .tippy-tooltip.dark-theme .tippy-roundarrow {
    fill: #000
  }

  .tippy-tooltip.dark-theme[data-animatefill] {
    background-color: initial
  }
  /* purgecss end ignore */

  .button {
    @apply relative overflow-hidden inline-block align-middle text-center rounded-full px-6 py-2 text-sm;
  }
</style>

<script>
  import Navbar from "../components/Navbar";

  export default {
    components: { Navbar },
    mounted() {
      document.body.classList.add('scrollable')
    }
  }
</script>
