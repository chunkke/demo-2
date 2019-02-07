<template>
  <div class="hello">
    <router-link to="/addPeople"><h1>{{ msg }}</h1></router-link>
    <footer-nav v-bind:class="{isIndex: Index}"></footer-nav>
  </div>
</template>

<script>
import FooterNav from './footer.vue'
export default {
  name: 'Welcome',
  data () {
    return {
      msg: 'Welcome',
      Index: true
    }
  },
  components: {
    FooterNav
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
