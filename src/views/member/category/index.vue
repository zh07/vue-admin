
<template>
  <div class="category-page">
    <el-form :inline="false" :model="formInline" class="demo-form-inline" label-width="80px">
      <el-form-item label="一级代理">
        <el-input size="medium" v-model="formInline.oneLevel" placeholder="请输入一级代理"></el-input>
      </el-form-item>
      <el-form-item label="二级代理">
        <el-input v-model="formInline.twoLevel" placeholder="请输入二级代理"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="">立即提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    components: {},
    data() {
      return {
        formInline: {
          oneLevel: '',
          twoLevel: ''
        }
      }
    },
    created() {
    },
    computed: {},
    methods: {},
    activated() {
    },
    watch: {}
  }
</script>

<style>
.category-page {
  padding: 40px;
}
</style>