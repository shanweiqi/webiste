<template>
  <div>
    <a href="#" id="bt" @click="showPopup"
      >Button
      <span
        v-if="rippleSwitch"
        :style="{ left: rippleLeft, top: rippleTop }"
      ></span>
    </a>
  </div>
</template>

<script>
export default {
  name: "RippleButton",
  data() {
    return {
      rippleSwitch: false,
      rippleTop: 0,
      rippleLeft: 0,
    };
  },
  methods: {
    showPopup(e) {
      // 元素显示
      this.rippleSwitch = true;
      // 获取鼠标在元素内点击位置
      let x = e.offsetX;
      let y = e.offsetY;
      this.rippleLeft = x + "px";
      this.rippleTop = y + "px";
      // 设置定时器并及时清除
      var time = setTimeout(() => {
        // 元素隐藏
        this.rippleSwitch = false;
        clearTimeout(time);
      }, 1000);
    },
  },
};
</script>

<style lang="scss" scoped>
a {
  position: relative;
  display: inline-block;
  padding: 12px 36px;
  margin: 10px 0;
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 18px;
  letter-spacing: 2px;
  border-radius: 40px;
  overflow: hidden;
  background: linear-gradient(90deg, #755bea, #ff72c0);
}
span {
  position: absolute;
  background: #fff;
  transform: translate(-50%, -50%);
  pointer-events: none;
  border-radius: 50%;
  animation: ripple 1s linear infinite;
}
@keyframes ripple {
  0% {
    width: 0px;
    height: 0px;
    opacity: 0.5;
  }
  100% {
    width: 500px;
    height: 500px;
    opacity: 0;
  }
}
</style>