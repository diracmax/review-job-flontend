<template>
    <div>グループを選択してください</div>
    <div class="class-content" v-for="g in groups" v-bind:key="g.id">
      <div class="class-name">{{g.name}}</div>
    </div>
</template>

<script>
  import axios from 'axios';
  export default {
  name: 'SelectGroup',
  props: {
  },
  data() {
        return{
          groups: null
        }
    },
  mounted: function () {
    axios.get('http://localhost:3000/groups')
            .then(response => this.groups=response.data.groups)
            .catch(error => console.log(error))
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>