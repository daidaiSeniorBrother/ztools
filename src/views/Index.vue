<template>
    <a-layout>
        <a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%' }">
            <div class="logo"><span class="logoText">ZTOOLS</span></div>
            <TopMenu></TopMenu>
        </a-layout-header>
        <a-layout-content class="contentArea darkBack" :style="{height:contentMinHeight}">
            <router-view></router-view>
        </a-layout-content>
        <a-layout-footer :style="{ textAlign: 'center' }">
            ©2021 Created By ZTOOLS
        </a-layout-footer>
    </a-layout>
</template>

<script>
    import TopMenu from "@/components/TopMenu";

    export default {
        name: "Index",
        data() {
            return {
                contentMinHeight: "722px",
            }
        },
        components: {
            TopMenu
        },
        mounted() {
            const _this = this;
            _this.setSize();
            window.addEventListener('resize', function () {
                _this.setSize();
            }, false);
        },
        methods: {
            setSize() {
                this.contentMinHeight = (document.documentElement.clientHeight - 133) + 'px';
            }
        }
    }
</script>

<style>
    .logo {
        width: 120px;
        height: 31px;
        margin: 16px 24px 16px 0;
        float: left;
    }

    .logoText {
        color: #ddd;
        position: relative;
        left: 20px;
        bottom: 18px;
        font-size: 25px;
    }

    .contentArea {
        padding: 0 50px;
        margin-top: 64px;
        overflow-y: auto;
    }
</style>
