<template>
    <div>
        <div class="main">
            <div id="drop">
                点击此处或者将文件拖至此处上传
                <input type="file" id="upload" name="">
            </div>
            <div id="table"></div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {}
        },
        methods: {
            clearTable: function () {
                this.tableC.innerHTML = '';
            },
            makeTable: function (data) {
                this.clearTable();
                for (var index in data) { //遍历每个表
                    var table = document.createElement("table"),
                        tr = document.createElement("tr"),
                        td = document.createElement("td"),
                        keys = Object.keys(data[index][0]);
                    td.innerHTML = index + "数据";
                    td.colspan = keys.length;
                    tr.appendChild(td);
                    table.appendChild(tr);
                    tr = document.createElement("tr");
                    for (var i = 0, len = keys.length; i < len; i++) {
                        td = document.createElement("td");
                        td.innerHTML = keys[i];
                        tr.appendChild(td);
                    }
                    table.appendChild(tr);
                    for (var i = 0, len = data[index].length; i < len; i++) { //循环表中每条数据
                        tr = document.createElement("tr")
                        var item = data[index][i];
                        for (var col in item) {
                            td = document.createElement("td");
                            td.innerHTML = item[col];
                            tr.appendChild(td);
                        }
                        table.appendChild(tr);
                    }
                    this.tableC.appendChild(table);
                }
            },
            handleFile: function (files, callback) {
                var f = files[0],
                    reader = new FileReader(),
                    name = f.name;
                reader.onload = () => {
                    var data = event.target.result,
                        wb;
                    if (this.rAbs) {
                        wb = this.X.read(data, {type: 'binary'});
                    } else {
                        var arr = this.fixData(data);
                        wb = this.X.read(btoa(arr), {type: 'base64'});
                    }
                    callback && callback(this.to_json(wb));
                }
                if (this.rAbs) {
                    reader.readAsBinaryString(f)
                } else {
                    reader.readAsArrayBuffer(f);
                }
                this.upload.value = '';
            },

            fixdata: function (data) {
                var o = "", l = 0, w = 10240;
                for (; l < data.byteLength / w; ++l) o += String.fromCharCode.apply(null, new Uint8Array(data.slice(l * w, l * w + w)));
                o += String.fromCharCode.apply(null, new Uint8Array(data.slice(l * w)));
                return o;
            },
            to_json: function (workbook) {
                var result = {};
                workbook.SheetNames.forEach((sheetName) => {
                    var roa = this.X.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
                    if (roa.length > 0) {
                        result[sheetName] = roa;
                    }
                });
                return result;
            },
            handleClick: function () {
                this.upload.click();
            },
            handleChange: function (callback) {
                if (this.upload.value) {
                    this.handleFile(event.target.files, callback);
                }
            },

            handleDrop: function (callback) {
                event.preventDefault();
                event.stopPropagation();
                this.handleFile(event.dataTransfer.files, callback);
            },

            handleDragOver: function () {
                event.preventDefault();
                event.stopPropagation();
                this.drop.className = 'active';
            },

            handleDragLeave: function () {
                this.drop.className = '';
            }
        },
        mounted() {
            this.drop = document.getElementById("drop");
            this.upload = document.getElementById("upload");
            this.tableC = document.getElementById("table");
            this.X = XLSX;
            this.rAbs = typeof FileReader !== "undefined" && typeof FileReader.prototype !== "undefined" && typeof FileReader.prototype.readAsBinaryString !== "undefined";
            this.drop.addEventListener('click', this.handleClick, false);
            this.drop.addEventListener('dragover', this.handleDragOver, false);
            this.drop.addEventListener('dragleave', this.handleDragLeave, false);
            this.drop.addEventListener('mouseout', this.handleDragLeave, false);
            this.drop.addEventListener('drop', function () {
                this.handleDrop(function (data) {
                    this.makeTable(data);
                })
            }, false);
            this.upload.addEventListener('change', () => {
                this.handleChange((data) => {
                    this.makeTable(data);
                })
            }, false);
        }
    }
</script>

<style scoped>

    .main {
        overflow: hidden;
        margin: 0 0 20px;
    }

    #drop {
        width: 300px;
        height: 200px;
        text-align: center;
        line-height: 200px;
        cursor: pointer;
        border: 3px dashed #f00;
        float: left;
    }

    #drop.active {
        border-color: #f00;
    }

    #upload {
        display: none;
    }

    #table {
        margin-left: 20px;
        float: left;
    }

    a {
        font-size: 15px;
        text-decoration: none;
        color: #000;
    }
</style>
