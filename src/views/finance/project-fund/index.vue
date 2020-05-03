<template>
  <div class="page">
    <div class="header">
      <el-form :inline="true" :model="form" class="form-inline">
        <el-form-item label="">
          <el-select v-model="form.status" placeholder="类型">
            <el-option label="进行中" value="1"></el-option>
            <el-option label="已结束" value="2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="">
          <el-input v-model="form.name" placeholder="项目名称"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="">立即查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="table-box">
      <el-table
        border
        :data="tableData"
        style="width: 100%">
        <el-table-column
          prop="projectName"
          label="项目名称"
          width="200">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="200">
        </el-table-column>
        <el-table-column
          prop="count"
          label="投资总人数"
          width="200">
        </el-table-column>
        <el-table-column
          prop="amount"
          label="投资总金额"
          width="200">
        </el-table-column>
        <el-table-column
          prop="date"
          label="创建时间">
        </el-table-column>
      </el-table>
      <el-pagination
        class="pagination"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="4"
        :page-sizes="[100, 200, 200, 400]"
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
        form: {
          userNmae: '',
          date: '',
          type: ''
        },
        tableData: [
          {
            projectName: 'test',
            name: 'test',
            count: '1000',
            amount: '1000',
            date: '2019-11-01 16:17:37'
          },
          {
            projectName: 'test',
            name: 'test',
            count: '1000',
            amount: '1000',
            date: '2019-11-01 16:17:37'
          },
          {
            projectName: 'test',
            name: 'test',
            count: '1000',
            amount: '1000',
            date: '2019-11-01 16:17:37'
          },
        ],
        multipleSelection: []
      }
    }
  }
</script>

<style>
  .header {
    padding: 20px;
  }
  .table-box {
    padding: 20px;
  }
  .pagination {
    padding-top: 20px;
  }
</style>
