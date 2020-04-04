<template>
  <div>
    <TopMenu></TopMenu>
    <router-view></router-view>
  </div>
</template>

<script>
import TopMenu from './components/TopMenu'


export default {
  name: 'App',
  components: {
    TopMenu
  }
}
</script>

<style>
body { font-family:Courier New, monospace }

</style>