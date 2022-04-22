<template>
    <div class="spin">加载中..</div>
</template>

<script>
</script>

<style>
.spin{
    display: block;
    background-color: aquamarine;
    width: 40px;
    height: 40px;
    margin: 30px auto;
    border: 3px solid transparent;
    border-radius: black;
    animation: spin 1s ease infinite;
}
@keyframes spin{
    to {-webkit-transform: rotateZ(360deg);}
}
</style>