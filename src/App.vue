<template>
  <div id="app">
    <div class="container px-0 container-section">
      <div class="row mx-0 px-0">
        <!--Nav-->
        <div class="col-12 mx-0 px-0">
          <nav class="navbar navbar-expand-lg navbar-dark bg-dark pt-2">
            <div class="container-fluid">
              <router-link class="navbar-brand" to="/"
                ><i class="fas fa-headset pe-2"></i>Games Opinion</router-link
              >
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div
                class="collapse navbar-collapse justify-content-end"
                id="navbarNav"
              >
                <ul class="nav navbar-nav">
                  <li class="nav-item">
                    <router-link to="/" class="router-link"
                      ><i class="fas fa-home pe-1"></i>Home</router-link
                    >
                  </li>
                  <li class="nav-item">
                    <router-link to="/opinions" class="router-link"
                      ><i class="fas fa-comments pe-1"></i
                      >Opiniones</router-link
                    >
                  </li>
                  <li class="nav-item">
                    <router-link to="/administration" class="router-link"
                      ><i class="fas fa-users-cog pe-1"></i
                      >Administración</router-link
                    >
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
// import CardGame from "@/components/CardGame.vue";
// import ModalGame from "@/components/ModalGame.vue";
// import HomeView from "@/views/HomeView.vue";
import { mapActions } from "vuex";

export default {
  name: "App",
  components: {},
  created() {
    this.getData();
  },
  methods: {
    ...mapActions(["getData"]),
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
li {
  margin-right: 1rem;
}
a:hover {
  color: rgb(175, 202, 245);
}
.container-section {
  min-width: 100%;
}
.router-link {
  text-decoration: none;
  color: white;
}
</style>
