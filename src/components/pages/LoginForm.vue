<template>
  <div>
    <div class="title">ログイン</div>
    <form @submit.prevent="signin" class="form-group">
      <div class="form">
        <input v-model="id" placeholder="ユーザーID" />
      </div>
      <div class="form">
        <input type="password" v-model="password" placeholder="パスワード" />
      </div>
      <div class="form">
        <button :disabled="!isCompleted" type="submit">ログイン</button>
      </div>
      <div v-if="err" style="color: red">
        {{ err }}
      </div>
    </form>
  </div>
</template>

<script>
import client from "../../api_client";

export default {
  name: "LoginForm",
  data() {
    return {
      id: "",
      password: "",
      err: "",
    };
  },
  computed: {
    isCompleted: function () {
      return this.id && this.password;
    },
  },
  methods: {
    signin: function () {
      const data = {
        id: this.id,
        password: this.password,
      };
      client
        .post("/api/signin", data)
        .then((res) => {
          if (res.status == 200) {
            this.$router.push("/groups");
          }
        })
        .catch((err) => {
          console.log(err);
          this.err = "IDかパスワードが間違っています。";
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title {
  text-align: center;
  font-size: 32px;
  margin-top: 50px;
}
.form-group {
  text-align: center;
}
.form-group > .form {
  padding: 10px;
}
</style>