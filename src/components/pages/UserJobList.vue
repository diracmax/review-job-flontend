<template>
    <my-header></my-header>
    <div class="title">仕事リスト</div>
    <div class="job-content">
    <li class="job-list" v-for="r in reviews" v-bind:key="r.id">
        <router-link class="routerLink" :to="{name:'JobContent',params:{groupId:this.groupId,reviewId:r.id}}">
          
          <div class="container">
            <div class="review-info">{{r.name}}</div>
            <div class="category">カテゴリー: {{r.category_name}}</div>
          </div>

        </router-link>
    </li>
    </div>

    <div class="item">
      <router-link class="btn btn-primary" role="button" :to="{name:'Members',params:{groupId:this.groupId}}">戻る</router-link>
    </div>

</template>

<script>
import client from "../../api_client";
import MyHeader from '../modules/MyHeader.vue'
export default {
  name: 'UserJobList',
  props: ["groupId"],
  components: {
    MyHeader
  },
  data() {
        return{
          reviews: null
        }
    },
  mounted: function () {
    client.get(`/api/groups/${this.groupId}/reviews`)
            .then(response => this.reviews=response.data.reviews)
            .catch(error => console.log(error))
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.title{
  text-align: center;
  font-size: 48px;
}

li{
  list-style: none;
}

.job-list{
  padding: 0.5em 1em;
    margin: 2em 0;
    font-weight: bold;
    color: black;/*文字色*/
    background: #FFF;
    border: solid 3px black;/*線*/
    border-radius: 10px;/*角の丸み*/
}

.routerLink{
  text-decoration: none;
}


.container{
  display: flex;
  justify-content: space-between;
}

.review-info{
  font-size: 32px;
  color: black;
  margin: 0; 
  padding: 0;
}

.category{
  font-size: 16px;
  color: black;
  margin: 0; 
  padding: 0;
}

.item {
  margin: 1em 5em;
  text-align: right;
}
.job-content {
  margin-left: 2rem;
  margin-right: 2rem;
}
</style>