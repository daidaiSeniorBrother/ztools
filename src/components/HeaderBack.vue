<template>
    <div>
        <a-page-header
                title="返回"
                :sub-title="subTitle"
                @back="() => $router.go(-1)">
            <template slot="extra">
                <template v-for="(item,index) in buttonList">
                    <a-button shape="round" type="primary" v-if="!item.type"
                              @click="clickHeaderBtn(item.name)">
                        {{item.name}}
                    </a-button>

                    <a-dropdown v-if="item.type==='dropdown'">
                        <a-menu slot="overlay">
                            <template v-for="(mi,i) in item.menuItem">
                                <a-menu-item @click="clickHeaderBtn(item.name,mi)">
                                    {{mi}}
                                </a-menu-item>
                            </template>
                        </a-menu>
                        <a-button style="margin-left: 8px" shape="round" type="primary"> {{item.name}}
                            <a-icon type="down"/>
                        </a-button>
                    </a-dropdown>
                </template>

            </template>
        </a-page-header>
    </div>
</template>

<script>
    export default {
        name: "HeaderBack",
        props: {
            subTitle: {
                type: String
            },
            buttonList: {
                type: Array
            }
        },
        methods: {
            clickHeaderBtn(name, dropName) {
                this.$emit('clickHeaderBtnCallBack', {name: name, dropName: dropName});
            }
        }
    }
</script>

<style scoped>

</style>
