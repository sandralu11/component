<template>
    <div class="to-do-list">
        <div>
            <router-link :to="{name: 'todolist-info'}">info</router-link>|
            <router-link :to="{name: 'todolist-youtube'}">youtube</router-link>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>

    export default {
        name: 'todolist',

    }
</script>

<style>
    .to-do-list {
        text-align: center;
    }
</style>