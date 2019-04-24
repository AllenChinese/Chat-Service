## Socket 聊天室

### Information

> Chat-Service application build by Node.js（Express）、Socket.io、React。

### 开发

> 确保本地已经安装 mongodb & mongoose

#### 运行 MongoDB

启动 mongodb，默认数据库目录即为 /data/db，本项目中使用的数据库名为 dataDb：

```js
sudo mongod

# 如果没有创建全局路径 PATH，需要进入以下目录
cd /usr/local/mongodb/bin
sudo ./mongod
```

再打开一个终端进入执行以下命令：

```js
$ cd /usr/local/mongodb/bin
$ ./mongo
```

### Support

#### 一期功能清单

- [x] 每用户进入群聊会有昵称，进入时输入
- [x] 每进入群里的用户均可以发言
- [x] 实时更新所有的发言
- [x] 用户在加入群聊时会有提示
- [x] React 框架重写
- [ ] Express Node 接口便编写
- [ ] MongoDB 数据存储
- [ ] PM2 or Jenkins 发布
