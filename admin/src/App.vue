<template>
    <div id="app" @click="isTimeOut">
      <!-- <el-dialog
        title="提示"
        :visible.sync="dialogVisible"
        width="30%"
        center>
        <span>会话超时是否要重新登录</span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="handleClick('cancel')">不重新登录</el-button>
          <el-button type="primary" @click="handleClick('determine')">去登录页面</el-button>
        </span>
      </el-dialog> -->
      <!-- <cdialog :messages="messages" :show="show"></cdialog> -->
      <router-view />
    </div>
</template>
 
<script>
import { getToken, removeToken, removeUserName } from './utils/auth';
export default {
    name: 'App',
    data () {
      return {
        lastTime: null, // 最后一次点击的时间
        currentTime: null, // 当前点击的时间
        timeOut: 60 * 60 * 1000, // 设置超时时间:60分钟,
        messages: '会话超时是否要重新登录',
        show: false
      }
    },
    created () {
      this.lastTime = new Date().getTime();
    },
    methods: {
      isTimeOut () {
        this.currentTime = new Date().getTime() // 记录这次点击的时间
        if (this.currentTime - this.lastTime > this.timeOut) { // 判断上次最后一次点击的时间和这次点击的时间间隔是否大于30分钟
          if (getToken()) { // 如果是登录状态
            // this.show = true;
            removeUserName();
            removeToken();
            this.$router.push({path:'/login'});
          } else {
            this.lastTime = new Date().getTime()
          }
        } else {
          this.lastTime = new Date().getTime()// 如果在30分钟内点击，则把这次点击的时间记录覆盖掉之前存的最后一次点击的时间
        }
      },
      // handleClick (flag) {
      //   if (flag === 'cancel') {
      //     this.lastTime = new Date().getTime()
      //   } else {
      //     removeUserName();
      //     removeToken();
      //     this.$router.push({path:'/login'});
      //   }
      //   this.show = false;
      // }
    }
};
</script>
