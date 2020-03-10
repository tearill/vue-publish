<template>
  <div id="app" class="container">
    <!-- <Search /> -->
    <!-- <hr> -->
    <!-- 表单 -->
    <!-- <div class="info-fo"> -->
      <!-- iview 提供的 Form 组件 -->
      <!-- <Form ref="formValidate" :model="formValidate" :rules="ruleValidate">
        <FormItem label="手机号" prop="phone">
          <i-input placeholder="请输入手机号" size="large" v-model="formValidate.phone"></i-input>
        </FormItem>
        <FormItem label="验证码" prop="checkNum">
          <i-input placeholder="请输入验证码" size="large" v-model="formValidate.checkNum">
            <Button slot="append" @click="getcheckNum">获取验证码</Button>
          </i-input>
        </FormItem>
      </Form>
      <Button type="error" size="large" long @click="handleSubmit('formValidate')">验证手机号</Button>
    </div> -->
    <x-button type="primary">button</x-button>
    <router-view/>
  </div>
</template>

<script>
// import Search from './components/Search'
export default {
  data() {
    return {
      formValidate: {
        phone: '',
        checkNum: ''
      },
      // 表单验证规则
      ruleValidate: {
        phone: [
          { required: true, message: '手机号不能为空', trigger: 'blur' },
          { type: 'string', pattern: /^1[3|5|7|8|9][0-9]{9}$/, message: '手机号格式出错', trigger: 'blur' }
        ],
        checkNum: [
          { required: true, message: '验证码不能为空', trigger: 'blur' },
          { type: 'string', min: 4, max: 4, message: '验证码长度错误', trigger: 'blur' }
        ]
      }
    }
  },
  components: {
    // Search
  },
  methods: {
    handleSubmit() {
      // 验证表单
      // console.log(this.formValidate);
      this.$refs.formValidate.validate((valid) => {
        // console.log(valid);
        if (valid) {
          this.$Message.success({
            content: '成功激活手机号',
            duration: 6,
            closable: true
          })
        } else {
          this.$Message.error({
            content: '表单有问题',
            duration: 6,
            closable: true
          })
        }
      });
    },
    getcheckNum() {
      if (this.formValidate.phone.length === 11) {
        this.$Message.success({ // 消息提示组件 $Message
          content: '验证码为：1234',
          duration: 6,
          closable: true
        })
      } else {
        this.$Message.error({
          content: '请输入正确的手机号',
          duration: 6,
          closable: true
        })
      }
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
#app {
  padding: 0 15px;
}
</style>
