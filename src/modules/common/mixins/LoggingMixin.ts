import { Component, Vue } from 'vue-property-decorator'

//const hookMessageSuffix = 'hook called (from mixin)'

@Component
class LoggingMixin extends Vue {
  get componentName(): string {
    return `${this.$options.name} component`
  }
  created() {
    //console.log(`${this.componentName} created ${hookMessageSuffix}`)
  }
  mounted() {
    //console.log(`${this.componentName} mounted ${hookMessageSuffix}`)
    window.dispatchEvent(new Event('resize'))
    //const body = document.body
    //body.classList.add('MyClass')
  }
  updated() {
    //console.log(`${this.componentName} updated ${hookMessageSuffix}`)
  }
  destroyed() {
    //console.log(`${this.componentName} destroyed ${hookMessageSuffix}`)
  }
}
export default LoggingMixin
