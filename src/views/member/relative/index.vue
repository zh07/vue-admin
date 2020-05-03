<template>
  <div class="hierarchy-page">
    <el-form :inline="true" :model="formInline" class="form-inline" label-width="80px">
      <el-form-item label="用户名">
        <el-input v-model="formInline.userNmae" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item label="代理">
        <el-select v-model="formInline.proxy" placeholder="选择代理">
          <el-option label="上级代理" value="1"></el-option>
          <el-option label="下级代理" value="2"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="">立即查询</el-button>
      </el-form-item>
    </el-form>
    <div class="table-box">
      <el-table
        border
        :data="tableData"
        style="width: 100%">
        <el-table-column
          prop="userName"
          label="用户名"
          width="220">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="220">
        </el-table-column>
        <el-table-column
          prop="date"
          label="推荐时间"
          width="220">
        </el-table-column>
        <el-table-column
          prop="proxy"
          label="代理类型"
          width="220">
        </el-table-column>
        <el-table-column
          prop="amount"
          label="投资总额">
        </el-table-column>
      </el-table>
      <el-pagination
        class="pagination"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="4"
        :page-sizes="[100, 220, 220, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400">
      </el-pagination>
    </div>
  </div>
</template>

<script>

  export default {
    methods: {
      handleSizeChange() {},
      handleCurrentChange() {}
    },
    data() {
      return {
        formInline: {
          date: '',
          terminal: '',
          userName: '',
        },
        tableData: [
          {
            date: '2019-09-18 13:55:32',
            name: 'test',
            userName: 'test',
            proxy: '上级代理',
            amount: '1000'
          },
          {
            date: '2019-09-18 13:55:32',
            name: 'test',
            userName: 'test',
            proxy: '上级代理',
            amount: '1000'
          },
          {
            date: '2019-09-18 13:55:32',
            name: 'test',
            userName: 'test',
            proxy: '上级代理',
            amount: '1000'
          },
          {
            date: '2019-09-18 13:55:32',
            name: 'test',
            userName: 'test',
            proxy: '上级代理',
            amount: '1000'
          },
        ],
      }
    }
  }
</script>

<style>
  .form-inline {
    padding-top: 20px;
    padding-left: 20px;
  }
  .table-box {
    padding: 20px;
  }
  .pagination {
    padding-top: 20px;
  }
</style>
