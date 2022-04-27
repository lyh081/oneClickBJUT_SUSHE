# oneClickBJUT：一键登录中蓝校区无线网

## 背景

最近因为疫情被封在中蓝宿舍。中蓝的无线网每次都要登录两遍，而且每次电脑一息屏就要重新登录，非常烦人。于是就写了一个Chrome插件，保存信息之后，就可以一键登录了。

## 安装

1. 下载源码

   仓库地址：[oneClickBJUT_SUSHE](https://github.com/lyh081/oneClickBJUT_SUSHE）

   或者：

   ```shell
   git clone git@github.com:lyh081/oneClickBJUT_SUSHE.git
   ```

2. 安装拓展

   由于Chrome禁止安装未上传Chrome商店的crx格式插件，所以需要在开发者模式中加载已经解压的扩展程序。

   1. 在扩展程序界面（地址栏输入chrome://extensions/）点击右上角开发者模型按钮打开 **开发者模式；**
   
   2. 选择左上角 **加载已解压的扩展程序** ，在弹出框中选择下载的仓库文件夹中的extension文件夹。
   
      💡 **一定选择extension文件夹！**
   
   3. 关闭开发者模式

## 使用

在扩展页面中填入学号、BJUT_SUSHE_5/2.4G密码、校园网网关密码（lgn.bjut.edu.cn），**点击保存** ，再选择一键登录。

💡 **两个密码一样的话，校园网网关密码可不填**

## 说明

1. 学号、密码等信息均保存在chrome本地，本拓展不存储任何个人信息。
2. 吐槽一下BJUT_SUSHE_5/2.4G登录的时候直接把学号密码明文放在GET的查询里面……

