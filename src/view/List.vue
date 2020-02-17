<template>
    <div class="list">
        <navbar>
            <!-- 這段 code 將會被插入在上面我們設計的地方（ nav 右邊 name=right）  -->
            <div slot="right">
                <select name="" id="" class="form-control" @change="changeStatus" v-model="status">
                    <option value="線上">線上</option>
                    <option value="線下">線下</option>
                </select>
                <div>Hi,{{  showUsername }}</div>
            </div>
        </navbar>
        <!-- <router-view :status="myStatus" @pushNewName='getNewName'></router-view> -->
        <listData></listData>

    </div>
</template>

<script>
    import navbar from "../components/Can/navbar.vue";
    import listData from "../components/list/ListData.vue";
    export default {
        name: "list",
        components: {
            listData,
            navbar
        },
        data() {
            return {
                status: this.$store.state.status,
                username: '',
            };
        },
        methods: {
            changeStatus() {
                console.log(this.status);
                this.$store.state.status = this.status;
            },
            getNewName(newName) {
                console.log(newName);
                let vm = this;
                vm.username = newName
            },
        },
        computed: {
            showUsername() {
                // console.log(this.$store.state.status)
                return this.$store.state.username
            },
        }
    };
</script>

<style lang="scss">
    .list {
        .form-control {
            width: 10%;
        }
    }
</style>
