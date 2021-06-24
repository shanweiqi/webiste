<template>
    <div>
        <a href="#" id="bt">Button</a>
    </div>
</template>

<script>
export default {
    name:'RippleButton',
    methods:{
        init(){
            console.log(document)
            const button = document.getElementById("bt");
            button.addEventListener('click',e => {
                let x = e.clientX - e.target.offsetLeft;
                let y = e.clientY - e.target.offsetTop;

                let ripple = document.createElement('span');
                ripple.style.left = x + 'px';
                ripple.style.top = y + 'px';
                ripple.className = 'rippleSpan';
                button.appendChild(ripple);
            })
        }
    },
    mounted:function(){
        this.init();
    }
}
</script>

<style lang="scss" scoped>
a{
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
    background: linear-gradient(90deg,#755bea,#ff72c0);
}
.rippleSpan{
    position: absolute;
    background: #fff;
    transform: translate(-50%,-50%);
    pointer-events: none;
    border-radius: 50%;
    animation: ripple 1s linear infinite;
}
@keyframes ripple{
    0%{
        width: 0px;
        height: 0px;
    }
    100%{
        width: 50px;
        height: 50px;
    }
}
</style>