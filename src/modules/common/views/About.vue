<template>
  <div class="content-container">
    <div class="section content-title-group">
      <h2 class="title">About Vue Banking</h2>
      <p>Tecnologías y Sistemas Web</p>
      <p>
        <a
          href="https://pregrado.upc.edu.pe/facultad-de-ingenieria/ingenieria-de-software"
          target="_blank"
        >UPC - Ingeniería de Software</a>
        <br />
        <a href="https://www.upc.edu.pe" target="_blank">
          <img src="img/logo-upc.png" alt="Logo UPC" />
        </a>
      </p>
      <br />
      <h3 class="title sub-title">Source Code</h3>
      <p>You can find the source code for this project at the link below</p>
      <p>
        <a
          href="https://github.com/UPC-ING-SW/banking-vue"
          target="_blank"
        >github.com/UPC-ING-SW/banking-vue</a>
      </p>
      <br />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class About extends Vue {}
</script>