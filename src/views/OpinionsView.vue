<template>
  <div class="row px-0 mx-0">
    <h1 class="text-center mt-4">Lista de Opiniones</h1>
    <AccordionGame :propsOpinion="dataOpinion" v-if="dataOpinion.length" />
    <div v-else class="px-0 mx-0">
      <div class="list-group-item-danger mx-0 px-0">
        <p class="text-start my-auto">No existen opiniones por administrar.</p>
      </div>
    </div>
  </div>
</template>

<script>
import AccordionGame from "@/components/AccordionGame.vue";
import { mapState } from "vuex";
export default {
  name: "OpinionsView",
  components: {
    AccordionGame,
  },
  computed: {
    ...mapState(["dataOpinion"]),
  },
  methods: {
    btnAddOpinion(num) {
      this.$emit("delete-task", num);
    },
  },
};
</script>

<style>
.list-opinion {
  display: flex;
  justify-content: space-between;
}
</style>
