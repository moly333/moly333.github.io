<template>
  <div id="app">
    <div class="glitchmoly" data-text="morimolymoly">morimolymoly</div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Bowlby+One|Bree+Serif");
#app {
  font-family: 'Bree Serif', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.glitchmoly {
  font-family: 'Bowlby One', cursive;
  color: white;
  background: black;
  font-size: 50px;
  padding: 7px 7px;
  position: relative;
  left: 0px;
  width: 430px;
  margin-right: auto; }

@keyframes noise-anim{
  $steps:20;
  @for $i from 0 through $steps{
    #{percentage($i*(1/$steps))}{
      clip:rect(random(100)+px,9999px,random(100)+px,0);
    }
  }
}

@keyframes noise-anim-2{
  $steps:20;
  @for $i from 0 through $steps{
    #{percentage($i*(1/$steps))}{
      clip:rect(random(100)+px,9999px,random(100)+px,0);
    }
  }
}

.glitchmoly:after{
  content:attr(data-text);
  position:absolute;
  left:2px;
  text-shadow:-1px 0 red;
  top:0;
  color:white;
  background:black;
  overflow:hidden;
  clip:rect(0,900px,0,0);
  animation:noise-anim 2s infinite linear alternate-reverse;
}

.glitchmoly:before{
  content:attr(data-text);
  position:absolute;
  left:-2px;
  text-shadow:1px 0 blue;
  top:0;
  color:white;
  background:black;
  overflow:hidden;
  clip:rect(0,900px,0,0);
  animation:noise-anim-2 3s infinite linear alternate-reverse;
}
</style>
