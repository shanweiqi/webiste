<template>
<!-- 聚光加载 -->
  <div class="container">
    <div class="loader">
      <span></span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  background: transparent;
  align-items: center;
}
.container .loader {
  position: relative;
//   
  width: 100px;
//   
  height: 100px;
  border-radius: 50%;
  background-color: #0d2323;
  animation: loading 1.5s linear infinite;
}
@keyframes loading{
    0%{
        transform: rotate(0deg);
    }
    100%{
        transform: rotate(360deg);
    }
}
.container .loader::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  background: linear-gradient(to top, transparent, rgba(0, 255, 249, 0.4));
//   
  background-size: 50px 90px;
  background-repeat: no-repeat;
  border-top-left-radius: 100px;
  border-bottom-left-radius: 100px;
}
.container .loader::after {
  content: "";
  position: absolute;
//   
  top: -5%;
  left: 50%;
  transform: translateX(-50%);
  width: 20px;
  height: 20px;
  background: #00fff9;
  border-radius: 50%;
  z-index: 10;
  box-shadow: 0 0 10px #00fff9, 0 0 20px #00fff9, 0 0 30px #00fff9,
    0 0 40px #00fff9, 0 0 50px #00fff9, 0 0 60px #00fff9, 0 0 70px #00fff9,
    0 0 80px #00fff9, 0 0 90px #00fff9, 0 0 100px #00fff9;
}
.container .loader span {
  position: absolute;
//   
  top: 10px;
//   
  left: 10px;
//   
  right: 10px;
//   
  bottom: 10px;
  background: #102626;
  border-radius: 50%;
}
</style>