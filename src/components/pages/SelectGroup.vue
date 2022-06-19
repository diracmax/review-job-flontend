<template>
    <div class="title">グループを選択してください</div>
    <div class="class-content" v-for="g in groups" v-bind:key="g.id">
      <router-link :to="{name:'Members',params:{groupId:g.id}}">
          <div class="class-name">{{g.name}}</div>
      </router-link>
    </div>
</template>

<script>
  import client from "../../api_client";
  export default {
  name: 'SelectGroup',
  props: ["groupId"],
  data() {
        return{
          groups: null
        }
    },
  mounted: function () {
    client.get('/groups')
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