<template>
  <div>
    <!-- 头部 -->
    <mt-header class="b-w" title="注册">
      <router-link to="/" slot="left">
        <mt-button class="b-r" b-r icon="back"></mt-button>
      </router-link>
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
      <!-- 验证密码文本框 -->
      <div class="inpt">
        <mt-field
          placeholder="确认密码"
          v-model="reupwd"
          :state="reupwdState"
          @blur.native.capture="checkreupwd"
        ></mt-field>
      </div>

      <!-- 登录按钮 -->
      <mt-button type="danger" size="large" @click="checkForm">
        免费注册
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
  width: 100%;
  margin-top: 23px;
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
      selected: '2', //登录-注册切换
      username: '', //用户文本变量
      usernameState: '', //用户验证
      upwd: '', //密码文本变量
      upwdState: '', //密码验证
      reupwd: '', //验证密码文本变量
      reupwdState: '', //验证密码文本状态
    }
  },
  methods: {
    // 验证用户名
    checkusername() {
      let username = this.username
      let reg = /^\w{6,12}$/
      if (reg.test(username)) {
        this.axios
          .get(`/sw/register/selectUname?userName=${username}`)
          .then((result) => {
            if (result.data.ok == '1') {
              this.usernameState = 'success'
              return true
            } else {
              this.usernameState = 'error'
              this.$toast({
                message: result.data.msg,
                position: 'middle',
                duration: 2000,
              })
              return false
            }
          })
      } else {
        this.usernameState = 'error'
        this.$toast({
          message: '用户名长度为6~12位',
          position: 'middle',
          duration: 2000,
        })
        return false
      }
    },
    // 验证密码
    checkupwd() {
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
    //确认密码
    checkreupwd() {
      if (this.reupwd == this.upwd) {
        this.reupwdState = 'success'
        return true
      } else {
        this.reupwdState = 'error'
        return false
      }
    },
    //注册提交
    checkForm() {
      if (this.checkreupwd()) {
        if (
          this.usernameState == 'success' &&
          this.upwdState == 'success' &&
          this.reupwdState == 'success'
        ) {
          console.log('注册成功')
          let url = '/sw/register'
          console.log(this.username, this.upwd)
          let param = `uname=${this.username}&upwd=${this.upwd}`
          this.axios.post(url, param).then((result) => {
            if (result.data.code == 200) {
              this.$toast({
                message: '注册成功',
                position: 'middle',
                duration: 2000,
              })
              this.$router.push('/login')
            }
          })
        } else {
          this.$toast({
            message: '用户名或密码错误',
            position: 'middle',
            duration: 2000,
          })
        }
      } else {
        this.$toast({
          message: '两次密码输入不一致',
          position: 'middle',
          duration: 1000,
        })
        this.reupwd = ''
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
