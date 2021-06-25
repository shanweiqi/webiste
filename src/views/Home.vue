<template>
  <div>
    <!-- <LightLoading></LightLoading> -->
    <!-- <RippleButton></RippleButton> -->
    <SplittedText></SplittedText>
  </div>
</template>

<script>
import LightLoading from "../components/animationComponents/LightLoading.vue";
import RippleButton from "../components/animationComponents/RippleButton.vue";
import SplittedText from "../components/animationComponents/SplittedText.vue";

export default {
  name: "Home",
  components: {
    LightLoading,
    RippleButton,
    SplittedText,
  },
};
</script>
