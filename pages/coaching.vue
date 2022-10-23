<template>
  <div class="parallax" data-parallax-disallow="both" data-parallax-deep="1000">
    <section class="hero-section">
      <div class="overflow-hidden hero-section--background">
        <video
          preload="auto"
          autoplay="autoplay"
          muted="muted"
          loop="loop"
          playsinline=""
          style="filter: brightness(50%)"
          class="absolute inset-0 object-cover w-full h-full"
        >
          <source type="video/webm" src="~/assets/videos/graves.webm" />
        </video>
      </div>

      <div
        class="relative z-20 flex flex-col items-center w-full h-screen mb-20 text-center md:flex-row"
      >
        <div class="flex flex-wrap items-center justify-center w-full h-full">
          <div
            class="flex flex-col items-center justify-center w-full h-full ml-auto text-left md:w-1/3 form-bg"
          >
            <h1
              class="pb-4 text-xl tracking-wide text-hero md:text-5xl text-primary-800"
              data-aos="fade-in"
              data-aos-delay="300"
              data-aos-duration="400"
              data-aos-easing="ease-in-out"
              data-aos-once="true"
            >
              Level up your game
            </h1>

            <form
              @submit.prevent="handleSubmit"
              @keydown="form.onKeydown($event)"
              method="post"
              class="container flex flex-wrap px-20"
            >
              <input type="hidden" name="form-name" value="coaching-form" />

              <div class="w-full px-2 mb-4 md:w-1/2">
                <label
                  class="block mb-2 text-sm font-bold text-primary-900"
                  for="name"
                >
                  <input
                    v-model="form.name"
                    class="form-input"
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Name"
                    required
                    maxlength="48"
                  />
                </label>
              </div>

              <div class="w-full px-2 mb-4 md:w-1/2">
                <label
                  class="block mb-2 text-sm font-bold text-primary-8 00"
                  for="email"
                >
                  <input
                    v-tippy
                    content="Your email and paypal email should be the same, if not, you may be asked to submit verification."
                    v-model="form.email"
                    class="form-input"
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Email"
                    required
                    maxlength="80"
                  />
                </label>
              </div>

              <div class="w-full px-2 mb-4 md:w-1/2">
                <label
                  class="block mb-2 text-sm font-bold text-primary-100"
                  for="discord"
                >
                  <input
                    v-tippy
                    content="Your Discord discriminator. E.g name#1234"
                    v-model="form.discord"
                    class="form-input"
                    id="discord"
                    name="discord"
                    type="text"
                    placeholder="Discord"
                    required
                    maxlength="48"
                  />
                </label>
              </div>

              <div class="w-full px-2 mb-4 md:w-1/2">
                <label
                  class="block mb-2 text-sm font-bold text-primary-100"
                  for="time"
                >
                  <input
                    v-tippy
                    content="This can be a maximum of 1 hour and 15 minutes PER session."
                    v-model="form.time"
                    class="form-input"
                    id="time"
                    name="time"
                    type="text"
                    placeholder="Time Requested"
                    required
                    maxlength="48"
                  />
                </label>
              </div>

              <div class="w-full px-2 mb-4 md:w-1/2">
                <label
                  class="block mb-2 text-sm font-bold text-primary-100"
                  for="rank"
                >
                  <select
                    v-tippy
                    content="Your current solo/duo (not flex) rank in League of Legends."
                    v-model="form.rank"
                    class="form-input"
                    id="rank"
                    name="rank"
                    placeholder="Rank"
                    required
                  >
                    <option value="Iron" selected>Iron</option>
                    <option value="Bronze">Bronze</option>
                    <option value="Silver">Silver</option>
                    <option value="Gold">Gold</option>
                    <option value="Platinum">Platinum</option>
                    <option value="Diamond">Diamond</option>
                    <option value="Master">Master</option>
                    <option value="Grandmaster">Grandmaster</option>
                    <option value="Challenger">Challenger</option>
                  </select>
                </label>
              </div>

              <div class="w-full px-2 mb-4 md:w-1/2">
                <label
                  class="block mb-2 text-sm font-bold text-primary-100"
                  for="rank"
                >
                  <select
                    v-tippy
                    content="Your current divison in League of Legends"
                    v-model="form.division"
                    class="form-input"
                    id="division"
                    name="division"
                    placeholder="Division"
                    required
                  >
                    <option value="4" selected>4</option>
                    <option value="3">3</option>
                    <option value="2">2</option>
                    <option value="1">1</option>
                  </select>
                </label>
              </div>

              <div class="flex items-center justify-center w-full">
                <button class="w-40 text-white bg-red-600 button">
                  <span>
                    Submit
                  </span>
                </button>
              </div>
            </form>
          </div>

          <div
            class="flex-col items-center justify-center hidden w-full h-full md:flex md:w-2/3"
          >
            <div class="max-w-xl">
              <h1
                class="pb-4 text-2xl tracking-wide text-white text-hero md:text-6xl"
                data-aos="fade-in"
                data-aos-delay="300"
                data-aos-duration="400"
                data-aos-easing="ease-in-out"
                data-aos-once="true"
              >
                Information
              </h1>
              <p class="tracking-normal text-primary-100">
                Included is a period of up to 1 hour 15 minutes scheduled with
                Tarzaned. Sessions will consist of either live or VOD review.
                Only coaching for Jungle currently. Current Price: $100 per
                session
              </p>

              <p
                class="w-full max-w-md p-2 mx-auto mt-6 text-black bg-white rounded-full shadow"
              >
                Already submitted a request?
                <nuxt-link to="/payment" class="font-bold text-red-600"
                  >Pay here</nuxt-link
                >
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="z-50 pb-40 section bg-primary-800">
      <div class="z-50 mt-48 hero-divider-container">
        <div class="hero-divider">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1000 100"
            fill="#16181d"
          >
            <path
              d="M936.87,32.21c-.48.21-4.19.37-4.16.59a54.32,54.32,0,0,0-5.79-.06l-126.38,7.9c-1.2.17-40.46,2.53-40.46,2.53-3.29.29-14.05,1-15.54,1l-11.92.75c-7,.66-20.5,1.29-20.49,1.28s-33.94,2.23-33.92,2.28c-1.05,0-33.88,2-33.92,2.09C642.37,50.68,523.37,58,523.37,58h-.17l-26.64,1.66,190.91-8.75c-1.1.21,252.92-16.09,243.81-15.21,5.92.56,20.47-.31,32.06-1-1.33.69-13.41,1.21-12.41,1.94C935.05,36.76,719,51,698.63,52.38c.15-.32,7-.55,6.23-.88-16.51,1.4-66.8,4.62-91.12,5.94-7.48.71-61.6,3.83-61.41,4.11-26.53,1.21-47.75,2.61-67.88,4l-1,.07c49.39-2.26,81-3.09,164.36-8.07-20.67,1.89-74.27,5.15-63.57,5.73-208,13.33-301.41,18.28-388.8,26.07C100.32,95.26,95.24,94.06,0,100H1000V28.18l-64.34,4Zm41.27,1.42a71.26,71.26,0,0,1-12.63,1.12C968.08,34.35,972.74,34,978.14,33.63Z"
            ></path>
            <path
              d="M419.71,69.21C385.81,71.51,311,76.4,251.52,80.34c92.64-5.41,106.16-5.69,199.85-12.16-2.73,0-5.87.09-9.51.19l-8.29.48c.28-.08.65-.17,1-.25C430.26,68.75,425.32,69,419.71,69.21Z"
            ></path>
            <path
              d="M222.56,82.27c-27.76,1.85-48.5,3.26-53.89,3.71-6.83.19,8.66-.6,6.23-.88-47.74,3.26-88.48,5.38-133.58,10.26,1.49.6-5.51.23-5.76.82C26.17,97,2.13,98.26,0,98.65V100c74-5.09,144.25-11.61,258-17.58C260.76,81.19,222.15,83.29,222.56,82.27Z"
            ></path>
          </svg>
        </div>
      </div>

      <div class="text-xl text-center text-white">
        Designed and Made by
        <a
          class="font-bold text-blue-500 text-underline"
          href="https://robertdennis.netlify.app/"
          target="_blank"
          >atlas</a
        >
      </div>
    </section>
  </div>
</template>

<script>
import Form from "vform";
import axios from "axios";

export default {
  components: {},
  data: () => ({
    form: new Form({
      name: "",
      email: "",
      discord: "",
      time: "",
      rank: "Iron",
      division: 4
    })
  }),

  methods: {
    async handleSubmit() {
      let data;

      // Submit the form.
      try {
        this.form.post("https://tarzaned.vercel.app/webhook/discord");

        this.$router.push({ name: "payment" });
      } catch (e) {
        return;
      }
    }
  },

  mounted() {}
};
</script>

<style>
.form-bg {
  @apply bg-primary-050;
}

.form-input {
  @apply appearance-none w-full py-2 px-3 text-black leading-tight border-2 border-primary-200 rounded bg-primary-200 h-12 transition-all duration-200 ease-in-out;
}

.form-input:focus {
  @apply outline-none shadow-none border-primary-300 bg-transparent;
}

.form-input::placeholder {
  @apply text-primary-800 font-bold;
}
</style>
