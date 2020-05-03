<template>
  <div class="hierarchy-page">
    <div class="table-box">
      <el-table
        border
        :data="tableData"
        style="width: 100%"
        @selection-change="handleSelectionChange">
        <el-table-column
          type="selection"
          width="50">
        </el-table-column>
        <el-table-column
          prop="level"
          label="会员等级"
          width="300">
        </el-table-column>
        <el-table-column
          prop="interest"
          label="加息（%）"
          width="300">
        </el-table-column>
        <el-table-column
          prop="amount"
          label="升级金额"
          width="300">
        </el-table-column>
        <el-table-column
          label="操作">
          <template slot-scope="scope">
            <el-row>
              <el-button type="success " size="mini" @click="onRedact(scope.$index, tableData)">编辑</el-button>
              <el-button type="danger" size="mini" @click="deleteRow(scope.$index, tableData)">删除</el-button>
            </el-row>
          </template>
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
    <el-dialog
      title="编辑"
      :visible.sync="dialogVisible"
      width="40%">
      <el-form ref="form" :model="formInline" label-width="100px">
        <el-form-item label="会员等级">
          <el-input v-model="formInline.level" placeholder=""></el-input>
        </el-form-item>
        <el-form-item label="加息(%)">
          <el-input v-model="formInline.interest" placeholder="请输入冻结资金"></el-input>
        </el-form-item>
        <el-form-item label="升级金额">
          <el-input v-model="formInline.amount" placeholder="请输入冻结资金"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="">立即提交</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>

  export default {
    methods: {
      deleteRow(index, rows) {
        console.log(index, rows);
        rows.splice(index, 1);
      },
      handleSelectionChange(val) {
        console.log(val)
        this.multipleSelection = val;
      },
      onRedact(index, rows) {
        this.formInline = rows[index]
        this.dialogVisible = true
      },
      handleSizeChange() {},
      handleCurrentChange() {}
    },
    data() {
      return {
        dialogVisible: false,
        formInline: {
          level: '',
          interest: '',
          amount: '',
        },
        tableData: [
          {
            level: 'vip1',
            interest: '0.01',
            amount: '10000',
          },
          {
            level: 'vip1',
            interest: '0.01',
            amount: '10000',
          },
          {
            level: 'vip1',
            interest: '0.01',
            amount: '10000',
          },
          {
            level: 'vip1',
            interest: '0.01',
            amount: '10000',
          },
        ],
      }
    }
  }
</script>

<style>
  .table-box {
    padding: 20px;
  }
  .pagination {
    padding-top: 20px;
  }
</style>
