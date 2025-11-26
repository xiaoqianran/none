<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100 p-4 
              lg:bg-gradient-to-br lg:from-blue-500 lg:to-indigo-600">
    
    <el-card class="w-full max-w-md p-8 bg-white shadow-2xl rounded-xl transform transition-all hover:shadow-3xl">
      
      <div class="text-center mb-8">
        <h2 class="text-3xl font-extrabold text-gray-900 tracking-wider">
          企业管理系统
        </h2>
        <p class="mt-2 text-sm text-gray-500">
          请输入您的账号和密码进行登录
        </p>
      </div>

      <el-form 
        ref="loginFormRef" 
        :model="loginForm" 
        :rules="loginRules" 
        label-position="top"
        @keyup.enter="handleLogin"
      >
        <el-form-item prop="username" class="mb-5">
          <el-input 
            v-model="loginForm.username" 
            placeholder="请输入用户名" 
            :prefix-icon="User"
            size="large"
          />
        </el-form-item>

        <el-form-item prop="password" class="mb-5">
          <el-input
            v-model="loginForm.password"
            type="password"
            placeholder="请输入密码"
            :prefix-icon="Lock"
            show-password
            size="large"
          />
        </el-form-item>

        <el-form-item prop="captcha" class="mb-6">
          <div class="flex items-center space-x-3">
            <el-input
              v-model="loginForm.captcha"
              placeholder="验证码"
              :prefix-icon="Check"
              size="large"
              class="flex-1"
            />
            <div class="w-28 h-[40px] bg-gray-200 rounded-md flex items-center justify-center 
                        text-sm text-gray-600 cursor-pointer shadow-inner hover:bg-gray-300 transition" 
                 @click="refreshCaptcha">
              <span v-if="!captchaUrl">点击获取</span>
              <img v-else :src="captchaUrl" alt="验证码" class="w-full h-full object-cover rounded-md"/>
            </div>
          </div>
        </el-form-item>

        <el-form-item class="flex justify-between items-center mb-8">
            <el-checkbox v-model="loginForm.rememberMe">
              <span class="text-sm text-gray-600">记住密码</span>
            </el-checkbox>
            <el-link type="primary" :underline="false" class="text-sm">忘记密码?</el-link>
        </el-form-item>
        
        <el-form-item>
          <el-button 
            type="primary" 
            :loading="loading" 
            @click="handleLogin"
            class="w-full h-12 text-lg font-semibold tracking-wider transition duration-300 ease-in-out 
                   hover:bg-blue-600 hover:shadow-lg focus:outline-none"
            size="large"
          >
            {{ loading ? '登录中...' : '登 录' }}
          </el-button>
        </el-form-item>
      </el-form>
      
      <p class="absolute bottom-4 left-0 right-0 text-center text-sm text-gray-700 
                lg:text-white lg:opacity-70">
        &copy; {{ new Date().getFullYear() }} [您的公司名称]. All rights reserved.
      </p>

    </el-card>
  </div>
</template>

<script setup>
// *** 脚本部分与前一版本保持一致，因为它专注于逻辑和数据处理 ***
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
import { ElMessage } from 'element-plus';
import { User, Lock, Check } from '@element-plus/icons-vue'; 

const router = useRouter();
const loginFormRef = ref(null); 
const loading = ref(false);     
const captchaUrl = ref(''); // 验证码图片的URL

const loginForm = reactive({
  username: '',
  password: '',
  captcha: '',
  rememberMe: false,
});

const loginRules = reactive({
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 6, message: '密码不能少于 6 位', trigger: 'blur' },
  ],
  captcha: [
    { required: true, message: '请输入验证码', trigger: 'blur' },
    { len: 4, message: '验证码长度为 4 位', trigger: 'blur' },
  ],
});

const refreshCaptcha = () => {
  // 模拟 API 调用
  // captchaUrl.value = '/api/captcha?time=' + Date.now();
  console.log('刷新验证码...');
};

const handleLogin = () => {
  if (!loginFormRef.value) return;
  
  loginFormRef.value.validate((valid) => {
    if (valid) {
      loading.value = true;
      
      setTimeout(() => {
        loading.value = false;
        
        // 模拟登录成功条件
        if (loginForm.username === 'admin' && loginForm.password === '123456' && loginForm.captcha === '1111') {
          ElMessage.success('登录成功！');
          router.push('/'); 
        } else {
          ElMessage.error('登录失败：用户名、密码或验证码错误。');
        }
      }, 1500); 
    }
  });
};
</script>

<style>
/* 如果需要覆盖 Element Plus 的默认样式，例如调整 el-form-item 的默认 margin，
  或者调整 el-input 的高度，可以把全局覆盖样式放在这里，或者在你的 Tailwind 配置中进行。

  但在这个组件内，我们使用 Tailwind 类名 (如 mb-5) 实现了对 Element Plus 组件的间距控制，
  因此保持 <style> 标签为空是最佳实践。
*/
</style>