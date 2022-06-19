<template>
    <my-header></my-header>
    <div class="container">
      <div>
        <p>カテゴリー: {{review.category_name}}</p>
        <h1 class="job-title">{{review.name}}</h1>
      </div>
      <div class="job-content">
        <p>内容:</p>
        <p>{{review.note}}</p>
      </div>
      <p>星: {{review.star}}</p>
    </div>
</template>

<script>
import client from "../../api_client";
import MyHeader from '../modules/MyHeader.vue'
export default {
  name: 'JobContent',
  props: ["groupId", "reviewId"],
  components: {
    MyHeader
  },
  data() {
        return{
          review: null
        }
  },
  beforeMount: function () {
    client.get(`/api/groups/${this.groupId}/reviews/${this.reviewId}`)
            .then(response => this.review=response.data)
            .catch(error => console.log(error))
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  width: 65%;
  margin-top: 2rem;
}
.job-content {
  margin-top: 2rem;
}
.job-title {
  border-bottom: 0.05rem solid #d8d8d8;
  padding-block: 0.5rem;
}
p {
  font-size:1.25rem;
}
</style>