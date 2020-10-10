<template>
  <div id="app">
    <HeaderBar />
    <div class="main-section columns">
      <NavBar />
      <main class="column">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HeaderBar from '@/modules/common/components/HeaderBar.vue'
import NavBar from '@/modules/common/components/NavBar.vue'

@Component({
  components: {
    HeaderBar,
    NavBar,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import '@/design/index.scss';
</style>