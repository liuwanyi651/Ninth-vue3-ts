<template>
  <div class="bg">
    <div class="box">
      <el-card shadow="always">
        <el-tabs v-model="activeName" type="card">
          <!--登录-->
          <el-tab-pane label="登录" name="one">
            <!--登录表单-->
            <el-form :model="ruleForm" :rules="rules" ref="form" class="demo-ruleForm">
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
                  type="password"
                ></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="login" class="w-max">登录</el-button>
              </el-form-item>
            </el-form>
          </el-tab-pane>
          <!--注册-->
          <el-tab-pane label="注册" name="two">
            <!--注册表单-->
            <el-form :model="ruleForm1" :rules="rules1" ref="form1" class="demo-ruleForm">
              <el-form-item prop="username1">
                <el-input v-model="ruleForm1.username1" placeholder="用户名手机"></el-input>
              </el-form-item>
              <!--验证码-->
              <el-form-item prop="captcha">
                <div>
                  <div>
                    <el-input v-model="ruleForm1.captcha" placeholder="验证码"></el-input>
                  </div>
                  <div>
                    <div style="width: 220px" v-html="yzm" @click="clickYzm"></div>
                  </div>
                </div>
              </el-form-item>
              <!--昵称-->
              <el-form-item prop="nickname">
                <el-input v-model="ruleForm1.nickname" placeholder="昵称"></el-input>
              </el-form-item>
              <!--密码-->
              <el-form-item prop="pass">
                <el-input v-model="ruleForm1.pass"  placeholder="密码" type="password"
                ></el-input>
              </el-form-item>
              <!--确认密码-->
              <el-form-item prop="checkPass">
                <el-input
                  v-model="ruleForm1.checkPass"
                  placeholder="确认密码"
                  type="password"
                ></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="register" class="w-max">注册</el-button>
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
import api from "@/http/api";
import { Rules } from "../../../types/index";
import { useRouter } from "vue-router";

import { ElMessage } from "element-plus";
// 定义登录表单数据接口 登录时的输入框数值类型
export interface Model {
  username: string;
  password: string;
}
// 定义登录表单验证规则的数据类型接口
export interface Rule {
  username: Rules[];
  password: Rules[];
  
}

// 定义注册表单数据接口 登录时的输入框数值类型
export interface Model1 {
  username1: string;
  captcha: string;
  nickname: string;
  pass: string;
  checkPass: string;

}
// 定义注册表单验证规则的数据类型接口
export interface Rule1 {
  username1: Rules[];
  captcha: Rules[];
  nickname: Rules[];
  pass: Rules[];
  checkPass: Rules[];
}
export default defineComponent({
  name: "",
  props: {},
  components: {},
  // 逻辑
  setup() {
    // 定义标签页登录默认第一个的类型
    const activeName = ref<string>("one");
    // 登录
    // 定义登录表单ref实例的数据类型
    const form = ref<any>(null);
    // 定义登录的表单数据类型
    const ruleForm = ref<Model>({
      username: "",
      password: "",
    });
    // 定义登录验证规则的数据
    const rules = ref<Rule>({
      username: [
        {
          required: true,
          message: "用户名不能为空",
          trigger: "blur",
        },
      ],
      password: [
        {
          required: true,
          message: "密码不能为空",
          trigger: "blur",
        },
      ],
    });
    //  注册
    // 定义表单ref实例的数据类型
    const form1 = ref<any>(null);
    // 定义注册的表单数据类型
    const ruleForm1 = ref<Model1>({
      username1: "",
      captcha: "",
      nickname: "",
      pass: "",
      checkPass: "",

    });
    // 定义注册验证规则的数据
    const rules1 = ref<Rule1>({
      username1: [
        {
          required: true,
          message: "用户名不能为空",
          trigger: "blur",
        },
      ],
      captcha: [
        {
          required: true,
          message: "验证码不能为空",
          trigger: "blur",
        },
      ],
      nickname: [
        {
          required: true,
          message: "昵称不能为空",
          trigger: "blur",
        },
      ],
      pass: [
        {
          required: true,
          message: "密码不能为空",
          trigger: "blur",
        },
      ],
      checkPass: [
        {
          required: true,
          message: "确认密码不能为空",
          trigger: "blur",
        },
      ],
    });

    const router = useRouter();
    // 登录 表单验证及请求
    const login = (): void => {
      form.value.validate((valid: boolean) => {
        if (valid) {
          api
            .login({
              username: ruleForm.value.username,
              password: ruleForm.value.password,
            })
            .then((res: any) => {
              ElMessage.success("登录成功");
              //请求成功的时候存用户，路由跳转 提示用户
              localStorage.setItem("token", JSON.stringify(res.token));
              router.push("/");
            });
          ElMessage.success("登录成功");
        } else {
          ElMessage.error("表单输入有误");
        }
      });
    };

    const register = ():void =>{
      form1.value.validate((valid: boolean)=>{
        if(valid){
            api.register({
              username: ruleForm1.value.username1,
              password: ruleForm1.value.pass,
              nickname:
              captcha,
            })
        }else{
          ElMessage.error("表单输入有误");
        }
      })
    }

    return {
      activeName: "one", //标签页默认选项
      ruleForm, //登录表单
      rules, //登录验证规则
      login, //登录按钮
      form, // 拿到登录ref表单的实例
      ruleForm1, //注册表单
      rules1, //注册验证规则
      // register, //注册按钮
      form1, // 拿到注册ref表单的实例
    };
  },
});
</script>
<style scoped lang="scss">
.bg {
  width: 100%;
  height: 700px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(http://157.122.54.189:9095/assets/images/th03.jfif);
}
.box {
  width: 400px;
  height: 300px;
  background: white;
  border: 1px solid #ccc;
}
</style>
