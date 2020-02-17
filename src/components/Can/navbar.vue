<template>
    <div class="nav-bar">
        <nav class="navbar navbar-light">
            <div class="navbar-header">
                <a class="navbar-brand" href="#">Project name</a>
            </div>
            <div class="nav">
                <slot name="topic">
                    <!-- 包裹在 slot 裡面的這段 code 是預設 -->
                </slot>
            </div>
            <div id="navbar" class="navbar-collapse collapse">
                <!-- 設計為這段 slot 會插在 nav 的右邊（因為 css 設計） -->
                <form class="navbar-form">
                    <slot name="right">
                        <!-- 包裹在 slot 裡面的這段 code 是預設 -->
                    </slot>
                </form>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
        nmae: "navbar"
    };
</script>

<style lang="scss">
    .nav-bar {
        nav {
            background-color: #00c180;
        }
        #navbar {
            display: inline-block;
        }
    }
</style>
