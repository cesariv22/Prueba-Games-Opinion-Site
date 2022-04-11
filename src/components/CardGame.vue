<template>
  <div class="container mx-0 mx-auto px-0">
    <div class="row mx-0 px-0">
      <div class="col-12 mt-3">
        <h1 class="display-6">Listado de Juegos Disponibles</h1>
      </div>
      <div
        v-for="(game, i) in games"
        :key="i"
        class="card col-12 col-sm-4 mt-4"
      >
        <img
          :src="game.background_image"
          class="card-img-top"
          :alt="game.name"
        />
        <div class="card-body">
          <h5 class="card-title">{{ game.name }}</h5>
        </div>
        <ul class="list-group list-group-flush text-start">
          <li class="list-group-item">Rating: {{ game.rating }}</li>
          <li class="list-group-item">Released: {{ game.released }}</li>
          <li class="list-group-item">Updated: {{ game.updated }}</li>
        </ul>
        <div class="card-body">
          <div>
            <button
              @click="btnOpinion(game.name)"
              class="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Opinar
            </button>
          </div>
        </div>
        <ModalGame :propsModalTitle="titleCard" />
      </div>
    </div>
  </div>
</template>

<script>
import ModalGame from "@/components/ModalGame.vue";
export default {
  name: "CardGame",
  data() {
    return {
      titleCard: "",
    };
  },
  components: {
    ModalGame,
  },
  props: {
    games: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    btnOpinion(nameGame) {
      this.titleCard = nameGame;
    },
  },
};
</script>

<style></style>
