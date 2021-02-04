<template>
  <div class="bg">
    <div class="box">
      <el-card shadow="always">
        <el-tabs v-model="activeName" type="card">
          <!--登录-->
          <el-tab-pane label="登录" name="one"
            >登录
            <!--登录表单-->
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
              <el-form-item label="用户名" prop="username">
                <el-input v-model="ruleForm.username"></el-input>
              </el-form-item>
              <el-form-item label="密码" prop="password">
                <el-input v-model="ruleForm.password"></el-input>
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

// 定义表单数据接口 登录时的输入框数值类型
export interface Model{
  username:string,
  password:string
}
export default defineComponent({
  name: "",
  props: {},
  components: {},
  // 逻辑
  setup() {
    // 标签页登录 
    const activeName =ref<string>("one")
    // 表单 登录
    const model = ref<Model>({
      username:'',
      password:''
    })
    return {
      activeName: "one", //标签页默认选项
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
