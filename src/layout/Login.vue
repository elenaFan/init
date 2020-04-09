<template>
  <div class="login">
    <div class="form-box">
      <h2>用户登录</h2>
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
        label-position="top"
      >
        <el-form-item label="用户名" prop="username">
          <el-input type="text" v-model="ruleForm.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button class="my-btn" type="primary" @click="submitForm('ruleForm')">提交</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
// 导入 抽取的login方法
import { login } from "../api/projectA.js";
export default {
  data() {
    return {
      // 表单绑定的数据
      ruleForm: {
        // 用户名
        username: "",
        // 密码
        password: ""
      },
      rules: {
        // 验证规则
        username: [
          { required: true, message: "用户名不能为空", trigger: "blur" },
          { min: 4, max: 12, message: "长度在 4 到 12 个字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "密码不能为空", trigger: "blur" },
          {
            min: 6,
            max: 12,
            message: "长度在 6 到 12 个字符",
            trigger: "change"
          }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      // 获取设置ref的元素 this.$refs.xxx
      // console.log(this.$refs)
      // 调用了 饿了么ui的form组件的 验证方法 饿了么提供的
      // 回调函数中， valid有值说明成功了，没有值失败了
      this.$refs[formName].validate(valid => {
        if (valid) {
          // 表单验证对
          localStorage.setItem('token','meme')
          this.$router.push('/index')
          // axios 提交数据
        //   login(this.ruleForm).then(backData => {
        //     console.log(backData);
        //     if(backData.data.meta.status==200){
        //       // 登录成功
        //       this.$message.success(backData.data.meta.msg)
        //       // 保存token
        //       window.localStorage.setItem('token',backData.data.data.token)
        //       // 去首页
        //       this.$router.push('/index')

        //     }
        //     else if(backData.data.meta.status==400){
        //       // 登录失败
        //       this.$message.error(backData.data.meta.msg)
        //       // 啥都不干
        //     }
        //   });
        } else {
          // 弹框提示
          this.$message.error("哥们，你有东西没有写哦！");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style lang='less' scoped>
.login {
  width: 100%;
  height: 100%;
  background-color: #324152;
  display: flex;
  // 水平方向 对其方式 center居中
  justify-content: center;
  // 垂直方向的对其方式 center 居中
  align-items: center;
  h2 {
    margin-bottom: 20px;
  }
  .form-box {
    width: 580px;
    height: 435px;
    border-radius: 10px;
    background-color: white;
    padding: 60px 40px;
    box-sizing: border-box;
    // 按钮
    .my-btn {
      width: 100%;
    }
  }
}
</style>
