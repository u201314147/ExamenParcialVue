<template>
  <div id="modal" class="modal" :class="{ 'is-active': isOpen }">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Confirm</p>
      </header>
      <section class="modal-card-body">{{ message }}</section>
      <footer class="modal-card-foot">
        <button class="button modal-no" @click="onNo">No</button>
        <button class="button is-primary modal-yes" @click="onYes">Yes</button>
      </footer>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({})
export default class Modal extends Vue {
  @Prop({ default: '' })
  message!: string

  @Prop({ default: false })
  isOpen!: boolean

  public onNo() {
    this.$emit('handleNo')
  }

  public onYes() {
    this.$emit('handleYes')
  }
}
</script>
