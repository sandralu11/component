<template>
    <div class="list-data">
        <div>狀態：{{ showStatus }}</div>
        <div class="form-inline m-3 right">
            <input type="text" class="form-control mr-1" v-model="username" placeholder="你的姓名">
            <button class="btn btn-primary" @click=" updateUsername">Change</button>
        </div>
        <table class="table">
            <thead class="thead-dark">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">縮圖</th>
                    <th scope="col">姓名</th>
                    <th scope="col">選擇</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in listData" :key="index">
                    <th scope="row">{{ index + 1 }}</th>
                    <td><img :src="item.picture.medium" alt="" /></td>
                    <td>{{ item.name.first }} {{ item.name.last }}</td>
                    <td>{{ item.email }}</td>
                </tr>
            </tbody>
        </table>

    </div>
</template>

<script>
    export default {
        name: "listData",
        // props: ["status"],
        data() {
            return {
                listData: [],
                username: this.$store.state.username,
                status: this.$store.state.status,
            };
        },
        methods: {
            getData() {
                let vm = this; //vm或self都很多人用
                this.axios
                    .get("https://randomuser.me/api/?results=50")
                    .then(function (response) {
                        // 成功回應
                        // console.log(response.data);
                        vm.listData = response.data.results;
                    })
                    .catch(function (error) {
                        // 失敗回應
                        console.log(error);
                    });
            },
            updateUsername() {
                let vm = this
                // 由內往外傳$emit
                // vm.$emit('pushNewName', vm.username)
                this.$store.state.username = vm.username
            },
            selectItem(item, index) {
                this.$store.commit('UPDATE_STATUS', index)
            }
        },
        computed: {
            // showList() {
            //     return this.$store.state.listData
            // },
            showStatus() {
                // console.log(this.$store.state.status)
                return this.$store.state.status
            },

        },
        mounted() {
            this.getData();
        }
    };
</script>

<style lang="scss"></style>
