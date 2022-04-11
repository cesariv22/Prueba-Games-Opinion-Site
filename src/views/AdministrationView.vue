<template>
  <div class="row mx-0 px-0">
    <div class="mx-0 px-0">
      <h1 class="text-center mt-4">Administrando las Opiniones.</h1>
    </div>
    <div v-if="dataOpinion.length" class="px-0 mx-0">
      <table class="col-12 mx-0 px-0">
        <thead class="mx-0 px-0">
          <tr class="mx-0 px-0">
            <th scope="col">#</th>
            <th scope="col">Persona</th>
            <th scope="col">Juego</th>
            <th scope="col">Opinion</th>
          </tr>
        </thead>
        <tbody class="col-12 mx-0 px-0">
          <tr v-for="(opinion, i) in dataOpinion" :key="i">
            <th>{{ i + 1 }}</th>
            <td class="text-start ps-2">{{ opinion.name }}</td>
            <td class="text-start ps-2">{{ opinion.titleGame }}</td>
            <td class="text-start ps-2">{{ opinion.opinion }}</td>
            <td>
              <button type="button" class="btn btn-danger">Eliminar</button>
            </td>
            <td>
              <button type="button" class="btn btn-primary">Editar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="px-0 mx-0" v-else>
      <div class="list-group-item-danger">
        <p class="text-start my-auto">No existen opiniones por administrar.</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "AdministrationView",
  computed: {
    ...mapState(["dataOpinion"]),
  },
};
</script>
