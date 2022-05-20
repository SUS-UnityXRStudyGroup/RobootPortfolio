<template>
  <div class="container">
    <img alt="Roboot Logo" src="./assets/Roboot.png">
  </div>
  <transition>
    <div class="reveal">
      <About header="About"/>
    </div>
  </transition>
  <transition>
    <div class="reveal">
        <PV header="PV"/>
    </div>
  </transition>
</template>

<script>
import About from './components/About.vue'
import PV from './components/PromotionVideo.vue'

export default {
  name: 'App',
  components: {
    About,
    PV
  },

  data() {
    return {
      visible: false,
    };
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {      
      const reveals = document.querySelectorAll(".reveal");
      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elTop = reveals[i].getBoundingClientRect().top;
        const elVisible = 150;
        if (elTop < windowHeight - elVisible) {
          reveals[i].classList.add("active");
        }
        else{
          reveals[i].classList.remove("active");
        }
      }
    },
  },
}
</script>

<style>
body {
  background-color: #000000;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #51c3c3;
}

h1{
  color: #ffffff;
}
</style>

<style scoped>
.reveal{
  position: relative;
  opacity: 0;
  transition: 2s all ease;
}
.reveal.active{
  transform: translateY(0);
  opacity: 1;
}

div.container {
  display: flex;
  align-items: center;
  justify-content: center;
}

div.container img {
  max-width: 100%;
} 
</style>
