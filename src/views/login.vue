<template>
  <div class="login">
    <div class="login-box">
      <h2>登录</h2>
      <div class="content-box">
        <div class="form-box">
          <el-form :model="loginForm" :rules="rules" ref="loginForm">
            <el-form-item prop="name">
              <el-input
                v-model="loginForm.name"
                prefix-icon="iconfont dzjy-user"
                placeholder="请输入用户名"
              ></el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input
                type="password"
                v-model="loginForm.password"
                prefix-icon="iconfont dzjy-password"
                placeholder="请输入密码"
              ></el-input>
            </el-form-item>
            <el-form-item>
              <a class="login-btn" @click="submitForm('loginForm')">登录</a>
            </el-form-item>
          </el-form>

          <p class="tips">如忘记密码, 请联系管理员</p>
          <button @click="test()">firstapi</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.login {
  min-height: 100%;
  background-color: lightblue;
  .login-box {
    max-width: 600px;
    width: 90%;
    height: 450px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    color: #5897ff;
    border-radius: 6px;
    text-align: center;
    h2 {
      margin-top: 40px;
      margin-bottom: 45px;
      font-size: 30px;
      font-weight: 400;
      letter-spacing: 5px;
    }
    .form-box {
      height: 300px;
      width: 300px;
      margin: 0 auto;
      /deep/ .el-input {
        .iconfont {
          font-size: 26px;
        }
        .el-input__prefix {
          left: 10px;
        }
        .el-input__inner {
          padding-left: 60px;
        }
        .el-input__icon {
          padding-right: 10px;
          border-right: 1px #c0c4cc solid;
        }
      }
      h4 {
        font-size: 18px;
        color: #646464;
        text-align: left;
        margin-bottom: 18px;
      }
      .tips {
        font-size: 12px;
        color: #838383;
      }
      .login-btn {
        display: block;
        height: 40px;
        width: 100%;
        line-height: 40px;
        color: #fff;
        border-radius: 3px;
        background-color: #409eff;
        text-align: center;
        text-decoration: none;
        font-size: 16px;
        letter-spacing: 10px;
        margin: 40px 0 20px;
        cursor:pointer;
      }
      .login-btn:hover {
        background-color: #1862ff;
      }
      .login-btn:active {
        background-color: #409eff;
      }
    }
  }
}
</style>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      loginForm: {
        name: "",
        password: ""
      },
      rules: {
        name: [{ required: true, message: "请输入用户名", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$message("登录成功");
          // this.$axios.
          // post("/api/user/login",{
          //   username: this.loginForm.username,
          //   password: this.loginForm.password
          // })
          // .then(res => {
          //   if (res.data.status === 200){
          //     sessionStorage.setItem('user',response.data.nickname)
          //     this.$router.push({ name: "order" });
          //   }
          //   else {
          //     this.$message('res.data.msg')
          //   }
          // })
          sessionStorage.setItem('user','abc')
          this.$router.push({ name: 'order' });
          // let redirect = decodeURIComponent(this.$route.query.redirect || '/')
          // console.log(this.$route)
          // this.$router.push({ path: redirect })
        } else {
          return false;
        }
      });
    },
    test(){
      this.$axios.post("/api/user/firstapi").then(res => console.log(res))
    }
  }
};
</script>