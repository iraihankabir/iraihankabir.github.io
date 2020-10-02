<template>
  <v-container grid-list-xl class='pt-5'>
    <v-layout row justify-center align-center wrap class="mt-5 pt-2">
      <v-flex xs12 sm12 md12 lg12 xl12>
        <h2 class="pl-4 mt-5 text-center">
          <span>My</span> <span class="green--text">Services</span>
        </h2>
      </v-flex>
      <v-flex class="mt-5" v-for="service in services" :key="service.src" xs6 sm3 md3 lg3 xl3>
        <v-card hover flat color="transparent" :style="{'cursor':'context-menu'}" class="text-center">
          <v-card-title></v-card-title>
          <v-img
            :src="service.src"
            height="100"
            aspect-ratio="2.75"
            :alt="'Kabir do '+service.title"
            lazy-src="https://cdn.dribbble.com/users/503653/screenshots/3143656/fluid-loader.gif"
            contain
          ></v-img>
          <v-card-title class="justify-center">
            <v-flex text-xs-center subheading font-weight-bold>{{service.title}}</v-flex>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  metaInfo: {
    title: 'Services',
    titleTemplate: "%s ← Raihan Kabir",
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        name: 'description',
        content:
          "Raihan Kabir's Services: Web Development, Flutter Development, Mobile Development, Android Development, Web Designing, Front-End Design, Back-End Development"
      },
      { charset: 'utf-8' },
      { property: 'og:title', content: "Raihan Kabir" },
      { property: 'og:site_name', content: "Raihan Kabir" },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://rk4bir.github.io/' },
      {
        property: 'og:image',
        content: 'https://i.imgur.com/a8TeA0D.png'
      },
      {
        property: 'og:description',
        content:
          "Raihan Kabir's Services Web Development Web Design Front-End Flutter Developer Mobile Application Developer"
      }
    ]
  },
  data () {
    return {
      services: [
        {
          src: require('@/assets/service/web.png'),
          title: 'Web Development'
        },
        {
          src: require('@/assets/service/design.png'),
          title: 'Web Design'
        },

        {
          src: require('@/assets/service/app.png'),
          title: 'App Development'
        },
        {
          src: require('@/assets/service/scraping.png'),
          title: 'Web Scraping'
        }
      ]
    }
  }
}
</script>
<style >
.v-img--reveal {
  opacity: 0.3;
}
</style>
