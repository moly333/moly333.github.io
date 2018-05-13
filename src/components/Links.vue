<template>
  <div class="links">
    <h1>Links</h1>
    <ul>
      <li><a href="http://morimolymoly.hateblo.jp/">Blog</a></li>
      <li><a href="https://github.com/moly333">GitHub</a></li>
      <li><a href="https://morimolymoly.github.io/nikki/">日記</a></li>
    </ul>
    <PageFooter></PageFooter>
  </div>
</template>

<script>
import PageFooter from '@/components/PageFooter'
export default {
  components: {
    PageFooter
  }
}
</script>

<style lang="css" scoped>
a {
  color:black;
}
</style>
