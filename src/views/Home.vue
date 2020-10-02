<template>
  <v-layout column justify-center align-center class="mt-4 pt-2">
    <v-container>
      <v-row class="mt-5 p-5">
        <v-col xs='8' offset-xs='2' sm='8' offset-sm='2' md='6' offset-md='3' lg='4' offset-lg='4' class="align-center text-center p-5">
          <VueCompareImage
            class="hidden-md-and-down"
            hover
            :style="{ minWidth: '100%', minHeight: '200px' }"
            :sliderLineWidth="sliderLine"
            :handleSize="hSize"
            :leftImage="leftImage"
            :rightImage="rightImage"
            :sliderPositionPercentage="sliderPosition"
          />
          <VueCompareImage
            class="hidden-lg-and-up"
            hover
            :style="{ maxWidth: '800px' }"
            :sliderLineWidth="sliderLine"
            :handleSize="hSize"
            :leftImage="leftImage2"
            :rightImage="rightImage2"
            :sliderPositionPercentage="sliderPosition"
          />
          <br>
          <vue-typer class="headline" :style="{fontSize: '2.8rem!important'}" :repeat="0" text="Raihan Kabir" ></vue-typer>
          <br>
          <vue-typer
            :text="text1"
            :repeat="Infinity"
            :shuffle="false"
            initial-action="erasing"
            :pre-type-delay="70"
            :type-delay="70"
            :pre-erase-delay="1980"
            :erase-delay="150"
            erase-style="select-back"
            :erase-on-complete="false"
            caret-animation="smooth"
            :style="{fontSize: '1.3rem!important'}"
          ></vue-typer>
        </v-col>
      </v-row>

      <v-row class="mt-5"> 
        <v-col xs='12' sm='10' offset-sm='1' xl='12' md='8' offset-md='2'>
          <v-card flat color="transparent">
            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0">
                  <span>About</span>
                  <span class="green--text">Me</span>
                </h3>
                <div 
                  class="font-weight-light text-justify" style="font-size: 0.9rem; letter-spacing: 2px"
                >
                  <p>
                    Hie! I am Raihan Kabir. I am an enthusiastic self-taught programmer, working as a developer for more than 2 years now. During my journey, I was concentrated on several projects, mostly they were driven by <strong style="color: green">Python</strong> on the server and <strong style="color: green">JavaScript</strong> on the client. Over these years, I have learned not only these technologies, also different frameworks, which allow making development faster e.g. <strong style="color: green">Django</strong>, Flask, Django Rest Framework in Python stack; jQuery, <strong style="color: green">Vue.js</strong>, Nuxt.js in the JavaScript stack.
                    <br><br>
                    Apart from development I have a good understanding about version controlling system, CI/CD, <strong style="color: green">Linux</strong> system, API integration etc. I am a learner, real quick learner, problem solver and love to learn new cool technologies. I am looking for a challenging position that promotes both learning and growth. 
                  </p>
                </div>
              </div>
            </v-card-title>

            <v-card-actions class="hidden-sm-and-down">
              <v-btn
                v-for="icon in icons"
                :key="icon.icon"
                fab
                dark
                outlined
                color="green"
                :href="icon.href"
                target="_blank"
              >
                <v-icon dark>{{icon.icon}}</v-icon>
              </v-btn>
            </v-card-actions>

            <v-card-actions class="hidden-md-and-up justify-center">
              <v-btn
                v-for="icon in icons"
                :key="icon.icon"
                small
                fab
                dark
                outlined
                color="green"
                :href="icon.href"
                target="_blank"
              >
                <v-icon dark>{{icon.icon}}</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-layout>
</template>

<script>
import { VueTyper } from 'vue-typer'
import VueCompareImage from 'vue-compare-image'

export default {
  metaInfo: {
    title: 'Home',
    titleTemplate: "%s ← Raihan Kabir",
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'description', content: "Raihan Kabir's Portfolio" },
      { charset: 'utf-8' },
      { property: 'og:title', content: "Raihan Kabir" },
      { property: 'og:site_name', content: "Raihan Kabir" },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://rk4bir.github.io' },
      {
        property: 'og:image',
        content: 'https://i.imgur.com/a8TeA0D.png'
      },
      { property: 'og:description', content: "Raihan Kabir's Portfolio" }
    ]
  },
  components: {
    'vue-typer': VueTyper,
    VueCompareImage
  },
  data () {
    return {
      icons: [
        { href: 'https://github.com/rk4bir', icon: 'fa fa-github' },
        {
          href: 'https://stackoverflow.com/users/10371817/raihan-kabir',
          icon: 'fa fa-stack-overflow'
        },
        { href: 'https://twitter.com/rk4bir', icon: 'fa fa-twitter' },
        {
          href: 'https://www.linkedin.com/in/rk4bir',
          icon: 'fa fa-linkedin'
        },
        {
          href: 'https://www.facebook.com/rk4bir',
          icon: 'fa fa-facebook'
        },
      ],
      text1: ['Web Developer', 'Web Designer', 'Flutter Developer', 'Web Scraper'],
      leftImage: require('@/assets/rk4bir_green.svg'),
      rightImage: require('@/assets/rk4bir_black.svg'),
      leftImage2: require('@/assets/rk4bir_green.svg'),
      rightImage2: require('@/assets/rk4bir_black.svg'),
      sliderLine: 0,
      hSize: 0,
      sliderPosition: 0.5
    }
  }
}
</script>
<style>
@keyframes rocking {
  0%,
  100% {
    transform: rotateZ(-10deg);
  }

  50% {
    transform: rotateZ(10deg);
  }
}

.vue-typer {
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
}
.vue-typer .custom.char.typed {
  color: green;
}
.vue-typer .custom.char.selected {
  color: #e91e63;
}

.vue-typer .custom.caret {
  animation: rocking 1s ease-in-out 0s infinite;
}
.vue-typer .custom.caret.typing {
  background-color: green;
}
.vue-typer .custom.caret.selecting {
  display: inline-block;
  background-color: #e91e63;
}
</style>
