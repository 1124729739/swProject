<template>
  <div>
    <!-- 头部 -->
    <mt-header class="b-w" title="登录">
      <mt-button class="b-r" b-r slot="left" icon="back"></mt-button>
    </mt-header>
    <!-- 主题 -->
    <div class="content">
      <div>
        <mt-navbar v-model="selected">
          <mt-tab-item id="1">快速登录</mt-tab-item>
          <mt-tab-item id="2">免费注册</mt-tab-item>
        </mt-navbar>
      </div>
      <!-- 用户文本框 -->
      <div class="inpt">
        <mt-field
          placeholder="账号"
          v-model="username"
          :state="usernameState"
          @blur.native.capture="checkusername"
        ></mt-field>
      </div>
      <!-- 密码文本框 -->
      <div class="inpt">
        <mt-field
          placeholder="密码"
          v-model="upwd"
          :state="upwdState"
          @blur.native.capture="checkupwd"
        ></mt-field>
      </div>
      <!-- 忘记密码 -->
      <div class="forget">
        <div>忘记密码</div>
      </div>
      <!-- 登录按钮 -->
      <mt-button type="danger" size="large" @click="checkForm">
        快速登录
      </mt-button>
    </div>
  </div>
</template>
<style scoped>
.b-w {
  background-color: red;
}
.content {
  margin: 8px 20px 0px 20px;
}
.mint-navbar .mint-tab-item.is-selected {
  border-bottom: 3px solid red;
  color: red;
  margin-bottom: -3px;
}
.inpt {
  margin-top: 23px;
  width: 100%;
}
.forget {
  width: 100%;
  height: 40px;
  text-align: right;
  position: relative;
}
.forget div {
  position: absolute;
  right: 10px;
  bottom: 0;
  color: #222;
  font-family: '微软雅黑';
}
.mint-button--danger {
  background-color: red;
  margin-top: 20px;
}
</style>
<script>
export default {
  data() {
    return {
      selected: '1', //登录-注册切换
      username: '', //用户文本变量
      usernameState: '', //用户验证
      upwd: '', //密码文本变量
      upwdState: '', //密码验证
    }
  },
  methods: {
    checkusername() {
      // 验证用户名
      let username = this.username
      let reg = /^\w{6,12}$/
      if (reg.test(username)) {
        this.usernameState = 'success'
        return true
      } else {
        this.usernameState = 'error'
        return false
      }
    },
    checkupwd() {
      // 验证密码
      let upwd = this.upwd
      let reg = /^\w{6,12}$/
      if (reg.test(upwd)) {
        this.upwdState = 'success'
        return true
      } else {
        this.upwdState = 'error'
        return false
      }
    },
    checkForm() {
      //登录提交
      if (this.checkusername() && this.checkupwd()) {
        this.axios
          .get(`/sw/login?uname=${this.username}&upwd=${this.upwd}`)
          .then((result) => {
            console.log(result.data)
            if (result.data.code == 200) {
              this.$toast({
                message: '登录成功',
                position: 'bottom',
                duration: 3000,
              })
              // 调用mutations更新登录状态
              let user = result.data.result.uname
              this.$store.commit('updateLoginState', user)

              // 把用户信息存入sessionStorage，刷新页面时用
              sessionStorage.setItem('islogin', 1)
              sessionStorage.setItem('user', user)
              this.$router.push('/')
            } else {
              this.$toast({
                message: '用户名或密码错误',
                position: 'middle',
                duration: 3000,
              })
            }
          })
      } else {
        console.log('登录失败')
        this.username = ''
        this.usernameState = ''
        this.upwd = ''
        this.upwdState = ''
      }
    },
  },
  watch: {
    selected(id) {
      if (id == '1') {
        this.$router.push('/login')
      } else if (id == '2') {
        this.$router.push('/register')
      }
    },
  },
}
</script>
