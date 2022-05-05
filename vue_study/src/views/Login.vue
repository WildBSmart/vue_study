<template>
  <div>
    <div class="login_box">
      <div class="title">自动化平台登录</div>
      <el-card class="box-card">
        <el-form :model="formLogin">
          <el-form-item>
            <el-input
              prefix-icon="el-icon-user-solid"
              placeholder="请输入账号"
              v-model="formLogin.username"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-input
              prefix-icon="el-icon-lock"
              placeholder="请输入密码"
              v-model="formLogin.password"
              type="password"
            ></el-input>
          </el-form-item>
          <el-form-item label="记住账号">
            <el-switch v-model="status"></el-switch>
          </el-form-item>
          <el-form-item style="text-align: center">
            <el-button type="primary" @click="login">点击登录</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </div>
  </div>
</template>
  
<script>
export default {
  data() {
    return {
      formLogin: {
        username: "",
        password: "",
        
      },
      status: true,
    };
  },
  methods: {
    async login() {
      const response = await this.$api.loginApi(this.formLogin)
      // 登录的方法
      console.log(response)
      if (response.status===200){
        // 登录成功的处理
        //提取token保存
        const token = response.data.token
        window.sessionStorage.setItem('token',token)
        // 提示登录成功
        this.$message({
          showClose: true,
          message: '登录成功',
          type: 'success',
          center: true,
          duration:1000})
        this.$router.push('/')
        
      }else{
        //登录失败的处理
        this.$message({
          showClose: true,
          message: '请输入正确的账号和密码',
          type: 'error',
          center: true,
          duration:1000
        })

      }
    },
  },
};
</script>
<style>
.login_box {
  width: 600px;
  height: 400px;
  position: absolute;
  top: 30%;
  left: 30%;
}
.title {
  color: deepskyblue;
  font: bold 28px/80px "microsoft yahei";
  text-align: center;
}
</style>
