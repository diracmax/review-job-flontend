<template>
  <div class="container">
    <div class="item title">メニュー画面</div>
    <div class="item"><router-link class="btn btn-primary" role="button" :to="{name:'SelectGroup'}">グループを選ぶ</router-link></div>
    <div class="item"><router-link class="btn btn-primary" role="button" :to="{name:'JoinGroup'}">グループに入る</router-link></div>
    <div class="item"><router-link class="btn btn-primary" role="button" :to="{name:'CreateGroup'}">グループを作る</router-link></div>
  </div>
</template>

<script>
export default {
  name: 'GroupMenu',
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.item {
  margin: 1rem auto;
  text-align: center;
}
</style>