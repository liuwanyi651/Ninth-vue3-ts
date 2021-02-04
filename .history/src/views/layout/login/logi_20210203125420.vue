<template>
  <div class="loginheader w-1 h-1 d-f j-c-c al-it">
    <div class="w-500 b-c-w">
      <el-card shadow="always">
        <el-tabs v-model="activeName" type="card">
          <!--登录-->
          <el-tab-pane label="登录" name="first">
            <el-form :model="ruleForm" :rules="rules" ref="form">
              <el-form-item prop="username">
                <el-input
                  v-model="ruleForm.username"
                  placeholder="请输入用户名"
                ></el-input>
              </el-form-item>
              <el-form-item prop="password">
                <el-input
                  v-model="ruleForm.password"
                  placeholder="请输入密码"
                ></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" class="w-1" @click="login"
                  >登录</el-button
                >
              </el-form-item>
            </el-form>
          </el-tab-pane>

          <!--注册-->
          <el-tab-pane label="注册" name="second">
            <el-form :model="ruleForm1" :rules="rules1" ref="form1">
              <el-form-item prop="username1">
                <el-input
                  v-model="ruleForm1.username1"
                  placeholder="用户名手机"
                ></el-input>
              </el-form-item>
              <el-form-item prop="captcha">
                <el-input v-model="ruleForm1.captcha" placeholder="验证码">
                  <template #append>
                    <el-button>发送验证码</el-button>
                  </template>
                </el-input>
              </el-form-item>
              <el-form-item prop="nickname">
                <el-input
                  v-model="ruleForm1.nickname"
                  placeholder="昵称"
                ></el-input>
              </el-form-item>
              <el-form-item prop="password1">
                <el-input
                  v-model="ruleForm1.password1"
                  placeholder="密码"
                ></el-input>
              </el-form-item>
              <el-form-item prop="password2">
                <el-input
                  v-model="ruleForm1.password2"
                  placeholder="确认密码"
                ></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" class="w-1" @click="register"
                  >注册</el-button
                >
              </el-form-item>
            </el-form>
          </el-tab-pane>
        </el-tabs>
      </el-card>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { Rules } from "../../types/index";
import api from "@/http/api";
import { ElMessage } from "element-plus";
//路由需要引入两个hooks函数方法
import { useRouter } from "vue-router";

//登录时的输入框数值类型
export interface Model {
  username: string;
  password: string;
}

//注册时的输入框数值类型
export interface Model1 {
  username1: string;
  captcha: string;
  nickname: string;
  password1: string;
  password2: string;
}

//定义的验证方式
export interface Rule {
  username: Rules[];
  password: Rules[];
}

//注册定义的验证方式
export interface Rule1 {
  username1: Rules[];
  captcha: Rules[];
  nickname: Rules[];
  password1: Rules[];
  password2: Rules[];
}

//对应路由的名字及标识
export default defineComponent({
  name: "login",
  components: {},

  //所有的逻辑
  setup() {
    //头登录与注册的切换（首次进入时登录）
    let activeName = ref<string>("first");

    //登录的表单数据类型
    let ruleForm = ref<Model>({
      username: "",
      password: "",
    });

    //登录表单的内容
    let form = ref<any>(null);

    //登录验证规则的调用
    let rules = ref<Rule>({
      username: [
        {
          required: true,
          message: "请输入用户名",
          triggger: "blue",
        },
      ],
      password: [
        {
          required: true,
          message: "请输入密码",
          triggger: "blue",
        },
      ],
    });

    let router = useRouter() 
    //点击登录
    let login = (): void => {
      form.value.validate((valid: boolean) => {
        if (valid) {
          api.login({username: ruleForm.value.username,password: ruleForm.value.password,})
            .then((res: any) => {
              ElMessage.success("登录成功");
              //请求成功的时候存用户，路由跳转 提示用户
              localStorage.setItem("token", JSON.stringify(res.token))
              router.push('/')
            })
        } else {
          ElMessage.error("登录失败");
        }
      });
    };

    //注册的表单数据类型
    let ruleForm1 = ref<Model1>({
      username1: "",
      captcha: "",
      nickname: "",
      password1: "",
      password2: "",
    });

    //注册表单的内容
    let form1 = ref<any>(null);

    //注册验证规则的调用
    let rules1 = ref<Rule1>({
      username1: [
        {
          required: true,
          message: "请输入用户名",
          triggger: "blue",
        },
      ],
      captcha: [
        {
          required: true,
          message: "请输入验证码",
          triggger: "blue",
        },
      ],
      nickname: [
        {
          required: true,
          message: "请输入昵称",
          triggger: "blue",
        },
      ],
      password1: [
        {
          required: true,
          message: "请输入密码",
          triggger: "blue",
        },
      ],
      password2: [
        {
          required: true,
          message: "请确认密码",
          triggger: "blue",
        },
      ],
    });

    let register = (): void => {
      console.log("注册");
    };

    //所有定义的数据和方法需要return(必须导出数据)
    return {
      activeName,
      //登录的返回
      ruleForm,
      rules,
      form,
      login,
      //注册的返回
      ruleForm1,
      rules1,
      form1,
      register,
    };
  },
});
</script>

<style scoped lang="scss">
.loginheader {
  background-image: url(http://157.122.54.189:9095/assets/images/th03.jfif);
}
</style>
