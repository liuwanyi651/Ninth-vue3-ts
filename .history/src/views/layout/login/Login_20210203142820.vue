<template>
  <div class="bg">
    <div class="box">
      <el-card shadow="always">
        <el-tabs v-model="activeName" type="card">
          <!--登录-->
          <el-tab-pane label="登录" name="one"
            >登录
            <!--登录表单-->
            <el-form :model="ruleForm" :rules="rules" ref="form" label-width="100px" class="demo-ruleForm">
              <el-form-item label="用户名" prop="username">
                <el-input v-model="ruleForm.username"></el-input>
              </el-form-item>
              <el-form-item label="密码" prop="password">
                <el-input v-model="ruleForm.password"></el-input>
              </el-form-item>
              <el-form-item >
                   <el-button type="primary" @click="login">登录</el-button>
              </el-form-item>
            </el-form>
          </el-tab-pane>
          <!--注册-->
          <el-tab-pane label="注册" name="two">注册 </el-tab-pane>
        </el-tabs>
      </el-card>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
// import api from '@/http/api'
import {Rules} from '../../../types/index'

import {ElMessage} from "element-plus";
// 定义表单数据接口 登录时的输入框数值类型
export interface Model{
  username:string,
  password:string
}
// 定义登录表单验证规则的数据类型接口
export interface Rule{
  username:Rules[],
  password:Rules[]
}
export default defineComponent({
  name: "",
  props: {},
  components: {},
  // 逻辑
  setup() {
    // 定义标签页登录默认第一个的类型 
    const activeName =ref<string>("one")
    // 定义表单ref实例的数据类型
    const form = ref<any>(null)
    // 定义登录的表单数据类型
    const ruleForm = ref<Model>({
      username: '',
      password: ''
    })
    // 定义登录验证规则的数据
    const rules = ref<Rule>({
      username:[
        {
          required: true,
          message: '用户名不能为空',
           trigger: 'blur',
        }
      ],
      password:[
        {
          required: true,
          message: '密码不能为空',
           trigger: 'blur',
        }
      ]
    })
    const login =  (): void =>{
      form.value.validate((valid)=>{
        
      })
    }
    return {
      activeName: "one", //标签页默认选项
      ruleForm,//登录表单
      rules,//登录验证规则
      login,//登录按钮
      form,// 拿到登录表单的实例
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
