<template>
    <div class="counter">
        <h2>count:<span class="count"> {{ count }}</span></h2>
        <button @click="decrease"> - </button>
        <button @click="increase"> + </button>

    </div>
</template>

<script>
    export default {
        name: 'counter',
        data() {
            return {
                count: 0,
            }
        },
        methods: {
            increase() {
                this.count += 1;
            },
            decrease() {
                this.count -= 1;
            },
        }
    }
</script>

<style lang='scss'>
    .counter {
        text-align: center;
    }
</style>