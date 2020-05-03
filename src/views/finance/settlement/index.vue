<template>
  <div class="page">
    <div class="header">
      <el-form :inline="true" :model="form" class="form-inline">
        <el-form-item label="时间范围">
          <el-date-picker
            v-model="form.date"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期">
          </el-date-picker>
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
          prop="count"
          label="总利息"
          width="300">
        </el-table-column>
        <el-table-column
          prop="count"
          label="总本金"
          width="300">
        </el-table-column>
        <el-table-column
          prop="count"
          label="总和">
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
          date: ''
        },
        tableData: [
          {
            count: '1000',
          },
          {
            count: '1000',
          },
          {
            count: '1000',
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
