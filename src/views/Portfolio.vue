<template>
  <v-container grid-list-xl style="margin-top: 70px">
    <h2 class="pl-4 text-center pt-5">
      <span>Port</span>
      <span class="green--text">folio</span>
    </h2>
    <v-layout row justify-center align-center wrap class="mt-4">
      <v-dialog
        v-model="project.dialog"
        max-width="1000"
        v-for="project in projects"
        :key="project.title"
      >
        <template v-slot:activator="{ on }">
          <v-flex xs12 sm6 md4 lg4 xl4 v-on="on">
            <v-card hover flat color="transparent">
              <v-img
                :src="project.poster"
                :alt="project.title"
                height="230"
                lazy-src="https://cdn.dribbble.com/users/503653/screenshots/3143656/fluid-loader.gif"
              ></v-img>
              <v-card-title primary-title class="justify-center">{{project.title}}</v-card-title>
            </v-card>
          </v-flex>
        </template>
        <v-card v-if="project.dialog">
          <v-img :src="project.poster"></v-img>
          <v-card-text>
            <h3 class="headline mb-2 mt-3">
              <span>Technology</span>
            </h3>
            <v-chip class='mr-2' color="green" text-color="white">{{project.tech.tech1}}</v-chip>
            <v-chip class='mr-2' color="green" text-color="white">{{project.tech.tech2}}</v-chip>
            <v-chip class='mr-2' color="green" text-color="white">{{project.tech.tech3}}</v-chip>
            <v-chip class='mr-2' color="green" text-color="white">{{project.tech.tech4}}</v-chip>
          </v-card-text>
          <v-card-actions >
            <v-btn flat large dark color="green" :href="project.git" target="_blank">
              <v-icon left>fab fa-git</v-icon>Source
            </v-btn>
            <v-btn large flat dark color="green" :href="project.demo" target="_blank">
              <v-icon left>fas fa-desktop</v-icon>Demo
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  metaInfo: {
    title: 'Portfolio',
    titleTemplate: "%s ← Raihan Kabir",
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        name: 'description',
        content:
          "Raihan Kabir's Web Portfolio Vue Vue.js Nuxt Nuxt.js HTML CSS Vuetify Axios GraphQL JavaScript Web Developer Front-End Frontend Designer App Responsive"
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
          "Raihan Kabir's Web Portfolio Python Django Flask SQL Flutter Android iOS Vue Vue.js Nuxt Nuxt.js HTML CSS Vuetify Axios GraphQL JavaScript Web Developer Front-End Frontend Designer App Responsive"
      }
    ]
  },
  data () {
    return {
      dialog: false,
      projects: [
        {
          dialog: false,
          title: 'Tic Tac Toe | Project',
          git: 'https://github.com/rk4bir/tic-tac-toe',
          demo: 'https://rk4bir.github.io/tic-tac-toe/',
          tech: {
            tech1: 'JavaScript',
            tech2: 'Bootstrap',
            tech3: 'CSS',
            tech4: 'HTML'
          },
          poster: require('@/assets/portfolio/tic-tac-toe.jpg')
        },
        {
          dialog: false,
          title: 'Vueather | Project',
          git: 'https://github.com/rk4bir/vueather',
          demo: 'https://rk4bir.github.io/vueather/',
          tech: {
            tech1: 'JavaScript',
            tech2: 'Vue.JS',
            tech3: 'Vuetify',
            tech4: 'CSS'
          },
          poster: require('@/assets/portfolio/vueather.png')
        },
        {
          dialog: false,
          title: 'Arun-HPCC Portal | Web',
          git: 'https://github.com/rk4bir/',
          demo: 'https://arun-hpcc.ru.ac.bd/',
          tech: {
            tech1: 'Python',
            tech2: 'Django',
            tech3: 'JavaScript',
            tech4: 'MDBOOTSTRAP'
          },
          poster: require('@/assets/portfolio/arun-hpcc-portal.png')
        },
        {
          dialog: false,
          title: 'Arun-HPCC Docs | Web',
          git: 'https://gitlab.com/arun-hpcc/arun-hpcc.gitlab.io',
          demo: 'http://arun-hpcc.gitlab.io/',
          tech: {
            tech1: 'JavaScript',
            tech2: 'Vue.JS',
            tech3: 'VuePress',
            tech4: 'Markdown'
          },
          poster: require('@/assets/portfolio/arun-hpcc-docs.png')
        },
        {
          dialog: false,
          title: 'Wordbridge Ltd. | Web',
          git: 'https://github.com/rk4bir',
          demo: 'https://wordbridge.ltd/',
          tech: {
            tech1: 'Python',
            tech2: 'Django',
            tech3: 'jQuery',
            tech4: 'Bootstrap'
          },
          poster: require('@/assets/portfolio/wordbridge.jpg')
        },
        {
          dialog: false,
          title: 'Emedicoplus | Web',
          git: 'https://github.com/rk4bir',
          demo: 'https://emedicoplus.com/',
          tech: {
            tech1: 'Python',
            tech2: 'Django',
            tech3: 'jQuery',
            tech4: 'MDBootstrap'
          },
          poster: require('@/assets/portfolio/emedicoplus.png')
        },
        {
          dialog: false,
          title: 'Pandemic Live | App',
          git: 'https://github.com/rk4bir/pandemic-live',
          demo: 'https://youtu.be/jIMlt_Z3GgI',
          tech: {
            tech1: 'Flutter',
            tech2: 'Dart',
            tech3: 'charts_flutter',
            tech4: 'API'
          },
          poster: require('@/assets/portfolio/pandemic-live.png')
        },
      ]
    }
  }
}
</script>

<style  scoped>
</style>
