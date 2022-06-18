<template>
    <div>仕事リスト</div>
    <review-overview></review-overview>
</template>

<script>
import ReviewOverview from '../modules/ReviewOverview';
export default {
  components: {
    ReviewOverview
  },
  name: 'UserJobList',
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>