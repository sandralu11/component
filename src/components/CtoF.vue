<template>
    <div class="C-to-F">
        <h1>Temperature Conversion</h1>
        <!-- 切換模式按鈕 -->
        <input id="toggleTemperature" type="checkbox" v-model="isCelsius">
        <!-- for 属性规定 label 与哪个表单元素绑定 -->
        <label for="toggleTemperature">切換成：{{ toggleTemperature }}</label>

        <!-- 使用者輸入區域 -->
        <!-- v-show 條件不成立的區域會使用 style 隱藏，會存在瀏覽器上 -->
        <div class="celsius">
            <span v-show="!isCelsius">攝氏 (°C)：</span>
            <span v-show="isCelsius">華氏 (°F)：</span>
            <input type='number' v-model="userInput" />
        </div>

        <!-- 轉換顯示區域 -->
        <!-- v-if 條件不成立的區域，不會存在瀏覽器上 -->
        <h2 v-if="isCelsius">攝氏：{{ celsius }} °C</h2>
        <h2 v-if="!isCelsius">華氏：{{ fahrenheit }} °F</h2>

        <!-- alert 顯示計算結果 -->
        <button @click="temperatureConversion( userInput );">
            Temperature Conversion
        </button>
    </div>
</template>

<script>
    export default {
        name: 'ctof',
        data() {
            return {
                isCelsius: false,
                userInput: 0,
            }
        },
        computed: {
            toggleTemperature() {
                return this.isCelsius ? "攝氏 轉換 華氏" : "華氏 轉換 攝氏";
            },
            fahrenheit() {
                return this.userInput * 9 / 5 + 32;
            },
            celsius() {
                return (this.userInput - 32) * 5 / 9;
            },

        },
        methods: {
            temperatureConversion() {
                // val 是從 click 傳進來的 userInput 這是示範 function 傳值。
                // 如果不傳值，直接使用 this.userInput 也可以。
                // alert 的內容直接使用 computed 已經幫我計算好的結果。
                if (this.isCelsius) {
                    alert('攝氏: ' + this.celsius);
                }
                else {
                    alert('華氏: ' + this.fahrenheit);
                }
            }
        }
    }
</script>

<style lang='scss'>
    .C-to-F {
        h1 {
            color: #4fc08d;
        }
        label {
            background-color: #35495e;
            color: antiquewhite;
            padding: 5px;
        }
        .celsius {
            margin: 20px;
        }
        button {
            margin-top: 20px;
            border: none;
            background-color: #4fc08d;
            color: white;
            font-weight: 900;
            font-size: 16px;
            padding: 15px;
            &:hover {
                cursor: pointer;
                border-radius: 25px;
                transition: all 0.5s linear;
            }
        }
    }
</style>