<template>
  <div class="top">
    <br>
    <div id="top_contents">
      <router-link id="goNext" to="/WhoAmI">Who am I?</router-link>
      <br>
      <router-link id="goNext" to="/Contacts">Contacts</router-link>
      <br>
      <router-link id="goNext" to="/Projects">Projects</router-link>
      <br>
      <router-link id="goNext" to="/Links">Links</router-link>

      <h1 @click="reverseXSSMEenabled">!! XSS ME !!</h1>
      <template v-if="xssme_enabled">
        <input v-model="xssme">
        <button @click="clearXSSME">CLEAR</button>
        <p id="p_xssme">{{ xssme }}</p>
        <p id="challengeMe" v-if="xssme.length===0">CHALLENGE ME!!</p>
      </template>
    </div>
    <div id="vueimage">
      Powered by<br>
      <img src="../assets/logo.png">
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopPage',
  data () {
    return {
      xssme: '',
      xssme_enabled: false
    }
  },
  methods: {
    clearXSSME () {
      this.xssme = ''
    },
    reverseXSSMEenabled () {
      this.xssme_enabled = !this.xssme_enabled
    }
  }
}
</script>

<style scoped>
  .top{
    font-family: 'Bree Serif', serif;
    display: flex;
    width:430px;
  }
  #top_contents{
    margin-right: auto;
  }
  #vueimage{
    font-size:20px;
  }
  #goNext {
    color: black;
    font-size: 30px;
  }
  #challengeMe{
    color: red;
  }
</style>
