<template>
  <header>
    <nav class="navbar has-background-dark is-dark" role="navigation" aria-label="main navigation">
      <HeaderBarBrand></HeaderBarBrand>
      <HeaderBarLinks></HeaderBarLinks>
    </nav>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HeaderBarBrand from './HeaderBarBrand.vue'
import HeaderBarLinks from './HeaderBarLinks.vue'

@Component({
  components: {
    HeaderBarBrand,
    HeaderBarLinks,
  },
})
export default class HeaderBar extends Vue {}
</script>
