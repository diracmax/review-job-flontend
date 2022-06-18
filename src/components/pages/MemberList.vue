<template>
    <div class="title">メンバー一覧</div>
    <div class="member-list" v-for="m in members" v-bind:key="m.id">
      <router-link :to="{name:'UserJobs',params:{groupId:this.groupId}}">
        <h1 class="member-info">{{m.name}}</h1>
        <h2 class="post-number">バイト投稿数  {{m.review_counts}}</h2>
      </router-link>
    </div>

    <button class="invite-code" @click="getCode">グループ招待コード</button>
</template>

<script>
import client from "../../api_client";
  export default {
  name: 'MemberList',
  props: ["groupId"],
  data() {
        return{
          members: null
        }
    },
  mounted: function () {
    client.get(`/api/groups/${this.groupId}/members`)
            .then(response => this.members=response.data.members)
            .catch(error => console.log(error))
  },
  methods:{
    getCode: function(){
      alert('招待コードをコピーしました！')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title{
 text-align: center;
 font-size: 32px;
 margin-top: 50px;
 background-color: #DDDDDD;
}
.member-list{
  border: 1px solid black;
  /* padding-top: 15px;
  padding-bottom: 15px; */
  margin-top: 30px;
  margin-bottom: 30px;
  margin-right: 150px;
  margin-left: 10px;
  text-decoration: none;
  font-size: 12px;
}

a {
  text-decoration: none;
}

</style>