<script setup>
import ProjectCard from '@/components/projects/ProjectCard.vue';
import AllProjectCard from '@/components/projects/AllProjectCard.vue';
import ExperienceCard from '@/components/experiences/ExperienceCard.vue';

import placeholder from '@/assets/images/photo-placeholder.png';

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

import esl_logo from '@/assets/images/esl-color.png'
import pref_an_logo from '@/assets/images/pref-artur-nogueira.png'
</script>

<template>
  <section id="hero" class="relative z-10 min-h-screen flex items-center text-neutral-100 bg-neutral-800 overflow-hidden">
    <div class="absolute z-30 mask-radial-at-top mask-radial-from-5% mask-radial-to-60% bg-teal-500/30 w-full h-full backdrop-blur-2xl"></div>
    <div class="absolute z-30 mask-radial-at-left mask-radial-from-5% mask-radial-to-60% bg-teal-500/30 w-full h-full backdrop-blur-2xl"></div>
    <div class="absolute z-20 mask-radial-from-5% mask-radial-to-90% bg-neutral-500/20 w-full h-full backdrop-blur-2xl"></div>
    <div class="absolute z-30 mask-radial-at-bottom mask-radial-from-5% mask-radial-to-60% bg-indigo-500/30 w-full h-full backdrop-blur-2xl"></div>
    <div class="absolute z-30 mask-radial-at-right mask-radial-from-5% mask-radial-to-60% bg-indigo-500/30 w-full h-full backdrop-blur-2xl"></div>
    <div class="z-50 text-center mx-auto max-w-1/2">
      <div class="flex flex-col">
        <span class="font-light text-2xl text-nowrap text-shadow-2xs text-shadow-neutral-500">👋Opa! Prazer, sou</span>
        <h1 class="text-6xl font-bold my-3 italic tracking-tight text-shadow-2xs text-shadow-neutral-500">Vinícius Toshio</h1>
      </div>
      <div class="flex items-center justify-center my-3 py-1.5 rounded-full bg-sky-500 shadow-xs shadow-neutral-500">
        <span class="text-sm md:text-base font-medium tracking-tight">Desenvolvedor Full-Stack</span>
      </div>
    </div>
  </section>

  <section id="about" class="max-w-6xl mx-auto mt-15 mb-20">
    <h1 class="text-center text-4xl font-bold tracking-tight text-neutral-900">
      <span class="text-indigo-500">1.</span> 
      Sobre Mim
    </h1>
    <hr class="mx-auto w-1/2 mt-3 mb-10">

    <div class="flex flex-col-reverse xl:flex-row justify-center w-full mt-10 gap-5">
      <div class="flex flex-col gap-2 text-justify px-5 mx-8 md:mx-auto md:max-w-3/4 xl:mx-0 xl:max-w-1/2">
        <p class="text-base font-light">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla imperdiet lacinia odio ut accumsan. Pellentesque convallis purus eget elit commodo auctor. Donec vestibulum eget nunc id bibendum. Suspendisse eu ligula erat. Vivamus fermentum purus urna, quis viverra nisi cursus in. Curabitur porttitor leo ut auctor suscipit. Vestibulum quis augue luctus ligula aliquet blandit. Aenean libero ipsum, mollis eget consectetur vel, consectetur ut urna. Vestibulum accumsan dignissim vestibulum. Pellentesque dapibus gravida augue quis viverra.
        </p>
        <p class="text-base font-light">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla imperdiet lacinia odio ut accumsan. Pellentesque convallis purus eget elit commodo auctor. Donec vestibulum eget nunc id bibendum. Suspendisse eu ligula erat. Vivamus fermentum purus urna, quis viverra nisi cursus in. Curabitur porttitor leo ut auctor suscipit. Vestibulum quis augue luctus ligula aliquet blandit. Aenean libero ipsum, mollis eget consectetur vel, consectetur ut urna. Vestibulum accumsan dignissim vestibulum. Pellentesque dapibus gravida augue quis viverra.
        </p>
      </div>
      <img class="w-100 mx-auto xl:mx-0 xl:max-w-1/2 rounded-xl" :src="placeholder" alt="">
    </div>
    
    <div class="mx-auto max-w-6xl px-6 pt-12">
      <h2 class="text-center text-3xl font-bold tracking-tight text-neutral-900 mb-10">Habilidades</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="card">
          <h3 class="text-sm uppercase tracking-widest text-gray-500 font-bold mb-6">Linguagens</h3>
          <div class="flex flex-wrap justify-center gap-6">
            <img class="skill-icon" :src="ruby" alt="Ruby">
            <img class="skill-icon" :src="python" alt="Python">
            <img class="skill-icon" :src="javascript" alt="JavaScript">
          </div>
        </div>

        <div class="card">
          <h3 class="text-sm uppercase tracking-widest text-gray-500 font-bold mb-6">Frameworks</h3>
          <div class="flex flex-wrap justify-center gap-6">
            <img class="skill-icon" :src="rails" alt="Rails">
            <img class="skill-icon" :src="flask" alt="Flask">
            <img class="skill-icon" :src="fastapi" alt="FastAPI">
            <img class="skill-icon" :src="vuejs" alt="Vue.js">
            <img class="skill-icon" :src="tailwind" alt="TailwindCSS">
          </div>
        </div>

        <div class="card">
          <h3 class="text-sm uppercase tracking-widest text-gray-500 font-bold mb-6">Ferramentas</h3>
          <div class="flex flex-wrap justify-center gap-6">
            <img class="skill-icon" :src="vscode" alt="VS Code">
            <img class="skill-icon" :src="postman" alt="Postman">
            <img class="skill-icon" :src="docker" alt="Docker">
            <img class="skill-icon" :src="github" alt="GitHub">
            <img class="skill-icon" :src="git" alt="Git">
            <img class="skill-icon" :src="fedora" alt="Fedora">
            <img class="skill-icon" :src="ai" alt="Inteligência Artificial">
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="projects" class="max-w-6xl mx-auto mt-15 mb-20">
    <h1 class="text-center text-4xl font-bold tracking-tight text-neutral-900">
      <span class="text-indigo-500">2.</span> 
      Projetos
    </h1>
    <hr class="mx-auto w-1/2 mt-3 mb-10">

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-5 w-full px-5 group/opaque">
      <ProjectCard class="col-span-1 lg:col-span-2 hover:opacity-100 hover:scale-101 group-hover/opaque:opacity-50"
                   :year="2026"
                   :project_name="'API de Pesquisa Híbrida'"
                   :project_description="'Protótipo de API para recuperação inteligente de informações (TCC/FHO). Utiliza Elasticsearch e modelos de Linguagem Natural para realizar pesquisas híbridas, integrando busca semântica (vetorial) e busca por palavras-chave para identificar os trechos mais relevantes de um documento.'"
                   :tags="['Python', 'FastAPI', 'API RESTful', 'SentenceTransformers', 'HuggingFace', 'Elasticsearch']"
                   :github_url="'https://github.com/vToshio/hybrid-search-api'"/>
      <ProjectCard class="col-span-1 hover:opacity-100 group-hover/opaque:opacity-50 hover:scale-101"
                   :year="2026"
                   :project_name="'Benchmarking de Modelos NLP'"
                   :project_description="'Ferramenta desenvolvida para testar a eficiência computacional e de similaridade de palavras de modelos de geração de embeddings do HuggingFace.'"
                   :tags="['Python', 'HuggingFace', 'SentenceTransformers', 'NLP']"
                   :github_url="'https://github.com/vToshio/hf-embeddings-models'"/>
      <ProjectCard class="col-span-1 hover:opacity-100 group-hover/opaque:opacity-50 hover:scale-101"
                   :year="2025"
                   :project_name="'Calculadora Beewatts'"
                   :project_description="'Ferramenta para simular a economia e o investimento necessário para a instalação de energia solar com base no consumo do usuário.'"
                   :tags="['Python', 'Django', 'JavaScript', 'Bootstrap']"
                   :github_url="'https://github.com/vToshio/beewatts'"/>
      <ProjectCard class="col-span-1 hover:opacity-100 group-hover/opaque:opacity-50 hover:scale-101"
                   :year="2024"
                   :project_name="'Sistema de Gestão de Estoque'"
                   :project_description="'Aplicação Full-stack com API RESTful integrada e interface dinâmica (AJAX/Fetch). Gerencia produtos, clientes e vendas com foco em uma experiência de usuário dinâmica e modelagem de dados eficiente. '"
                   :tags="['Python', 'Flask', 'JavaScript', 'Bootstrap']"
                   :github_url="'https://github.com/vToshio/sistema-inventario-flask'"/>
      <AllProjectCard class="hover:opacity-100 group-hover/opaque:opacity-50 hover:scale-101" />
    </div>

    <div id="experiences" class="max-w-6xl mx-auto mt-15 mb-20">
      <h1 class="text-center text-4xl font-bold tracking-tight text-neutral-900">
        <span class="text-indigo-500">3.</span> 
        Experiências
      </h1>
      <hr class="mx-auto w-1/2 mt-3 mb-8">

      <div class="flex flex-col gap-15">
        <ExperienceCard :company="'ESL Sistemas'" :logo="esl_logo"
                        :job_title="'Estagiário de Desenvolvimento Web'"
                        :topics="[
                          'Atuação no suporte técnico especializado níveis N1 e N2, solucionando incidentes diários e assegurando o cumprimento de acordos de nível de serviço (SLA).',
                          'Desenvolvimento de funcionalidades para sistemas logísticos utilizando Ruby on Rails, com foco na aplicação de padrões de projeto e desenvolvimento da empresa e em conformidade com requisitos fiscais e de negócio.',
                          'Otimização de 20% no tempo de entrega de demandas através da implementação de processos de Behavior-Driven Development (BDD).',
                          'Gestão de fluxo de trabalho utilizando Kanban e colaboração ativa em cerimônias ágeis, contribuindo para o refinamento técnico de requisitos.',
                        ]"
                        :skills="['Ruby on Rails', 'VueJS', 'REST/RESTful', 'GraphQL']"
                        :start="'2025'" :end="'Atual'" />
        <ExperienceCard :company="'Prefeitura Municipal de Artur Nogueira'" :logo="pref_an_logo"
                        :job_title="'Estagiário de TI'"
                        :skills="['PowerShell', 'Bash', 'Python']"
                        :topics="[
                          'Automatização de tarefas operacionais recorrentes por meio de scripts em PowerShell e Bash, reduzindo o esforço manual da equipe e aumentando a produtividade.',
                          'Manutenção preventiva e corretiva de infraestrutura de rede e hardware, garantindo a continuidade e estabilidade dos serviços públicos municipais.',
                          'Providência de suporte técnico especializado para usuários internos, solucionando problemas de software e conectividade para múltiplos departamentos.'
                        ]"
                        :start="'2023'" :end="'2025'" />
      </div>
    </div>
  </section>
</template>
