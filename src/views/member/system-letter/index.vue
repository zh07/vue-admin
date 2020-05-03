<template>
  <div class="hierarchy-page">
    <el-button class="buttom" type="primary" @click="dialogVisible = true">发送內信</el-button>
    <div class="table-box">
      <el-table
        border
        :data="tableData"
        style="width: 100%"
        @selection-change="handleSelectionChange">
        <!--<el-table-column-->
          <!--type="selection"-->
          <!--width="50">-->
        <!--</el-table-column>-->
        <el-table-column
          prop="userName"
          label="用户名"
          width="200">
        </el-table-column>
        <el-table-column
          prop="theme"
          label="主题"
          width="200">
        </el-table-column>
        <el-table-column
          prop="type"
          label="类型"
          width="200">
        </el-table-column>
        <el-table-column
          prop="revert"
          label="是否回复"
          width="200">
        </el-table-column>
        <el-table-column
          prop="date"
          label="发送时间"
          width="200">
        </el-table-column>
        <el-table-column
          label="操作">
          <template slot-scope="scope">
            <el-row>
              <el-button type="success " size="mini" @click="onRedact(scope.$index, tableData)">查看详情</el-button>
              <!--<el-button type="danger" size="mini" @click="deleteRow(scope.$index, tableData)">删除</el-button>-->
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
      width="60%">
      <el-form ref="form" :model="form" label-width="100px">
        <el-form-item label="主题">
          <el-input v-model="form.theme" placeholder="请输入主题"></el-input>
        </el-form-item>
        <el-form-item label="用户名">
          <el-input v-model="form.userName" placeholder="用户名为空则发送全部会员"></el-input>
        </el-form-item>
        <el-form-item label="内容">
          <el-input v-model="form.content" placeholder="请输入内容" type="textarea" :rows="4"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="">立即发送</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
    <el-dialog
      title="编辑"
      :visible.sync="dialogVisible_1"
      width="60%">
      <el-form ref="form" :model="formInline" label-width="100px">
        <el-form-item label="主题">
          <el-input v-model="formInline.theme" placeholder="请输入主题"></el-input>
        </el-form-item>
        <el-form-item label="内容">
          <el-input v-model="formInline.content" placeholder="请输入内容" type="textarea" :rows="4"></el-input>
        </el-form-item>
        <el-form-item label="回复内容">
          <el-input v-model="formInline.revert" placeholder="请输入回复内容" type="textarea" :rows="4"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="">立即回复</el-button>
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
        this.dialogVisible_1 = true
      },
      handleSizeChange() {},
      handleCurrentChange() {}
    },
    data() {
      return {
        dialogVisible: false,
        dialogVisible_1: false,
        form: {
          userName: '',
          theme: '',
          content: ''
        },
        formInline: {
          userName: '',
          theme: '',
          content: '',
          revert: ''
        },
        tableData: [
          {
            userName: 'test',
            theme: '666',
            type: '用户发送',
            revert: '未回复',
            content: 'abdwefbe',
            date: '2019-09-18 13:55:32'
          },
          {
            userName: 'test',
            theme: '666',
            type: '用户发送',
            revert: '未回复',
            content: 'abdwefbe',
            date: '2019-09-18 13:55:32'
          },
          {
            userName: 'test',
            theme: '666',
            type: '用户发送',
            revert: '未回复',
            content: 'abdwefbe',
            date: '2019-09-18 13:55:32'
          },
        ],
      }
    }
  }
</script>

<style>
  .buttom {
    margin: 20px 0 0 20px;
  }
  .table-box {
    padding: 20px;
  }
  .pagination {
    padding-top: 20px;
  }
</style>
