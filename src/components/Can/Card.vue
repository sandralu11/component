<template>
  <!-- [注意!]根標籤只有一個，不能做循環v-for，要再做item -->
  <div class="card">
    <div class="card-item" v-for="(item, index) in list" :key="index">
      <h2>{{ item.title }}</h2>
      <p>{{ item.info }}</p>
      <p>
        <a class="btn" href="#" role="button">{{ item.btntext }}</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "card",
  // vue option 當中有 props 開發區域
  props: {
    // attribute name: Type
    list: Array
  }
  //data () {
  //  return {
  //    list: [ 資料"不"需要存在這邊了 ],
  //  }
  //},
};
</script>

<style lang="scss">
.card {
  display: flex;
  justify-content: space-evenly;
  margin: 50px;
  .card-item {
    width: 300px;
    border: 1px solid gray;
    border-radius: 10px;
    padding: 15px;
  }
}
</style>
