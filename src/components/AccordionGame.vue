<template>
  <div>
    <div class="accordion" id="accordionExample">
      <div v-for="(opinion, i) in propsOpinion" :key="i" class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
          <button
            class="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            Opinion creada por: {{ opinion.name }}. Para el juego:
            {{ opinion.titleGame }}.
          </button>
        </h2>
        <div
          id="collapseOne"
          class="accordion-collapse collapse show"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body text-start">{{ opinion.opinion }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AccordionGame",
  props: {
    propsOpinion: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style></style>
