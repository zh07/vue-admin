<template>
  <div class="info-page">
    <div class="header">
      <el-form :inline="true" :model="form" class="demo-form-inline">
        <el-form-item label="">
          <el-select v-model="form.level" placeholder="结算方式">
            <el-option label="结算方式" value="1"></el-option>
            <el-option label="每日分红" value="2"></el-option>
            <el-option label="每日复利分红" value="3"></el-option>
            <el-option label="一次性分红" value="4"></el-option>
            <el-option label="实时分红" value="5"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="">
          <el-input v-model="form.progress" placeholder="项目进度"></el-input>
        </el-form-item>
        <el-form-item label="">
          <el-input v-model="form.userNmae" placeholder="项目名称"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="">立即查询</el-button>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="addFunc">新增</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="table-box">
      <el-table
        border
        :data="tableData"
        style="width: 100%"
        @selection-change="handleSelectionChange">
        <el-table-column
          type="selection"
          width="55">
        </el-table-column>
        <el-table-column
          prop="sort"
          label="排序">
        </el-table-column>
        <el-table-column
          prop="name"
          label="项目名称">
        </el-table-column>
        <el-table-column
          prop="mode"
          label="结算方式">
        </el-table-column>
        <el-table-column
          prop="interestRate"
          label="利率（%）">
        </el-table-column>
        <el-table-column
          prop="duration"
          label="返利时长">
        </el-table-column>
        <el-table-column
          prop="progress"
          label="项目进度（%）">
        </el-table-column>
        <el-table-column
          prop="time"
          label="创建时间">
        </el-table-column>
        <el-table-column
          prop="state"
          label="状态">
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          width="360">
          <template slot-scope="scope">
            <el-row>
              <el-button type="success" size="mini">上架</el-button>
              <el-button type="success" size="mini">排序</el-button>
              <el-button type="success" size="mini">下架</el-button>
              <el-button type="success " size="mini" @click="editFunc">编辑</el-button>
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
      :title="hoverTitle"
      :visible.sync="dialogVisible"
      width="1000">
      <el-form ref="form" :model="formInline" label-width="100px">
        <el-form-item label="项目名称">
          <el-input v-model="formInline.name" placeholder="请输入项目名称"></el-input>
        </el-form-item>
        <el-form-item label="起投金额">
          <el-input v-model="formInline.start" placeholder="请输入起投金额"></el-input>
        </el-form-item>
        <el-form-item label="最高可投">
          <el-input v-model="formInline.max" placeholder="请输入最高可投"></el-input>
        </el-form-item>
        <el-form-item label="担保公司">
          <el-input v-model="formInline.company" placeholder="请输入担保公司"></el-input>
        </el-form-item>
        <el-form-item label="复投金额">
          <el-input v-model="formInline.double" placeholder="请输入复投金额"></el-input>
        </el-form-item>
        <el-form-item label="产品图片">
          <el-upload
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :before-remove="beforeRemove"
            multiple
            :limit="1"
            :show-file-list="true">
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
        </el-form-item>
        <el-form-item label="项目总金额">
          <el-input v-model="formInline.total" placeholder="请输入项目总金额"></el-input>
        </el-form-item>
        <el-form-item label="利率(%)">
          <el-input v-model="formInline.interestRate" placeholder="请输入利率(%)"></el-input>
        </el-form-item>
        <el-form-item label="项目进度">
          <el-input v-model="formInline.progress" placeholder="请输入项目进度"></el-input>
        </el-form-item>
        <el-form-item label="返利时长">
          <el-input v-model="formInline.time" placeholder="请输入返利时长"></el-input>
        </el-form-item>
        <el-form-item label="返利方式">
          <el-select v-model="formInline.level" placeholder="每日分红">
            <el-option label="每日分红" value="2"></el-option>
            <el-option label="每日复利分红" value="3"></el-option>
            <el-option label="一次性分红" value="4"></el-option>
            <el-option label="实时分红" value="5"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="">立即提交</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
  import {tableData} from './tableData'

  export default {
    methods: {
      // 添加
      addFunc() {
        this.hoverTitle = "增加";
        this.dialogVisible = true;
      },
      // 编辑
      editFunc() {
        this.hoverTitle = "编辑";
        this.dialogVisible = true;
      },
      deleteRow(index, rows) {
        console.log(index, rows);
        rows.splice(index, 1);
      },
      handleSelectionChange(val) {
        console.log(val)
        this.multipleSelection = val;
      },
      handleSizeChange() {},
      handleCurrentChange() {},
      handlePreview(file) {
        console.log(file);
      },
      beforeRemove(file, fileList) {
        return this.$confirm(`确定移除 ${ file.name }？`);
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
    },
    data() {
      return {
        input: null,
        value: null,
        hoverTitle: "增加",
        dialogVisible: false,
        form: {
          progress: '',
          userNmae: '',
          level: ''
        },
        formInline: {
          name: '',
          start: '',
          max: '',
          company: '',
          double: '',
          total: '',
          interestRate: '',
          progress: '',
          time: '',
          level: ''
        },
        tableData: tableData,
        multipleSelection: []
      }
    }
  }
</script>

<style scoped>
  .header {
    padding: 20px 20px 0;
  }
  .table-box {
    padding: 0 20px 20px;
  }
  .pagination {
    padding-top: 20px;
  }
</style>
