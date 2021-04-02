<template>
    <div id="ToolGrid">
        <a-row :gutter="[16,16]">
            <a-col :span="8">
                <a-card @click="toolGridClick('JsonFormat')">
                    JSON格式化
                </a-card>
            </a-col>
            <a-col :span="8">
                <a-card @click="toolGridClick('Translation')">
                    翻译
                </a-card>
            </a-col>
            <a-col :span="8">
                <a-card @click="toolGridClick('Memorandum')">
                    备忘录
                </a-card>
            </a-col>
        </a-row>
        <a-row :gutter="[16,16]">
            <a-col :span="8">
                <a-card @click="toolGridClick('Memorandum')">
                    Redis Desktop
                </a-card>
            </a-col>
        </a-row>
    </div>
</template>

<script>
    export default {
        name: "ToolGrid",
        methods: {
            toolGridClick(value) {
                this.$router.push({name: value});
            }
        }
    }
</script>

<style>
    #ToolGrid .ant-card-body {
        text-align: center;
        cursor: pointer;
    }

    #ToolGrid .ant-card-body:hover {
        color: #1890ff;
    }
</style>
