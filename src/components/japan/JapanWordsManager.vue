
<!-- 日语单词管理的Main --> 
<template>
    <div>    
      <el-row :gutter="20">
          <el-col :span="2">
              <div style="font-weight: bold;">日语单词管理</div>
          </el-col>
          
          <el-col :span="12">
              <div>
                    <el-input placeholder="请输入中文含义" v-model="pageVO.wmean" clearable style="width: 200px;"></el-input>
                    <el-select v-model="pageVO.classId" clearable placeholder="请选择课程" style="margin-left: 10px;">
                        <el-option v-for="item in classObjs" :key="item.classId" :label="item.name" :value="item.classId"></el-option>
                    </el-select>
                    <el-select v-model="pageVO.groupId" clearable placeholder="请选择分组" style="margin-left: 10px;">
                        <el-option v-for="item in groupObjs" :key="item.groupId" :label="item.name" :value="item.groupId"></el-option>
                    </el-select>
                    <el-button size="small" type="success" style="margin-left: 15px;" @click="search">
                        <i class="el-icon-search"></i> 查询
                    </el-button>
                    <el-button size="small" style="margin-left: 15px;" @click="refresh">
                        <i class="el-icon-refresh"></i> 刷新
                    </el-button>
              </div>
          </el-col>
          <!-- <el-col :span="6"><div class="grid-content bg-white"></div></el-col> -->
          <el-col :span="6"><div class="grid-content-1 bg-white"></div></el-col>
          <el-col :span="4" style="text-align: right;">
              <el-button size="small" type="primary" @click="add"><i class="el-icon-plus" style="font-weight: bold;"></i> 新增</el-button>
              <el-button size="small" type="primary" @click="importWords"><i class="el-icon-upload2" style="font-weight: bold;"></i> 导入</el-button>
          </el-col>
      </el-row>

      <el-table 
            :data="tableData"
            border
            :header-cell-style="{ background : '#f2f5fc'}"
            style="width: 100%">
            <el-table-column prop="classId" label="所属课程" width="180"></el-table-column>
            <el-table-column prop="groupId" label="分组" width="180"></el-table-column>
            <el-table-column prop="wmean" label="中文释义" width="180"></el-table-column>
            <el-table-column prop="wread" label="读音" width="260"></el-table-column>
            <el-table-column prop="wwrite" label="写法" width="200"></el-table-column>
            <el-table-column prop="lastLearnTime" label="上次学习时间" width="260"></el-table-column>
            <el-table-column label="操作" width="auto">
                <template slot-scope="scope">
                    <el-button size="mini" @click="modifyWord(scope.row)"><i class="el-icon-edit-outline"></i> 编辑</el-button>
                    <el-button size="mini" type="danger" @click="removeWord(scope.row)"><i class="el-icon-delete"></i> 删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination
            background
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="pageVO.pageNo"
            :page-sizes="[10, 50, 100]"
            :page-size="pageVO.pageSize"
            layout="total, sizes, prev, pager, next, jumper"
            @next-click="refresh"
            @prev-click="refresh"
            :total="pageVO.pageCount"
            style="text-align: right;margin-top: 5px;">
        </el-pagination>


        <el-dialog
          title="新增单词"
          :visible.sync="addDialogVisible"
          width="30%">
            <el-form ref="form" :model="form" :rules="rules" label-width="80px">
                    <el-form-item label="中文释义" prop="wmean">
                        <el-input v-model="form.wmean" style="width: 50%;"></el-input>
                    </el-form-item>
                    <el-form-item label="日语书写" prop="wwrite">
                        <el-input v-model="form.wwrite" style="width: 50%;"></el-input>
                    </el-form-item>
                    <el-form-item label="日语发音" prop="wread">
                        <el-input v-model="form.wread" style="width: 50%;"></el-input>
                    </el-form-item>
                    <el-form-item label="分组">
                        <el-select v-model="form.groupId" clearable placeholder="分组">
                            <el-option v-for="item in groupObjs" :key="item.groupId" :label="item.name" :value="item.groupId"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="所属课程">
                        <el-select v-model="form.classId" clearable placeholder="课程">
                            <el-option v-for="item in classObjs" :key="item.classId" :label="item.name" :value="item.classId"></el-option>
                        </el-select>
                    </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button size="small" @click="addDialogVisible = false">取消</el-button>
                <el-button size="small" type="primary" @click="confirmAddWord()">新增</el-button>
            </span>
        </el-dialog>

        <el-dialog
          title="修改单词"
          :visible.sync="modifyDialogVisible"
          width="40%">
            <el-form ref="form" :model="form" :rules="rules" label-width="80px">
                <el-form-item label="中文释义" prop="wmean">
                    <el-input v-model="form.wmean" style="width: 50%;"></el-input>
                </el-form-item>
                <el-form-item label="日语书写" prop="wwrite">
                    <el-input v-model="form.wwrite" style="width: 30%;"></el-input>
                </el-form-item>
                <el-form-item label="日语发音" prop="wread">
                    <el-input v-model="form.wread" style="width: 50%;"></el-input>
                </el-form-item>
                <el-form-item label="分组">
                    <el-select v-model="form.groupId" clearable placeholder="分组">
                        <el-option v-for="item in groupObjs" :key="item.groupId" :label="item.name" :value="item.groupId"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="所属课程">
                    <el-select v-model="form.classId" clearable placeholder="课程">
                        <el-option v-for="item in classObjs" :key="item.classId" :label="item.name" :value="item.classId"></el-option>
                    </el-select>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button size="small" @click="modifyDialogVisible = false">取消</el-button>
                <el-button size="small" type="primary" @click="confirmModifyWord">修改</el-button>
            </span>
        </el-dialog>

        <el-dialog
          title="导入单词"
          :visible.sync="uploadDialogVisible"
          width="30%">
            <el-upload
                class="upload-demo"
                drag
                action="#"
                multiple
                :limit="1" 
                :on-change="handleChange"
                :auto-upload="false"    
                style="margin-left: 90px;">
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                <div class="el-upload__tip" slot="tip">只能上传txt类型文件,且文件大小不超过1MB</div>
            </el-upload>
            <span slot="footer" class="dialog-footer">
                <el-button size="small" @click="uploadDialogVisible = false">取消</el-button>
                <el-button size="small" type="primary" @click="confirmUploadWords">上传</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<style>
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }

  .el-col {
    border-radius: 4px;
  }

  .bg-white {
    background: #ffffff;
  }

  .grid-content-1 {
    border-radius: 4px;
    min-height: 36px;
  }

  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>

<script>
export default {
    data() {
        return {
            addDialogVisible : false,
            modifyDialogVisible : false,
            uploadDialogVisible : false,
            tableData: [],
            classObjs: [],   // 课程
            classId: '',
            groupObjs: [],   // 分组
            groupId: '',
            uploadFile : null,
            pageVO :{
                'wmean'   : '',
                'classId' : '',
                'groupId' : '',
                'pageNo' : 0,
                'pageSize' : 10,
                'pageCount' : 0
            },
            form :{
                'id'     :'',
                'wmean'  :'',
                'wwrite' :'',
                'wread'  :'',
                'isRem'  : 0,
                'classId':'',
                'groupId':''
            },
            rules: {
                wmean :[
                    { required : true, message: '请输入中文释义', trigger : 'blur'}      
                ],
                wwrite: [
                    { required: true, message: '请输入日语书写', trigger: 'blur' },
                ],
                wread: [
                    { required: true, message: '请输入日语发音', trigger: 'blur' },
                ]
            }
        }
    },

    // 进入页面的时候预加载数据
    beforeMount () {
        this.loadWords();
    },

    methods :{
        loadWords () {   
            this.$axios.get(this.$httpUrl + '/jp/list/group').then( res => {
                if (res.data.code === 0) {
                    this.groupObjs = res.data.data
                } else {
                    this.$message({
                        type: 'error',
                        message : '获取分组信息失败'
                    })
                }          
            })

            this.$axios.get(this.$httpUrl + '/jp/list/class').then(res => {
                if (res.data.code === 0) {
                    this.classObjs = res.data.data
                } else {
                    this.$message({
                        type: 'error',
                        message : '获取课程信息失败.'
                    })
                }          
            })

            this.loadData()
        },

        handleSizeChange(size) {
            this.pageVO.pageSize = size
            this.loadData()
        },

        handleCurrentChange(currentPage) {
            this.pageVO.pageNo = currentPage
            this.loadData()
        },

        loadData () {
            this.$axios({
                url : this.$httpUrl + '/jp/list',
                method : 'post',
                data : this.pageVO
            }).then(res => {
                console.log(res)
                if (res.data.code === 0) { // 请求成功
                    this.tableData = res.data.data.data
                    this.pageVO.pageCount = res.data.data.count
                } else {
                    this.$message({
                        type: 'error',
                        message : '获取单词失败：' + res.data.data.message
                    })
                }          
            })
        },

        refresh () {

            this.pageVO.wmean = '' 
            this.pageVO.classId = ''
            this.pageVO.groupId = ''
            this.pageVO.pageNo = 1
            this.pageVO.pageSize = 10
            this.pageVO.pageCount = 0
            this.loadWords()
            this.$message({
                type : 'success',
                message : '刷新成功'
            })
        },

        search () {
            this.loadData()
        },

        add () {
            this.addDialogVisible = true
        },

        confirmAddWord () {

            this.$refs.form.validate((valid) => {
                if (valid) {
                    this.addDialogVisible = false
                    this.$axios({
                        url: this.$httpUrl + '/jp/add',
                        method: 'post',
                        headers:{
                            'Content-Type' : 'application/json'
                        },
                        data : this.form
                    }).then((res) => {
                        if (res.data.code === 0) {
                            this.$message({
                                type : 'success',
                                message : '新增单词成功'
                            })
                            this.loadWords();
                        } else {
                            this.$message({
                                  type: 'error',
                                  message : '新增单词失败：' + res.data.message
                            })
                        }
                        this.resetForm();
                    })
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });    
        },

        removeWord (rowData) {
            this.$confirm('是否删除单词 ' + rowData.wwrite + '?', '删除单词', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {

              this.$axios({
                  url: this.$httpUrl + '/jp/delete/' + rowData.id,
                  method: 'post'
              }).then((res) => {
                  if (res.data.code === 0) {
                      this.tableData = res.data.data
                      this.$message({
                          type: 'success',
                          message: '删除成功!'
                      })
                      this.loadWords()
                  } else {
                      this.$message({
                            type: 'error',
                            message : '删除单词失败'
                      })
                  }
              })
            }).catch(() => {
                  this.$message({
                  type: 'info',
                  message: '已取消删除'
                });          
            });
        },

        modifyWord (rowData) {
            this.form.id = rowData.id
            this.form.wread = rowData.wread
            this.form.wwrite = rowData.wwrite
            this.form.wmean = rowData.wmean
            this.form.isRem = rowData.isRem
            this.form.classId = rowData.classId
            this.form.groupId = rowData.groupId
            this.modifyDialogVisible = true     
        },

        confirmModifyWord () {
            this.$refs.form.validate((valid) => {
                if (valid) {
                    this.modifyDialogVisible = false
                    this.$axios({
                        url: this.$httpUrl + '/jp/update',
                        method: 'post',
                        headers:{
                            'Content-Type' : 'application/json'
                        },
                        data : this.form
                    }).then((res) => {
                        if (res.data.code === 0) {
                            this.$message({
                                type : 'success',
                                message : '修改单词成功'
                            })
                            this.loadWords();
                        } else {
                            this.$message({
                                  type: 'error',
                                  message : '修改单词失败：' + res.data.message
                            })
                        }
                    })
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });    
        },

        handleChange (file) {
            
            if (file.size === 0) {
                this.$notify({
                    title: '失败',
                    message: '不存在上传文件',
                    type: 'error',
                    duration: 2000
                    })
                return false
            }

            this.uploadFile = file
        },

        confirmUploadWords () {
            let fd = new FormData();
            fd.append('file', this.uploadFile.raw); // 传文件
            this.$axios({
                url: this.$httpUrl + '/jp/upload',
                method: 'post',
                headers:{
                    'Content-Type' : 'multipart/form-data'
                },
                timeout : 20000,
                data : fd
            }).then((res) => {
                if (res.data.code === 0) {
                    this.$message({
                        type : 'success',
                        message : '文件上传成功'
                    })
                    this.loadWords();
                    this.uploadDialogVisible = false
                } else {
                    this.$message({
                        type: 'error',
                        message : '文件上传失败'
                    })
                }
            })					
        },
      
        // 重置表单
        resetForm() {
            this.form.classId = ''
            this.form.groupId = ''
            this.$refs.form.resetFields();
        },

        importWords() {
            this.uploadDialogVisible = true
        }
    }

}
</script>