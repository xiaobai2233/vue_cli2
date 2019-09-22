<template>
<div class="hello">
  <div class="title">vant</div>

  <span class="qian block" v-if="!isShow" @click="Change()">签到</span>
  <transition
    @enter="Enter"
    @after-enter="afterEnter"
    >
    <span class="qian black"  v-if="isShow" @click="Change1($event)">已签到</span>  
  </transition>

 

  <van-loading />
  <van-button type="primary">默认按钮</van-button>
  <van-loading type="spinner" />
  <van-uploader v-model="fileList" multiple />

</div>
</template>
<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      isShow:false,
      timer:null,
       fileList: [
        { url: 'https://img.yzcdn.cn/vant/cat.jpeg' },
        // Uploader 根据文件后缀来判断是否为图片文件
      ]
    }
  },
  methods:{
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file);
    },
    Change(){
      this.isShow=true;
    },
    Change1(e){
      e.target.style.right=0;
      clearTimeout(this.timer);
      this.timer=setTimeout(()=>{
          e.target.style.right="-50px";
      },4000)
    },
    Enter(el){
      el.style.right=0;
    },
    afterEnter(el){
      el.style.right="-50px";
    }
  }
}
</script>
<style lang="scss">
.hello{
  position: relative;
  .qian{
    display: block;
    position: absolute;
    right:0;
    top:120px;
    height: 80px;
    width: 150px;
    text-align: center;
    line-height: 80px;
    border-top-left-radius: 40px;
    border-bottom-left-radius: 40px;
    font-size: 28px;
  }
  .block{
    color:#fff;
    background:linear-gradient(to right,rgb(79, 139, 167),rgb(102, 75, 197));
  }
  .black{
    color:rgb(79, 139, 167);
    transition:all 1.5s ease;
    border:1px solid rgb(79, 139, 167);
  }
}
.title{
  height:100px;
  background:linear-gradient(to right,#8081c5,#3e46b3,#444fe9);
  box-shadow: 0 0 10px 2Px rgba(0, 0, 0, .2);
  text-align: center;
  line-height: 100px;
  font-size: 32px;
  color:#fff;
}
  
</style>
