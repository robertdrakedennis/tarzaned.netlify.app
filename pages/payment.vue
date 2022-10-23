<template>

  <div class="parallax" data-parallax-disallow="both" data-parallax-deep="1000">
    <section class="hero-section">
      <div class="hero-section--background overflow-hidden">
        <img src="~/assets/backgrounds/bg_2.png" class="absolute inset-0 object-cover h-full w-full" alt="" style="filter: brightness(70%)"
             data-aos="fade-in"
             data-aos-offset="200"
             data-aos-delay="50"
             data-aos-duration="400"
             data-aos-easing="ease-in-out"
             data-aos-once="true">
      </div>

      <div class="relative flex flex-col md:flex-row items-center z-20 text-center h-screen w-full">

        <div class="flex flex-wrap items-center justify-center h-full w-full">

          <div class="flex flex-col items-center justify-center w-full h-full md:w-full">
            <div class="max-w-xl">

              <h1 class="text-hero text-2xl md:text-6xl tracking-wide text-white pb-4"
                  data-aos="fade-in"
                  data-aos-delay="300"
                  data-aos-duration="400"
                  data-aos-easing="ease-in-out"
                  data-aos-once="true">Thank you for your request!</h1>
              <p class="text-primary-100 tracking-normal">
                You can pay by clicking the button below.
              </p>

              <div class="mx-auto mt-6">
                <form id="paypal-form" action="https://www.paypal.com/cgi-bin/webscr" method="post" data-gateway-id="Paypal" target="_blank">
                  <input type="hidden" name="cmd" value="_xclick">
                  <input type="hidden" name="business" value="Taravat.farokhian@usherbrooke.ca">
                  <input type="hidden" name="amount" value="100">
                  <input type="hidden" name="currency_code" value="USD">
                  <input type="hidden" name="button_subtype" value="services">
                  <input type="hidden" name="no_note" value="0">
                  <input type="hidden" name="shipping" value="">
                  <input type="hidden" name="bn" value="JSCProfis_SP">
                  <input type="hidden" name="item_name" value="One Coaching Session">
                  <input type="hidden" name="lc" value="en_US">
                  <button type="submit" class="button bg-blue-600 text-white w-40">
                  <span>
                    Pay with Paypal
                  </span>
                  </button>
                </form>

                <p class="mt-6 mx-auto text-black p-2 rounded-full bg-white shadow w-full max-w-md">
                  Need to submit your request? <nuxt-link to="/coaching" class="text-red-600 font-bold">Click here</nuxt-link>
                </p>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <section class="section z-50 pb-40 bg-primary-800">

      <div class="hero-divider-container z-50">
        <div class="hero-divider">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" fill="#16181d">
            <path d="M936.87,32.21c-.48.21-4.19.37-4.16.59a54.32,54.32,0,0,0-5.79-.06l-126.38,7.9c-1.2.17-40.46,2.53-40.46,2.53-3.29.29-14.05,1-15.54,1l-11.92.75c-7,.66-20.5,1.29-20.49,1.28s-33.94,2.23-33.92,2.28c-1.05,0-33.88,2-33.92,2.09C642.37,50.68,523.37,58,523.37,58h-.17l-26.64,1.66,190.91-8.75c-1.1.21,252.92-16.09,243.81-15.21,5.92.56,20.47-.31,32.06-1-1.33.69-13.41,1.21-12.41,1.94C935.05,36.76,719,51,698.63,52.38c.15-.32,7-.55,6.23-.88-16.51,1.4-66.8,4.62-91.12,5.94-7.48.71-61.6,3.83-61.41,4.11-26.53,1.21-47.75,2.61-67.88,4l-1,.07c49.39-2.26,81-3.09,164.36-8.07-20.67,1.89-74.27,5.15-63.57,5.73-208,13.33-301.41,18.28-388.8,26.07C100.32,95.26,95.24,94.06,0,100H1000V28.18l-64.34,4Zm41.27,1.42a71.26,71.26,0,0,1-12.63,1.12C968.08,34.35,972.74,34,978.14,33.63Z"></path>
            <path d="M419.71,69.21C385.81,71.51,311,76.4,251.52,80.34c92.64-5.41,106.16-5.69,199.85-12.16-2.73,0-5.87.09-9.51.19l-8.29.48c.28-.08.65-.17,1-.25C430.26,68.75,425.32,69,419.71,69.21Z"></path>
            <path d="M222.56,82.27c-27.76,1.85-48.5,3.26-53.89,3.71-6.83.19,8.66-.6,6.23-.88-47.74,3.26-88.48,5.38-133.58,10.26,1.49.6-5.51.23-5.76.82C26.17,97,2.13,98.26,0,98.65V100c74-5.09,144.25-11.61,258-17.58C260.76,81.19,222.15,83.29,222.56,82.27Z"></path>
          </svg>
        </div>
      </div>

      <div class="text-center text-white text-xl">
        Designed and Made by <a class="text-blue-500 text-underline font-bold" href="https://robertdennis.netlify.app/" target="_blank">atlas</a>
      </div>
    </section>
  </div>
</template>

<script>
  import Form from 'vform'
  import axios from "axios";

  export default {
    components: {},
  }
</script>
