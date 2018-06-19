<template>
  <div class="hello">
    <div>
      <el-button @click="showMsgbox">Start</el-button>
    </div>
  </div>
</template>

<script>
/*************************************************************
 *************************************************************
 *************** element-ui组件单独引入私有组件 ****************
 *************************************************************
 *************************************************************
 */

// import 'element-ui/lib/theme-chalk/index.css' // 这里面装有所有的css，体积最大
import 'element-ui/lib/theme-chalk/button.css' // 按钮css
import 'element-ui/lib/theme-chalk/notification.css' // 提示框css
import 'element-ui/lib/theme-chalk/icon.css'  // 提示框的“X”号在这里面

import { Button } from 'element-ui' // 按钮组件

export default {
  name: 'HelloWorld',
  data () {
    return {
    }
  },
  components: {
    elButton: Button  // el-button是默认的组件名，最好用默认的
  },
  methods: {
    showMsgbox () {
      this.$notify({      // $notify在全局注册了。
        title: '地狱猫',
        type: 'success',
        message: '肮脏的屁眼交易！！!',
        duration: 5000
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
