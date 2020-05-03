<template>
  <div class="hierarchy-page">
    <el-form :inline="true" :model="formInline" class="form-inline" label-width="80px">
      <el-form-item label="记录时间">
        <el-date-picker
          v-model="formInline.date"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="终端">
        <el-select v-model="formInline.terminal" placeholder="选择VIP等级">
          <el-option label="VIP1" value="1"></el-option>
          <el-option label="VIP1" value="2"></el-option>
          <el-option label="VIP3" value="3"></el-option>
          <el-option label="VIP4" value="4"></el-option>
        </el-select>
      </el-form-item>
      <br>
      <el-form-item label="用户名">
        <el-input v-model="formInline.userNmae" placeholder="请输入二级代理"></el-input>
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
          width="200">
        </el-table-column>
        <el-table-column
          prop="IP"
          label="IP"
          width="300">
        </el-table-column>
        <el-table-column
          prop="terminal"
          label="终端"
          width="300">
        </el-table-column>
        <el-table-column
          prop="date"
          label="时间">
        </el-table-column>
      </el-table>
      <el-pagination
        class="pagination"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="4"
        :page-sizes="[100, 200, 300, 400]"
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
            terminal: 'PC',
            userName: 'ceshi001',
            IP: '127.0.0.1'
          },
          {
            date: '2019-09-18 13:55:32',
            terminal: 'PC',
            userName: 'ceshi001',
            IP: '127.0.0.1'
          },
          {
            date: '2019-09-18 13:55:32',
            terminal: 'PC',
            userName: 'ceshi001',
            IP: '127.0.0.1'
          },
          {
            date: '2019-09-18 13:55:32',
            terminal: 'PC',
            userName: 'ceshi001',
            IP: '127.0.0.1'
          }
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
