<template>
    <div>バイト内容</div>
    <div>{{review.name}}</div>
    <div>{{review.note}}</div>
</template>

<script>
import client from "../../api_client";
export default {
  name: 'JobContent',
  props: ["groupId", "reviewId"],
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
</style>