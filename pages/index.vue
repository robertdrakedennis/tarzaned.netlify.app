<template>
  <div class="parallax" data-parallax-disallow="both" data-parallax-deep="1000">
    <section class="hero-section">
      <div class="hero-section--background overflow-hidden">
        <img
          src="~/assets/backgrounds/bg_3.jpg"
          class="absolute inset-0 object-cover h-full w-full"
          alt=""
          style="filter: brightness(70%)"
          data-aos="fade-in"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="400"
          data-aos-easing="ease-in-out"
          data-aos-once="true"
        />
      </div>

      <div class="relative m-auto z-20">
        <div
          data-aos="fade-up"
          data-aos-delay="400"
          data-aos-duration="400"
          data-aos-easing="ease-in-out"
          data-aos-once="true"
        >
          <img
            src="~/assets/logo.svg"
            class="logo parallax-layer"
            data-parallax-deep="1000"
            alt=""
          />
        </div>

        <div
          data-aos="fade-in"
          data-aos-delay="700"
          data-aos-duration="400"
          data-aos-easing="ease-in-out"
          data-aos-once="true"
        >
          <p
            class="text-3xl text-center text-white parallax-layer pb-12"
            data-parallax-deep="1200"
          >
            The Best Jungler in North America
          </p>
        </div>

        <div
          class="flex items-center justify-center"
          data-aos="fade-in"
          data-aos-delay="800"
          data-aos-duration="400"
          data-aos-easing="ease-in-out"
          data-aos-once="true"
        >
          <a
            href="https://www.twitch.tv/tarzaned"
            class="inline-flex items-center justify-center w-56 py-3 px-8 bg-white shadow text-black text-center text-lg border-2 border-white rounded-full parallax-layer"
            data-parallax-deep="2200"
          >
            <span>
              Watch on twitch
            </span>
          </a>
        </div>
      </div>
    </section>

    <section class="section pb-40 bg-yellow-050">
      <div class="hero-divider-container z-50">
        <div class="hero-divider">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1000 100"
            fill="#f6f6f2"
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

      <div
        class="container mx-auto flex md:justify-between items-center flex-wrap"
        id="test"
      >
        <div
          class="w-full flex items-center justify-center"
          data-aos="fade-in"
          data-aos-delay="300"
          data-aos-duration="400"
          data-aos-easing="ease-in-out"
          data-aos-once="true"
        >
          <img
            src="~/assets/challenger.png"
            class="parallax-layer"
            data-parallax-deep="200"
            alt=""
          />
        </div>

        <div class="w-full flex flex-col text-center">
          <h1
            class="text-hero text-4xl md:text-6xl tracking-wide text-primary-800 pb-12"
            data-aos="fade-in"
            data-aos-delay="300"
            data-aos-duration="400"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
          >
            Experienced Competitive Player
          </h1>

          <div class="flex items-stretch flex-wrap justify-between">
            <div
              class="flex flex-col items-center justify-center w-full md:w-1/3 pb-6"
              data-aos="fade-left"
              data-aos-delay="200"
              data-aos-duration="400"
              data-aos-easing="ease-in-out"
              data-aos-once="true"
            >
              <img
                src="~/assets/icons/trophy.png"
                class="h-auto w-40 pb-4 m-auto"
                alt=""
              />
              <p class="text-center text-xl mt-auto">
                4x Rank 1 (seasons: 6, 8, 9 ,10)
              </p>
            </div>

            <div
              class="flex flex-col items-center justify-center w-full md:w-1/3 pb-6"
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-duration="400"
              data-aos-easing="ease-in-out"
              data-aos-once="true"
            >
              <img
                src="~/assets/icons/gamepad.png"
                class="h-auto w-40 pb-4 m-auto"
                alt=""
              />
              <p class="text-center text-xl mt-auto">
                3x Twitch Rivals Winner
              </p>
            </div>

            <div
              class="flex flex-col items-center justify-center w-full md:w-1/3 pb-6"
              data-aos="fade-right"
              data-aos-delay="300"
              data-aos-duration="400"
              data-aos-easing="ease-in-out"
              data-aos-once="true"
            >
              <img
                src="~/assets/icons/swords.png"
                class="h-auto w-40 pb-4 m-auto"
                alt=""
              />
              <p class="text-center text-xl mt-auto">
                Most Successful Twitch Rivals Player
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section pb-40 bg-primary-800 text-center">
      <div class="hero-divider-container z-50">
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

      <h1
        class="text-hero text-4xl md:text-6xl tracking-wide text-white pb-12"
        data-aos="fade-in"
        data-aos-delay="300"
        data-aos-duration="400"
        data-aos-easing="ease-in-out"
        data-aos-once="true"
      >
        Competitive Experience
      </h1>

      <div
        class="container mx-auto flex md:justify-between items-center flex-wrap pb-40"
        data-aos="fade-in"
        data-aos-delay="300"
        data-aos-duration="400"
        data-aos-easing="ease-in-out"
        data-aos-once="true"
      >
        <div
          class="w-full md:w-1/2 flex items-center justify-center tiltable"
          v-tilt
        >
          <img
            src="~/assets/backgrounds/twitch_rivals_2020.png"
            class="rounded shadow-xl h-auto w-1/2 md:w-full md:max-w-full"
            alt=""
          />
        </div>

        <div class="w-full md:w-1/2 flex flex-col text-center items-center">
          <div class="flex items-center flex-wrap justify-between">
            <div class="flex flex-col items-center justify-center w-full pb-6">
              <p class="text-center text-xl text-primary-100 mt-auto">2020</p>
              <h1
                class="text-center text-hero tracking-wide text-4xl text-white mt-auto"
              >
                Twitch Rivals Champion
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div
        class="container mx-auto flex md:justify-between items-center flex-wrap pb-40"
        data-aos="fade-in"
        data-aos-delay="300"
        data-aos-duration="400"
        data-aos-easing="ease-in-out"
        data-aos-once="true"
      >
        <div class="w-full md:w-1/2 flex flex-col text-center items-center">
          <div class="flex items-center flex-wrap justify-between">
            <div class="flex flex-col items-center justify-center w-full pb-6">
              <p class="text-center text-xl text-primary-100 mt-auto">2019</p>
              <h1
                class="text-center text-hero tracking-wide text-4xl text-white mt-auto"
              >
                Twitch Rivals Champion
              </h1>
            </div>
          </div>
        </div>

        <div
          class="w-full md:w-1/2 flex items-center justify-center tiltable"
          v-tilt
        >
          <img
            src="~/assets/backgrounds/twitch_rivals.jpg"
            class="rounded shadow-xl h-auto w-1/2 md:w-full md:max-w-full"
            alt=""
          />
        </div>
      </div>

      <div
        class="container mx-auto flex md:justify-between items-center flex-wrap pb-40"
        data-aos="fade-in"
        data-aos-delay="300"
        data-aos-duration="400"
        data-aos-easing="ease-in-out"
        data-aos-once="true"
      >
        <div
          class="w-full md:w-1/2 flex items-center justify-center tiltable"
          v-tilt
        >
          <img
            src="~/assets/backgrounds/tcs_2018.jpg"
            class="rounded shadow-xl h-auto w-1/2 md:w-full md:max-w-full"
            alt=""
          />
        </div>

        <div class="w-full md:w-1/2 flex flex-col text-center items-center">
          <div class="flex items-center flex-wrap justify-between">
            <div class="flex flex-col items-center justify-center w-full pb-6">
              <p class="text-center text-xl text-primary-100 mt-auto">2018</p>
              <h1
                class="text-center text-hero tracking-wide text-4xl text-white mt-auto"
              >
                Tyler1 Championship Series
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div
        class="container mx-auto flex md:justify-between items-center flex-wrap pb-40"
        data-aos="fade-in"
        data-aos-delay="300"
        data-aos-duration="400"
        data-aos-easing="ease-in-out"
        data-aos-once="true"
      >
        <div class="w-full md:w-1/2 flex flex-col text-center items-center">
          <div class="flex items-center flex-wrap justify-between">
            <div class="flex flex-col items-center justify-center w-full pb-6">
              <p class="text-center text-xl text-primary-100 mt-auto">2017</p>
              <h1
                class="text-center text-hero tracking-wide text-4xl text-white mt-auto"
              >
                Tyler1 Championship Series
              </h1>
            </div>
          </div>
        </div>

        <div
          class="w-full md:w-1/2 flex items-center justify-center tiltable"
          v-tilt
        >
          <img
            src="~/assets/backgrounds/tcs_2017.jpg"
            class="rounded shadow-xl h-auto w-1/2 md:w-full md:max-w-full"
            alt=""
          />
        </div>
      </div>

      <div
        class="container mx-auto flex md:justify-between items-center flex-wrap pb-40"
        data-aos="fade-in"
        data-aos-delay="300"
        data-aos-duration="400"
        data-aos-easing="ease-in-out"
        data-aos-once="true"
      >
        <div
          class="w-full md:w-1/2 flex items-center justify-center tiltable"
          v-tilt
        >
          <img
            src="~/assets/backgrounds/nacs_2017.jpg"
            class="rounded shadow-xl h-auto w-1/2 md:w-full md:max-w-full"
            alt=""
          />
        </div>

        <div class="w-full md:w-1/2 flex flex-col text-center items-center">
          <div class="flex items-center flex-wrap justify-between">
            <div class="flex flex-col items-center justify-center w-full pb-6">
              <p class="text-center text-xl text-primary-100 mt-auto">2017</p>
              <h1
                class="text-center text-hero tracking-wide text-4xl text-white mt-auto"
              >
                NACS 2017 Summer Open Qualifiers
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section pb-40 bg-primary-800 text-center">
      <div class="hero-divider-container z-50">
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

      <h1
        class="text-hero text-4xl md:text-6xl tracking-wide text-white pb-12"
        data-aos="fade-in"
        data-aos-delay="300"
        data-aos-duration="400"
        data-aos-easing="ease-in-out"
        data-aos-once="true"
      >
        Educational Content
      </h1>

      <div
        class="container mx-auto flex md:justify-between items-center flex-wrap pb-40"
        data-aos="fade-in"
        data-aos-delay="300"
        data-aos-duration="400"
        data-aos-easing="ease-in-out"
        data-aos-once="true"
      >
        <div class="w-full md:w-1/3 p-4">
          <div class="w-full h-full">
            <iframe
              title="YouTube video player"
              class="rounded shadow h-auto w-full"
              allowfullscreen="true"
              type="text/html"
              src="//www.youtube.com/embed/5KaCgmZ78D0?controls=1"
              frameborder="0"
            ></iframe>
          </div>
        </div>

        <div class="w-full md:w-1/3 p-4">
          <div class="w-full h-full">
            <iframe
              title="YouTube video player"
              class="rounded shadow h-auto w-full"
              allowfullscreen="true"
              type="text/html"
              src="//www.youtube.com/embed/08kwTM0bQhI?controls=1"
              frameborder="0"
            ></iframe>
          </div>
        </div>

        <div class="w-full md:w-1/3 p-4">
          <div class="w-full h-full">
            <iframe
              title="YouTube video player"
              class="rounded shadow h-auto w-full"
              allowfullscreen="true"
              type="text/html"
              src="//www.youtube.com/embed/6tQMs_8hOMc?controls=1"
              frameborder="0"
            ></iframe>
          </div>
        </div>

        <div class="w-full md:w-1/3 p-4">
          <div class="w-full h-full">
            <iframe
              title="YouTube video player"
              class="rounded shadow h-auto w-full"
              allowfullscreen="true"
              type="text/html"
              src="//www.youtube.com/embed/vF9WWLtMsvY?controls=1"
              frameborder="0"
            ></iframe>
          </div>
        </div>

        <div class="w-full md:w-1/3 p-4">
          <div class="w-full h-full">
            <iframe
              title="YouTube video player"
              class="rounded shadow h-auto w-full"
              allowfullscreen="true"
              type="text/html"
              src="//www.youtube.com/embed/TORYiqE-CiM?controls=1"
              frameborder="0"
            ></iframe>
          </div>
        </div>

        <div class="w-full md:w-1/3 p-4">
          <div class="w-full h-full">
            <iframe
              title="YouTube video player"
              class="rounded shadow h-auto w-full"
              allowfullscreen="true"
              type="text/html"
              src="https://www.youtube.com/embed/Ycekz5-nHHY?controls=1"
              frameborder="0"
            ></iframe>
          </div>
        </div>
      </div>

      <div class="text-center text-white text-xl">
        Designed and Made by
        <a
          class="text-blue-500 text-underline font-bold"
          href="https://robertdennis.netlify.app/"
          target="_blank"
          >atlas</a
        >
      </div>
    </section>
  </div>
</template>

<script>
export default {
  components: {},
  mounted() {}
};
</script>

<style>
#particles-js {
  position: absolute;
  z-index: 1;

  @apply inset-0 w-full h-full;
}

html,
body {
  transition-duration: 200ms !important;
  transition-timing-function: ease-in-out !important;
}

.hero-section {
  max-height: 100vh;
  height: 100%;
  min-height: 100vh;

  @apply relative flex;
}

.section {
  z-index: 0;

  @apply relative pt-20;
}

.hero-section--background {
  @apply absolute top-0 right-0 w-full h-full;
}

.hero-divider-container {
  position: absolute;
  left: 0;
  bottom: 100%;
  width: 100%;
  overflow: hidden;
  height: 166px;
}

@screen md {
  .hero-divider-container {
    height: 192px;
  }
}

.hero-divider {
  position: absolute;
  left: 50%;
  bottom: 0;
  z-index: 4;
  width: 100%;
  min-width: 1920px;
  height: 100%;
  transform-origin: left top;
  transform: translate3d(-50%, 0px, 0px);
}

.text-hero {
  font-family: "Beaufort", sans-serif;
  font-size: 8rem;
}

.logo {
  min-width: 5rem;
  height: 100%;
}

@screen md {
  .logo {
    min-width: 50rem;
    height: 100%;
  }
}

.parallax-layer {
  @apply transition-all ease-in-out;
}
</style>
