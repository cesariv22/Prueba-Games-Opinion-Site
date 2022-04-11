<template>
  <div id="exampleModal" class="modal" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">
            Escribe tu opinion para el juego:
            <h2 class="text-center">{{ propsModalTitle }}</h2>
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <form>
            <div>
              <label for="recipient-name" class="col-form-label">Nombre:</label>
              <input
                type="text"
                class="form-control"
                id="nombre"
                placeholder="Tu nombre debe ir aquí..."
                v-model="nameInput"
              />
            </div>
            <div>
              <label for="message-text" class="col-form-label"
                >Opiniones:</label
              >
              <textarea
                class="form-control"
                id="opiniones"
                placeholder="Tu opinión debe ir aquí..."
                v-model="opinionInput"
              ></textarea>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
            @click="clearModel"
          >
            Cerrar
          </button>
          <button
            type="button"
            class="btn btn-primary"
            @click="addOpinion"
            data-bs-dismiss="modal"
          >
            Guardar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "ModalGame",
  data() {
    return {
      nameInput: "",
      opinionInput: "",
    };
  },
  props: {
    propsModalTitle: {
      type: String,
      default: () => "",
    },
  },
  methods: {
    ...mapMutations(["MUTA_OPINION"]),

    addOpinion() {
      if (!this.nameInput || !this.opinionInput)
        alert("Todos los campos son requeridos");
      else {
        const opinion = {
          titleGame: this.propsModalTitle,
          name: this.nameInput,
          opinion: this.opinionInput,
        };
        this.MUTA_OPINION(opinion);
        alert("Opinión enviada con éxito...");
        this.clearModel();
      }
    },
    clearModel() {
      this.nameInput = "";
      this.opinionInput = "";
    },
  },
};
</script>

<style></style>
