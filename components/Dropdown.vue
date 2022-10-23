<template>
  <div>
    <div class="dropdown-trigger"
         @click.prevent="open"
         aria-haspopup="true"
         :aria-expanded="isOpen"
    >
      <slot name="trigger"></slot>
    </div>

    <transition name="pop-out-quick">
      <div class="fixed opacity-0 top-0 left-0 w-full h-full transition-all overflow-y-auto" :class="[isOpen ? 'opacity-100' : 'hidden']" style="background-color: rgba(0,0,0,0.3); z-index: 9999">
        <div class="mobile-nav relative m-4 bg-white shadow-lg overflow-hidden flex flex-col z-50">
          <div class="flex items-center justify-between">
            <button @click="closeButton" class="p-4 text-black text-right ml-auto">
              X
            </button>
          </div>
          <hr class="mx-4">
          <div class="overflow-hidden flex flex-col text-left text-xl font-medium leading-loose">
            <slot></slot>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    name: "Dropdown",
    data() {
      return {
        isOpen: false
      };
    },
    methods: {
      closeButton() {
        this.isOpen = false;

        document.body.classList.add('scrollable');
      },

      open() {
        document.body.classList.remove('scrollable');

        this.isOpen = true;
      },

      closeIfClickedOutside(event) {
        if (! event.target.closest('.mobile-nav')) {
          this.isOpen = false;
          document.removeEventListener('click', this.closeIfClickedOutside);
        }
      },
    },
  }
</script>

<style scoped>
  .pop-out-quick-enter-active,
  .pop-out-quick-leave-active {
    transition: all 0.4s;
  }
  .pop-out-quick-enter,
  .pop-out-quick-leave-active {
    opacity: 0;
  }
  .nav-close{
    height: auto !important;
    width: 1.25rem;
  }


</style>
