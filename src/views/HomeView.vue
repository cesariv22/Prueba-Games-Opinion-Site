<template>
  <div>
    <CardGame :games="dataGames" />
  </div>
</template>

<script>
import CardGame from "@/components/CardGame.vue";
import { mapState } from "vuex";

export default {
  name: "HomeView",
  components: {
    CardGame,
  },
  computed: {
    ...mapState(["dataGames"]),
  },
};
</script>
