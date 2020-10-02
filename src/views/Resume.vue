<template>
  <v-layout row justify-center align-center wrap class="pt-2" style="margin-top: 60px">
    <v-flex xs12 sm12 md6 lg6 xl6 class="mt-4 pt-4">
      <h2 class="mb-4 pl-4 pt-2">Education</h2>
      <v-card-text class="py-0">
        <v-container fluid>
          <v-timeline align-top dense>
            <!-- educations -->
            <div v-for="education in educations" :key="education.gradYear">
              <v-timeline-item color="green" small>
                <v-layout pt-3>
                  <v-flex xs3>
                    <div class="caption font-weight-bold green--text">{{ education.gradYear }}</div>
                  </v-flex>
                  <v-flex class="pl-2">
                    <strong>{{ education.degree }}</strong>
                    <div class="caption mb-2">
                      {{ education.major }}, 
                      <span class="green--text font-weight-bold">{{ education.institute }}</span>
                    </div>
                  </v-flex>
                </v-layout>
              </v-timeline-item>
            </div>
          </v-timeline>
        </v-container>
      </v-card-text>
    </v-flex>

    <v-flex xs12 sm12 md6 lg6 xl6  class="mt-5 pt-4">
      <h2 class="mb-4 pl-4 pt-2">Achievements</h2>
      <v-card-text class="py-0">
        <v-container fluid>
          <v-timeline align-top dense>
            <!-- achievements -->
            <div v-for="achievement in achievements" :key="achievement.title">
              <v-timeline-item color="green" small>
                <v-layout pt-3>
                  <v-flex xs2>
                    <div class="caption font-weight-bold green--text">{{achievement.year}}</div>
                  </v-flex>
                  <v-flex class="pl-2">
                    <strong>{{achievement.title}}</strong>
                    <div class="caption mb-2">
                      {{achievement.result}} | <a class="font-weight-bold" target="_blank" :href="achievement.resultUrl">Result</a> | <a :href="achievement.hostUrl"><strong>{{achievement.host}}</strong></a>
                    </div>
                  </v-flex>
                </v-layout>
              </v-timeline-item>
            </div>
          </v-timeline>
        </v-container>
      </v-card-text>
    </v-flex>

    <v-flex xs12 sm12 md6 lg6 xl6 class="mt-4 pt-4">
      <h2 class="mb-4 pl-4 pt-2">Project & Publication</h2>
      <v-card-text class="py-0">
        <v-container fluid>
          <v-timeline align-top dense>
            <!-- academic project and publication -->
            <div v-for="academic in academics" :key="academic.title">
              <v-timeline-item color="green" small>
                <v-layout pt-3>
                  <v-flex xs2>
                    <div class="caption font-weight-bold green--text">{{ academic.year }}</div>
                  </v-flex>
                  <v-flex xs10 class="pl-2">
                    <strong>{{ academic.title }}</strong>
                    <div class="caption mb-2">
                      {{ academic.type }} | {{ academic.topic }} |
                      <a :href="academic.link" class="green--text font-weight-bold">
                        Source
                      </a>
                    </div>
                  </v-flex>
                </v-layout>
              </v-timeline-item>
            </div>
          </v-timeline>
        </v-container>
      </v-card-text>
    </v-flex>

    <v-flex xs12 sm12 md4 lg6 xl6 class="mt-4 pt-2">
      <h2 class="mb-4 pl-4">Experiences</h2>
      <v-card-text class="py-0">
        <v-container fluid>
          <v-timeline align-top dense>
            <!-- experiences -->
            <div v-for="experience in experiences" :key="experience.title">
              <v-timeline-item color="green" small>
                <v-layout pt-3>
                  <v-flex xs3>
                    <div class="caption font-weight-bold green--text">{{experience.start}} -</div>
                    <div class="caption font-weight-bold green--text">{{experience.end}}</div>
                  </v-flex>
                  <v-flex class="pl-2">
                    <strong>{{experience.title}}</strong>
                    <div class="caption mb-2">{{experience.type}}, <a class="font-weight-bold" :href="experience.instituteUrl">{{experience.institute}}</a></div>
                  </v-flex>
                </v-layout>
              </v-timeline-item>
            </div>
          </v-timeline>
        </v-container>
      </v-card-text>
    </v-flex>

    <v-flex xs12 sm12 md6 lg6 xl6  class="mt-5 pt-4">
      <h2 class="mb-4 pl-4 pt-2">Projects</h2>
      <v-card-text class="py-0">
        <v-container fluid>
          <v-timeline align-top dense>
            <!-- projects -->
            <div v-for="project in projects" :key="project.title">
              <v-timeline-item color="green" small>
                <v-layout pt-3>
                  <v-flex xs2>
                    <div class="caption font-weight-bold green--text">{{project.year}}</div>
                  </v-flex>
                  <v-flex class="pl-2">
                    <strong>{{project.title}}</strong>
                    <div class="caption mb-2">
                      {{project.type}} 
                      <span v-if="project.sourceCodesUrl">
                        | <a target="_blank" :href="project.sourceCodesUrl">Source codes</a>
                      </span>
                      <span v-if="project.projectUrl">
                        | <a target="_blank" :href="project.projectUrl">Demo</a>
                      </span>
                    </div>
                  </v-flex>
                </v-layout>
              </v-timeline-item>
            </div>
          </v-timeline>
        </v-container>
      </v-card-text>
    </v-flex>

    <v-layout row justify-center align-center wrap class="mt-5 pt-2">
      <v-flex xs12 class="mx-2 pt-4 text-center">
         <h2 class="mb-4 pl-4 pt-2">Skills</h2>
      </v-flex>
      <v-flex class="mx-5 pt-4">
        <!-- skills -->
        <div v-for="skill in skills" :key="skill.title">
          {{skill.title}}
          <v-progress-linear v-model="skill.val" :buffer-value="bufferValue" color="green" height="16"></v-progress-linear>
        </div>
      </v-flex>
    </v-layout>
  </v-layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Resume',
    titleTemplate: "%s ← Raihan Kabir",
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        name: 'description',
        content:
          'Vue NUXT HTML CSS JavaScript Design Adobe XD Photoshop Coding Skills Resume Work Web Developer Front-End'
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
          'Python Django Flask Web Scraping Vue NUXT HTML CSS JavaScript Design Coding Skills Resume Work Web Developer Front-End Flutter Mobile Developer'
      }
    ]
  },
  data () {
    return {
      educations: [
        { 
          gradYear: "Class of 2019", 
          degree: "Bachelor of Science", 
          institute: "University of Rajshahi",
          major: "Physics",
        },
      ],
      academics: [
        {
          year: "2020",
          title: "Angular distributions and critical minima in the elastic scattering of electrons by atomic Copper",
          type: "Publication",
          topic: "Atomic and Molecular Physics",
          link: "https://www.authorea.com/users/313439/articles/449948-angular-distributions-and-critical-minima-in-the-elastic-scattering-of-electrons-by-atomic-copper?commit=099d912a939add16c4b5d2d557e1cf732c6798a7"
        },
        {
          year: "2020",
          title: "Lepton scattering by atoms, molecules and ions",
          type: "Project",
          topic: "Atomic and Molecular Physics",
          link: "https://www.researchgate.net/project/Lepton-scattering-by-atoms-molecules-and-ions"
        },
        {
          year: "2019",
          title: "Porting Scientific Applications to the Arun HPC Cluster",
          type: "Project",
          topic: "High Performance Computing",
          link: "https://www.researchgate.net/project/Porting-Scientific-Applications-to-the-Arun-HPC-Cluster"
        }
      ],
      achievements: [
        {
          year: 2020,
          title: "Q1’2020 Hackathon, Feb 12-13, 2020",
          result: "Selected for second place",
          resultUrl: "https://gitlab.com/gitlab-com/marketing/community-relations/contributor-program/hackathon/issues/33",
          host: "GitLab Inc.",
          hostUrl: "https://gitlab.com/"
        }
      ],
      experiences: [
        {
          start: "JUNE 2020",
          end: "Present",
          title: "Software Engineer",
          type: "Freelance",
          institute: "Fiverr International Ltd.",
          instituteUrl: "https://www.fiverr.com/"
        },
        {
          start: "SEP 2019",
          end: "Present",
          title: "Assist. System Admin",
          type: "Volunteer",
          institute: "Arun-HPCC, University of Rajshahi",
          instituteUrl: "https://arun-hpcc.ru.ac.bd/"
        }
      ],
      projects: [
        {
          year: "2020",
          title: "Pandemic Live (COVID19)",
          type: "Mobile App.",
          sourceCodesUrl: "https://github.com/rk4bir/pandemic-live",
          projectUrl: false
        },
        {
          year: "2019",
          title: "Tic Tac Toe",
          type: "Game",
          sourceCodesUrl: "https://github.com/rk4bir/tic-tac-toe",
          projectUrl: "https://rk4bir.github.io/tic-tac-toe/"
        },
        {
          year: "2018",
          title: "Friends",
          type: "Web App.",
          sourceCodesUrl: "https://github.com/rk4bir/friends",
          projectUrl: false
        }
      ],
      skills: [
        { title: "Web Development", val: 0, staticVal: 90 },
        { title: "Web Design", val: 0, staticVal: 75 },
        { title: "Mobile Development", val: 0, staticVal: 55 },
        { title: "Web Scraping", val: 0, staticVal: 70 },
        { title: "Machine Learning", val: 0, staticVal: 30 },
      ],
      bufferValue: 100,
      interval: 0
    }
  },
  mounted () {
    this.startBuffer();
  },

  beforeDestroy () {
    clearInterval(this.interval)
  },

  methods: {
    startBuffer () {
      this.interval = setInterval(() => {
        for ( let i = 0; i < this.skills.length; i++ ) {
          this.skills[i].val = Number(this.skills[i].staticVal);
        }
      }, 1000)
    }
  }
}
</script>
<style scoped>
  a { text-decoration: none; color: green!important }
  a:hover { text-decoration: underline; }
</style>
