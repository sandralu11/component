<template>
    <div class="can">
        <navbar>
            <!-- 這段 code 將會被插入在上面我們設計的地方（ nav 右邊 name=right）  -->
            <div slot="right">
                <div class="form-group">
                    <input type="text" placeholder="Email" class="form-control">
                </div>
                <div class="form-group">
                    <input type="password" placeholder="Password" class="form-control">
                </div>
                <button type="submit" class="btn btn-success">Sign in</button>
            </div>
        </navbar>
        <Card :list="list">
        </Card>
    </div>
</template>

<script>
    import Card from '../components/Can/Card.vue'
    import navbar from '../components/Can/navbar.vue'
    export default {
        name: 'can',
        components: {
            Card,
            navbar
        },
        data() {
            return {
                list: [
                    {
                        title: 'Heading1',
                        info: 'Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. ',
                        btntext: 'View details »'
                    },
                    {
                        title: 'Heading2',
                        info: 'Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. ',
                        btntext: 'View details »'
                    },
                    {
                        title: 'Heading3',
                        info: 'Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.',
                        btntext: 'View details »'
                    },
                ],
            }
        },

    }
</script>

<style>
</style>