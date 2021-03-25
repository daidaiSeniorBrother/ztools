<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>

    export default {
        name: 'App',
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    .darkBack, .ant-layout-footer, .ant-card {
        color: rgba(255, 255, 255, 0.65) !important;
        background: #001529 !important;
    }
</style>
