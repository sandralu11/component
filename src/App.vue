<template>
    <div id="app">
        <navbar>
            <div slot="topic">
                <ul>
                    <li>
                        <router-link :to="{name: 'HelloWorld'}">HelloWorld</router-link>
                    </li>
                    <li>
                        <router-link :to="{name: 'can'}">can</router-link>
                    </li>
                    <li>
                        <router-link :to="{name: 'list'}">list</router-link>
                    </li>
                </ul>
            </div>
        </navbar>

        <router-view></router-view>
    </div>
</template>

<script>
    import navbar from './components/Can/navbar'
    // import CToF from './components/CtoF.vue'
    // import Can from "./view/Can.vue";
    // import counter from "./components/counter";
    // import list from "./view/List.vue";

    export default {
        name: "App",
        components: {
            // CToF,
            // Can,
            // counter,
            // list,
            navbar
        }
    };
</script>

<style lang="scss">
    @import "~bootstrap/scss/bootstrap";
    #app {
        @import url("../src/assets/styles/reset.scss");
        color: #35495e;
        h1 {
            font-size: 28px;
        }
        h2 {
            font-size: 24px;
        }
    }
</style>
