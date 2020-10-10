<template>
  <div class="content-container">
    <div class="content-title-group not-found">
      <i class="fas fa-exclamation-triangle" aria-hidden="true"></i> &nbsp;
      <span class="title">Page not found</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class PageNotFound extends Vue {}
</script>
