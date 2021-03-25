<template>
    <div id="headerMenu">
        <a-menu :defaultSelectedKeys="current" mode="horizontal" theme="dark"
                @click="menuClick">
            <a-menu-item key="ToolGrid">
                <a-icon type="setting"/>
                功能列表
            </a-menu-item>
            <a-menu-item key="Music">
                <a-icon type="setting"/>
                随便听听
            </a-menu-item>
        </a-menu>
    </div>
</template>

<script>
    export default {
        name: "TopMenu",
        data() {
            return {
                current: ['ToolGrid'],
            }
        },
        mounted() {
            this.menuClick({key: this.current[0]})
        },
        methods: {
            menuClick(item, key, keyPath) {
                this.$router.push({name: item.key});
            }
        }
    }
</script>

<style>
    #headerMenu li {
        top: 8px;
    }

</style>
