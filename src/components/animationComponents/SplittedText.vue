<template>
  <!-- 分割文字 -->
  <div>
    <h2>
      Believe
      <span>Believe</span>
      <span>Believe</span>
      <span>in yourself</span>
    </h2>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
h2 {
  position: absolute;
  transform: translate(-50%, -50%);
  font-size: 6em;
  color: transparent;
  text-transform: uppercase;
}

h2 span:nth-child(1) {
  position: absolute;
  top: 0;
  left: 0;
  color: #000;
  transition: 0.5s;
  clip-path: polygon(0 0, 100% 0, 100% 50%, 2% 50%);
  overflow: hidden;
}
h2:hover span:nth-child(1){
    transform: translateY(-18px);
}

h2 span:nth-child(2) {
  position: absolute;
  top: 0;
  left: 0;
  color: #000;
  transition: 0.5s;
  clip-path: polygon(0 50%, 100% 50%, 100% 100%, 0% 100%);
  overflow: hidden;
}
h2:hover span:nth-child(2){
    transform: translateY(18px);
}

h2 span:nth-child(3){
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%) scaleY(0);
    width: 100%;
    color: #000;
    background: #fff;
    font-size: 0.25em;
    letter-spacing: 0.7em;
    text-align: center;
    padding-left: 20px;
    transition: 0.5s;
}
h2:hover span:nth-child(3){
    transform: translate(-50%,-50%) scaleY(1);
}
</style>