<template>
    <div class="layout_container">
        <!-- 左侧菜单 -->
        <div class="layout_slider">
            <!-- 展示菜单 -->
            <el-scrollbar class="scrollbar">
                <el-menu background-color="#001529" text-color="white">
                    <Menu></Menu>
                </el-menu>
            </el-scrollbar>
        </div>

        <!-- 顶部导航 -->
        <div class="layout_tabbar">
            <Tabbar></Tabbar>
        </div>

        <!-- 内容展示区 -->
        <div class="layout_main">
            <router-link></router-link>
        </div>
    </div>
</template>

<script setup>
import Tabbar from './tarbar/tarbar.vue';
import Menu from './menu/menu.vue';
</script>

<style lang='scss' scoped>
.layout_container {
    width: 100%;
    height: 100vh;

    .layout_slider {
        width: $base-menu-width;
        height: 100vh;
        background: $base-menu-background;
        transition: all 0.3s;

        .scrollbar {
            width: 100%;
            height: calc(100vh - $base-menu-logo-height);

            .el-menu {
                border-right: none;
            }
        }

        &.fold {
            width: $base-menu-min-width;
        }
    }

    .layout_tabbar {
        position: fixed;
        width: calc(100% - $base-menu-width);
        height: $base-nav-height;
        top: 0;
        left: $base-menu-width;
        transition: all 0.3s;

        &.fold {
            width: calc(100vw - $base-menu-min-width);
            left: $base-menu-min-width;
        }
    }

    .layout_main {
        position: absolute;
        width: calc(100% - $base-menu-width);
        height: calc(100vh - $base-nav-height);
        top: $base-nav-height;
        left: $base-menu-width;
        padding: 20px;
        overflow: auto;
        transition: all 0.3s;

        &.fold {
            width: calc(100vw - $base-menu-min-width);
            left: $base-menu-min-width;
        }
    }
}</style>
