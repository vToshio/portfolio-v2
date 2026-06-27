<script setup>
import ProjectCard from '@/components/projects/ProjectCard.vue';
import AllProjectCard from '@/components/projects/AllProjectCard.vue';
import ExperienceCard from '@/components/experiences/ExperienceCard.vue';

import photo from '@/assets/images/foto-apresentacao.jpg';

import python from '@/assets/svg/languages/python.svg';
import javascript from '@/assets/svg/languages/javascript.svg';
import ruby from '@/assets/svg/languages/ruby.svg';

import rails from '@/assets/svg/languages/rails.svg';
import vuejs from '@/assets/svg/languages/vuejs.svg';
import fastapi from '@/assets/svg/languages/fastapi.svg';
import flask from '@/assets/svg/languages/flask.svg';
import tailwind from '@/assets/svg/languages/tailwindcss.svg';

import vscode from '@/assets/svg/languages/vscode.svg';
import postman from '@/assets/svg/languages/postman.svg';
import git from '@/assets/svg/languages/git.svg';
import docker from '@/assets/svg/languages/docker.svg';
import fedora from '@/assets/svg/languages/fedora.svg';
import github from '@/assets/svg/gh-icon.svg';
import ai from '@/assets/svg/languages/ai-icon.svg';

import resumeImg from '@/assets/svg/storyset/resume.svg';

import esl_logo from '@/assets/images/esl-color.png'
import pref_an_logo from '@/assets/images/pref-artur-nogueira.png'

import { useIsMobile } from '@/lib/useIsMobile';
import { downloadResume } from '@/services/exportResume';

const { isMobile } = useIsMobile(714);
</script>

<template>
  <section id="hero" class="relative z-10 min-h-screen flex items-center text-neutral-100 bg-neutral-800 overflow-hidden">
    <div class="absolute z-30 mask-radial-at-top mask-radial-from-5% mask-radial-to-60% bg-teal-500/30 w-full h-full backdrop-blur-2xl"></div>
    <div class="absolute z-30 mask-radial-at-left mask-radial-from-5% mask-radial-to-60% bg-teal-500/30 w-full h-full backdrop-blur-2xl"></div>
    <div class="absolute z-20 mask-radial-from-5% mask-radial-to-90% bg-neutral-500/20 w-full h-full backdrop-blur-2xl"></div>
    <div class="absolute z-30 mask-radial-at-bottom mask-radial-from-5% mask-radial-to-60% bg-indigo-500/30 w-full h-full backdrop-blur-2xl"></div>
    <div class="absolute z-30 mask-radial-at-right mask-radial-from-5% mask-radial-to-60% bg-indigo-500/30 w-full h-full backdrop-blur-2xl"></div>
    <div class="z-50 text-center mx-auto xl:max-w-1/2">
      <div class="flex flex-col">
        <span class="font-light text-base md:text-2xl text-nowrap text-shadow-2xs text-shadow-neutral-500">{{ $t('home.hero.presentation') }}</span>
        <h1 class="text-5xl md:text-6xl font-bold my-3 italic tracking-tight text-shadow-2xs text-shadow-neutral-500">
          Vinícius Toshio
        </h1>
      </div>
      <div class="flex items-center justify-center my-3 py-1.5 rounded-full bg-sky-500 shadow-md shadow-neutral-700">
        <span class="text-sm md:text-base font-medium tracking-tight">{{ $t('home.hero.job-title') }}</span>
      </div>
    </div>
  </section>

  <section id="about" class="max-w-6xl mx-auto mt-15 mb-20">
    <h1 class="text-center text-4xl capitalize font-bold tracking-tight text-neutral-900">
      <span class="text-indigo-500">1.</span> 
      {{ $t('home.about.title') }}
    </h1>
    <hr class="mt-3 mb-8 mx-auto w-20 border-t-4 border-indigo-500 rounded-full">

    <div class="flex flex-col-reverse lg:flex-row justify-center w-full mt-10 gap-5 h-fit">
      <div class="flex flex-col gap-3 text-justify px-5 mx-8 md:mx-auto md:max-w-3/4 lg:mx-0 lg:max-w-1/2">
        <p class="text-base font-light" v-html="$t('home.about.paragraphs.first')"></p>
        <p class="text-base font-light" v-html="$t('home.about.paragraphs.second')"></p>
        <p class="text-base font-light" v-html="$t('home.about.paragraphs.third')"></p>
      </div>
      <div class="group/photo mx-auto w-[min(80vw,20rem)] aspect-3/4 shrink-0 overflow-hidden rounded-xl shadow-xl shadow-neutral-500/30 md:w-88 lg:mx-0 lg:w-96">
        <img
          class="size-full object-cover object-center transition-transform duration-500 ease-out group-hover/photo:scale-110"
          :src="photo"
          alt="Foto de apresentação de Vinícius Toshio"
        >
      </div>
    </div>
    
    <div class="mx-auto max-w-6xl px-6 pt-12">
      <h2 class="text-center text-3xl font-bold tracking-tight text-neutral-900 mb-10">{{ $t('home.about.skills.title') }}</h2>
      
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div class="card">
          <h3 class="text-sm uppercase tracking-widest text-gray-500 font-bold mb-6">{{ $t('home.about.skills.languages') }}</h3>
          <div class="flex flex-wrap justify-center gap-6">
            <img class="skill-icon" :src="ruby" alt="Ruby">
            <span class="sr-only">Ruby</span>

            <img class="skill-icon" :src="python" alt="Python">
            <span class="sr-only">Python</span>

            <img class="skill-icon" :src="javascript" alt="JavaScript">
            <span class="sr-only">JavaScript</span>
          </div>
        </div>

        <div class="card">
          <h3 class="text-sm uppercase tracking-widest text-gray-500 font-bold mb-6">{{ $t('home.about.skills.frameworks') }}</h3>
          <div class="flex flex-wrap justify-center gap-6">
            <img class="skill-icon" :src="rails" alt="Rails">
            <span class="sr-only">Ruby on Rails</span>

            <img class="skill-icon" :src="flask" alt="Flask">
            <span class="sr-only">Flask</span>

            <img class="skill-icon" :src="fastapi" alt="FastAPI">
            <span class="sr-only">FastAPI</span>

            <img class="skill-icon" :src="vuejs" alt="Vue.js">
            <span class="sr-only">Vue.js</span>

            <img class="skill-icon" :src="tailwind" alt="TailwindCSS">
            <span class="sr-only">TailwindCSS</span>
          </div>
        </div>

        <div class="card">
          <h3 class="text-sm uppercase tracking-widest text-gray-500 font-bold mb-6">{{ $t('home.about.skills.tools') }}</h3>
          <div class="flex flex-wrap justify-center gap-6">
            <img class="skill-icon" :src="vscode" alt="VS Code">
            <span class="sr-only">VSCode</span>

            <img class="skill-icon" :src="postman" alt="Postman">
            <span class="sr-only">Postman</span>

            <img class="skill-icon" :src="docker" alt="Docker">
            <span class="sr-only">Docker</span>
            
            <img class="skill-icon" :src="git" alt="Git">
            <span class="sr-only">Git</span>
            
            <img class="skill-icon" :src="github" alt="GitHub">
            <span class="sr-only">Github</span>
            
            <img class="skill-icon" :src="fedora" alt="Fedora">
            <span class="sr-only">Fedora</span>
            <span class="sr-only">Linux</span>
            <span class="sr-only">Ubuntu</span>

            <img class="skill-icon" :src="ai" alt="Inteligência Artificial">
            <span class="sr-only">AI</span>
            <span class="sr-only">IA</span>
            <span class="sr-only">Artificial Intelligence</span>
            <span class="sr-only">Inteligência Artificial</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="projects" class="max-w-6xl mx-auto mt-15 mb-20">
    <h1 class="text-center text-4xl capitalize font-bold tracking-tight text-neutral-900">
      <span class="text-indigo-500">2.</span> 
      {{ $t('home.projects.title') }}
    </h1>
    <hr class="mt-3 mb-8 mx-auto w-20 border-t-4 border-indigo-500 rounded-full">

    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 w-full px-5 group/opaque">
      <ProjectCard class="col-span-1 md:col-span-2 hover:opacity-100 hover:scale-101 group-hover/opaque:opacity-50"
                   :year="2026"
                   :project_name="$t('home.projects.first.name')"
                   :project_description="$t('home.projects.first.description')"
                   :tags="['Python', 'FastAPI', 'RESTful API', 'Transformers', 'Elasticsearch']"
                   :github_url="'https://github.com/vToshio/hybrid-search-api'"/>
      <ProjectCard class="col-span-1 hover:opacity-100 group-hover/opaque:opacity-50 hover:scale-101"
                   :year="2026"
                   :project_name="$t('home.projects.second.name')"
                   :project_description="$t('home.projects.second.description')"
                   :tags="['Python', 'Transformers', 'NLP']"
                   :github_url="'https://github.com/vToshio/hf-embeddings-models'"/>
      <ProjectCard class="col-span-1 hover:opacity-100 group-hover/opaque:opacity-50 hover:scale-101"
                   :year="2025"
                   :project_name="$t('home.projects.third.name')"
                   :project_description="$t('home.projects.third.description')"
                   :tags="['Python', 'Django', 'JavaScript', 'Bootstrap']"
                   :github_url="'https://github.com/vToshio/beewatts'"/>
      <ProjectCard class="col-span-1 hover:opacity-100 group-hover/opaque:opacity-50 hover:scale-101"
                   :year="2024"
                   :project_name="$t('home.projects.fourth.name')"
                   :project_description="$t('home.projects.fourth.description')"
                   :tags="['Python', 'Flask', 'JavaScript', 'Bootstrap']"
                   :github_url="'https://github.com/vToshio/sistema-inventario-flask'"/>
      <AllProjectCard class="hover:opacity-100 group-hover/opaque:opacity-50 hover:scale-101" />
    </div>

    <div id="experiences" class="max-w-6xl mx-auto mt-15 mb-20">
      <h1 class="text-center text-4xl capitalize font-bold tracking-tight text-neutral-900">
        <span class="text-indigo-500">3.</span> 
        {{ $t('home.experiences.title') }}
      </h1>
      <hr class="mt-3 mb-8 mx-auto w-20 border-t-4 border-indigo-500 rounded-full">

      <div class="flex flex-col gap-15">
        <ExperienceCard :company="$t('home.experiences.first.company')" :logo="esl_logo"
                        :website_url="'https://www.eslsistemas.com.br'"
                        :job_title="$t('home.experiences.first.job_title')"
                        :topics="[
                          $t('home.experiences.first.topics.first'),
                          $t('home.experiences.first.topics.second'),
                          $t('home.experiences.first.topics.third'),
                          $t('home.experiences.first.topics.fourth')
                        ]"
                        :skills="['Ruby on Rails', 'VueJS', 'REST/RESTful', 'GraphQL']"
                        :start="$t('home.experiences.first.start_at')" :end="$t('home.experiences.first.end_at')" />
        <ExperienceCard :company="$t('home.experiences.second.company')" :logo="pref_an_logo"
                        :website_url="'https://arturnogueira.sp.gov.br/site/'"
                        :job_title="$t('home.experiences.second.job_title')"
                        :skills="['PowerShell', 'Bash', 'Python']"
                        :topics="[
                          $t('home.experiences.second.topics.first'),
                          $t('home.experiences.second.topics.second'),
                          $t('home.experiences.second.topics.third')
                        ]"
                        :start="$t('home.experiences.second.start_at')" :end="$t('home.experiences.second.end_at')" />
      </div>
    </div>

    <div class="max-w-6xl mx-auto my-15 px-6">
      <div class="group border border-zinc-100 rounded-2xl shadow-sm hover:shadow-md transition-all">
        <div class="flex flex-row text-left px-8 md:px-12">
          <div class="space-y-3 w-full sm:w-1/2 py-15">
            <h1 class="text-3xl md:text-4xl font-bold tracking-tight">
              {{ $t('home.know_more.title') }}<span class="text-indigo-500">?</span>
            </h1>
            <p class="text-base text-neutral-500 font-light">
              {{ $t('home.know_more.content') }}
            </p>

            <div class="flex flex-col sm:flex-row gap-5 pt-2">
              <button @click="downloadResume()" class="btn-indigo btn-sm">
                {{ $t('home.know_more.download_resume') }}
              </button>

              <RouterLink :to="{ name: 'contact', params: { locale: $route.params.locale } }" class="btn btn-sm text-center">
                {{ $t('home.know_more.contact') }}
              </RouterLink>
            </div>
          </div>
          
          <template v-if="!isMobile">
            <div class="flex justify-center items-center w-1/2">
              <img class="w-1/2 group-hover:scale-110 transition-all duration-300" :src="resumeImg" alt="">
            </div>
          </template>
        </div>
      </div>
    </div>
  </section>
</template>
