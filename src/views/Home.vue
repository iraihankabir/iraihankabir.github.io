<template>
  <v-layout class="mt-5 pt-2">
    <div class="container" style="margin-top: 30px">
      <div class="row">
        <div class="col-md-4 col-sm-12 col-lg-3">
          <VueCompareImage
            hover
            style="width: 240px"
            :sliderLineWidth="sliderLine"
            :handleSize="hSize"
            :leftImage="leftImage"
            :rightImage="rightImage"
            :sliderPositionPercentage="sliderPosition"
          />
          <br>
          <vue-typer class="headline" :style="{fontSize: '2.2rem!important'}" :repeat="0" text="Raihan Kabir" ></vue-typer>
          <br>
          <vue-typer
            :text="titles"
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
            :style="{fontSize: '1rem!important'}"
          ></vue-typer>
        </div>

        <div class="col-md-8 col-sm-12 col-lg-9 mt-5">
          <v-card flat color="transparent">
            <div class="mt-5">
              <div 
                class="font-weight-light text-justify" style="font-size: 0.9rem; letter-spacing: 2px"
              >
                <div>
                  <p>I am a software developer with extensive experience with linux system. I have played with a lot of tools and technologies. However, I like to call these tools and tech. as my primary skills for software development-</p>
                  <!-- skills -->
                  <p>
                    <strong style="color: green">Python</strong> ➞ Django, DRF, Flask, Celery, Redis, Channels, Selenium, BeautifulSoup<br>
                    <strong style="color: green">JavaScript</strong> ➞ jQuery, Vue, Nuxt, Node, Express<br>
                    <strong style="color: green">Database</strong> ➞ PostgreSQL, MySQL, Firestore, MongoDB, SQLite3<br>
                    <strong style="color: green">Others</strong> ➞ Linux, Docker, Virtual Environment, Git, CI-CD, Unit testing, Automation, Scripting
                  </p>
                  <p>Also, I am very comfortable with HTML5, CSS3 and some cutting edge front-end technologies. Apart from development I can deploy apps to cloud providers like Heroku, AWS, or any VPS or even on cPanel. Programming is my passion and I am always ready to take challenges for any kind of unique or challenging tasks. I am a quick learner and I enjoy being challenged and engaging with projects that require me to work outside my comfort zone and knowledge set, as continuing to learn new technologies and development techniques.</p>
                </div>

                <div class="mt-5">
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
                    class="mr-2"
                  >
                    <v-icon dark>{{icon.icon}}</v-icon>
                  </v-btn>
                </div>
              </div>
            </div>
          </v-card>
        </div>
      </div>
    </div>
  </v-layout>
</template>

<script>
import { VueTyper } from 'vue-typer'
import VueCompareImage from 'vue-compare-image'

export default {
  metaInfo: {
    title: 'Home',
    titleTemplate: "%s ← Raihan Kabir",
  },
  components: {
    'vue-typer': VueTyper,
    VueCompareImage
  },
  data () {
    return {
      icons: [
        { href: 'https://gitlab.com/rk4bir', icon: 'fab fa-gitlab' },
        { href: 'https://github.com/rk4bir', icon: 'fab fa-github' },
        {
          href: 'https://stackoverflow.com/users/10371817/raihan-kabir', 
          icon: 'fab fa-stack-overflow' 
        },
        { href: 'https://www.linkedin.com/in/rk4bir', icon: 'fab fa-linkedin' },
        { 
          href: "https://www.researchgate.net/profile/Raihan_Kabir3", 
          icon: 'fab fa-researchgate' 
        },
        {
          href: "https://www.hackerrank.com/rk4bir",
          icon: "fab fa-hackerrank"
        }
      ],
      titles: ['Software Developer', 'Web Scraper'],
      leftImage: require('@/assets/rk4bir_green.svg'),
      rightImage: require('@/assets/rk4bir_black.svg'),
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
  color: #ededed;
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
