<template>
    <div class="title">グループを選択してください</div>
    <div class="class-content" v-for="g in groups" v-bind:key="g.id">
      <!-- <div class="class-name"><router-link to="/groups/:groupId/members">{{g.name}}</router-link></div> -->
      <router-link to="/groups/:groupId/members"><div class="class-name">{{g.name}}</div></router-link>
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
.title{
 text-align: center;
 font-size: 32px;
 margin-top: 50px;
}
.class-name{
  border: 1px solid black;
  padding: 50px 50px;
  margin: 30px 200px;
  text-decoration: none;
}

</style>