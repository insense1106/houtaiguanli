<template>
  <div class="root">
    <div class="wrapper-login">
      <div class="content">
        <!-- 头像区域 -->
        <div class="avatar-box">
          <img src="../../assets/img/model.jpg" alt="#" />
        </div>
        <!-- 表单区域 -->
        <form action="post" class="form">
          <div><span>user</span> <input class="user" type="text" /></div>
          <div>
            <span>password</span>
            <input class="pwd" type="text" />
          </div>
          <div class="button-box">
            <button type="button">name</button>
            <button type="button">semon</button>
          </div>
        </form>
        <div class="form-box"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  components: {},
  props: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {}
};
</script>

<style lang="stylus" scoped>
.root
  height 100%
  background-color #2b3b4b
  .content
    width 400px
    height 300px
    background-color #fff
    position absolute
    top 50%
    left 50%
    transform translate(-50%, -50%)
    .avatar-box
      height 130px
      width 130px
      border 1px solid #eee
      padding 10px
      box-shadow 0 0 10px
      position relative
      left 50%
      transform translate(-50%,-50%)
      background-color #fff

      img
        width 100%
        height 100%
        border-radius 50%
        background-color #eee

    .form
      border 1px solid
      background-color #2f5f4f
      height 100px
      padding-top 40px
      .user
        margin-left 35px
      .button-box
        margin-left 73px
</style>
