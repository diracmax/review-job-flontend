<template>
    <div class="title">仕事リスト</div>
    <div class="job-list" v-for="r in reviews" v-bind:key="r.id">
        <router-link :to="{name:'JobContent',params:{groupId:this.groupId,reviewId:r.id}}">
          <h1 class="review-info">{{r.name}}</h1>
          <h2 class="category">カテゴリー: {{r.category_name}}</h2>
        </router-link>
    </div>
</template>

<script>
import client from "../../api_client";
export default {
  name: 'UserJobList',
  props: ["groupId"],
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
</style>