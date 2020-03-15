<template>
  <div class="root">
    <div class="wrapper-login">
      <div class="content">
        <div class="avatar-box">
          <img src="" alt="" />
        </div>
        login
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
</style>
