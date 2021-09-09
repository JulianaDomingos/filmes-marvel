<template>
  <div>
    <!-- cabeçalho -->
    <div class="bg-gray-900">
      <h1 class="font-black text-gray-50 text-3xl p-4">MARVEL STUDIOS</h1>
    </div>

    <div class="grid grid-cols-7 divide-x divide-gray-900 pl-4 bg-gray-800">
      <div class="col-span-4 font-black text-gray-50 text-lg pt-5 mb-5">
        FILMES

        <ul class="flex flex-wrap gap-4">
          <li v-for="(filme, index) of listaDeFilmes" :key="index">
            <img
              :src="'http://image.tmdb.org/t/p/w500/' + filme.poster_path"
              width="160px"
            />
            <div
              class="
                bg-gray-900
                text-gray-100
                w-40
                text-sm
                p-1.5
                break-words
                flex
                items-center
                h-20
              "
            >
              <div class="w-40">{{ filme.title }}</div>
              <div class="bg-gray-800 text-center p-1 w-9">
                {{ filme.vote_average }}
              </div>
            </div>
            <button
              v-on:click="adicionarFavorito(index)"
              class="bg-yellow-500 text-gray-100 w-40 text-sm p-1.5 mt-2"
            >
              Adicionar aos favoritos
            </button>
          </li>
        </ul>
      </div>
      <div class="col-span-3 font-black text-gray-50 text-lg pt-5 ml-2 pl-2">
        MEUS FAVORITOS
        <div>
          <ul class="flex flex-wrap gap-4">
            <li v-for="(filme, index) of listaDeFavoritos" :key="index">
              <img
                :src="'http://image.tmdb.org/t/p/w500/' + filme.poster_path"
                width="160px"
              />
              <div
                class="
                  bg-gray-900
                  text-gray-100
                  w-40
                  text-sm
                  p-1.5
                  break-words
                  flex
                  items-center
                  h-20
                "
              >
                <div class="w-40">{{ filme.title }}</div>
                <div class="bg-gray-800 text-center p-1 w-9">
                  {{ filme.vote_average }}
                </div>
              </div>
              <button
                v-on:click="removerFavorito(index)"
                class="bg-yellow-500 text-gray-100 w-40 text-sm p-1.5 mt-2"
              >
                Remover dos favoritos
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Filmes from "../services/filmes";

export default {
  data() {
    return {
      listaDeFilmes: [],
      listaDeFavoritos: []
    };
  },

  methods: {
    adicionarFavorito: function (indexFilme) {
      this.listaDeFavoritos.push(this.listaDeFilmes[indexFilme])
    },
    removerFavorito: function(indexFilme) {
      this.listaDeFavoritos.splice(indexFilme, 1)
    }
  },

  mounted() {
    Filmes.listar().then((resposta) => {
      this.listaDeFilmes = resposta.data.results;
    });
  },
};
</script>
