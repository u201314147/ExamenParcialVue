<template>
  <div class="navbar-brand">
    <router-link to="/" class="brand-link">
      <img
        src="img/logo.png"
        alt="Banking Logo"
        class="brand-image img-circle elevation-3"
        style="opacity: .8"
      />
    </router-link>
    <div class="navbar-item nav-home">
      <span class="banking3">Banking</span>
    </div>
    <button
      class="link navbar-burger burger"
      aria-label="menu"
      aria-expanded="false"
      data-target="navbarBasicExample"
    >
      <span aria-hidden="true" />
      <span aria-hidden="true" />
      <span aria-hidden="true" />
    </button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class HeaderBarBrand extends Vue {}
</script>