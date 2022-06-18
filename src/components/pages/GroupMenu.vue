<template>
    <div>メニュー画面</div>
    <div><router-link :to="{name:'SelectGroup'}">グループを選ぶ</router-link></div>
    <div><router-link :to="{name:'JoinGroup'}">グループに入る</router-link></div>
    <div><router-link :to="{name:'CreateGroup'}">グループを作る</router-link></div>
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
</style>