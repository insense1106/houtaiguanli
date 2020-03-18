<template>
  <div class="root">
    <div class="wrapper-login">
      <div class="content">
        <!-- 头像区域 -->
        <div class="avatar-box">
          <img src="../../assets/img/bear.jpg" alt="#" />
        </div>
        <!-- 表单区域 -->

        <el-form
          label-width="0px"
          :rules="formRules"
          :model="form"
          class="form-box"
          ref="formRef"
        >
          <!-- 用户名  -->
          <el-form-item prop="username">
            <el-input
              prefix-icon="icon-user"
              v-model="form.username"
            ></el-input>
          </el-form-item>
          <!-- 密码 -->
          <el-form-item prop="pwd">
            <el-input
              prefix-icon="icon-redo"
              v-model="form.pwd"
              type="password"
            ></el-input>
          </el-form-item>
          <!-- 按钮区域 -->
          <el-form-item class="button-box">
            <el-button type="primary" @click="loginForm('formRef')"
              >登录</el-button
            >
            <el-button type="info" @click="resetForm('formRef')"
              >重置</el-button
            >

            <el-button type="sucess" @click="registerForm('formRef')"
              >注册</el-button
            >
          </el-form-item>
        </el-form>

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
    return {
      form: { username: "semon", pwd: "123123" },
      // 表单验证规则  对象
      formRules: {
        //验证用户名合法性
        username: [
          { required: true, message: "请输入", trigger: "blur" },
          {
            min: 3,
            max: 10,
            message: "长度6-10",
            trigger: "blur"
          }
        ],
        //验证密码合法性
        pwd: [
          { required: true, message: "请输入", trigger: "blur" },
          {
            min: 6,
            max: 15,
            message: "长度为6-15位",
            trigger: "blur"
          }
        ]
      }
    };
  },

  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    // 事件层 注册
    registerForm(nameRef) {
      this.$refs[nameRef].validate(async valid => {
        // vaild   登录账户 信息是否符号 书写去要求
        if (!valid)
          return this.$message.error("账户 或者 密码 存在不规范的地方, 请检查");
        await this.$http({
          method: "post",
          url: "/user/reg",
          data: { us: this.form.username, ps: this.form.pwd }
        })
          .then(res => {
            console.log(res.data);
          })
          .catch(err => {
            console.log(err);
          });
      });
    },
    // 事件层 重置表单 输入框
    resetForm(nameRef) {
      this.$refs[nameRef].resetFields();
    },
    // 事件层 点击 登录
    loginForm(nameRef) {
      // valid为服务器返回的数据
      this.$refs[nameRef].validate(valid => {
        // vaild   登录账户 信息是否符号 书写去要求
        if (!valid)
          return this.$message.error("账户 或者 密码 存在不规范的地方, 请检查");
        //如果valid为true , 用户输入 规范, 发送网络请求
        this.postRequest().then(res => {
          console.log(res.data);
          console.log(res);
          if (res.data.err != 0) return this.$message.error(res.data.msg);

          this.$message.success(res.data.msg);
        });
      });
      // 根据服务器的状态码 判断 账号是否存在
      // if (res.meta.status !== 200) return this.$message.error("login fail");
      // this.$message.success("login success");
      // // 设置令牌的保存 位置
      // window.sessionStorage.setItem("token", res.data.token);
      // this.$router.push({ name: "home" });
    },
    //网络层
    getRequest() {
      this.$http({
        method: "get",
        url: "/user/login",
        params: {
          us: this.form.username,
          ps: this.form.pwd
        }
      }).then(res => {
        console.log(res);
        console.log("server");
      });
    },
    //网络层
    postRequest() {
      return this.$http({
        method: "post",
        url: "/user/login",
        data: {
          us: this.form.username,
          ps: this.form.pwd
        }
      });
    }
  }
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
.form-box
   position absolute
   bottom 0
   width 100%
   padding 0 20px
   box-sizing border-box
  .button-box
    display flex
    justify-content flex-end
</style>
