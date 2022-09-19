这是 vue3 中的 base.md

# 使用 vuepress2.0 打造静态博客网站

> [vuepress官方文档](https://v2.vuepress.vuejs.org/zh/)https://v2.vuepress.vuejs.org/zh/

## 一. 初始化项目

1. 建立一个git仓库并clone下来


2. 进入新目录
```
cd book
```


3. 初始化项目
```sh
npm init
// 一直按回车即可

npm install -D vuepress@next
```



4. 使用vscode(用什么编辑器随便你)打开项目,在 package.json 中添加以下
```json
{
  "scripts": {
    "dev": "vuepress dev docs",
    "build": "vuepress build docs",
  }
}
```


可以看到npm脚本中已经有我们刚刚添加的运行命令.

5. 在根目录新建文件 `.gitignore`,把以下三行代码复制进去**并保存**

```
node_modules
.temp
.cache
```
 
 对比上面两个步骤的图片,git忽略了依赖包的文件后瞬间减少了.

6. 在根目录新建文件夹 `docs`
7. 在 `docs` 文件夹下新建文件 `README.md`, 在文件中随便写点什么






8. 运行命令 `npm run dev`或点击左下角快捷运行



至此,基础框架已经搭建完成,接下来可以配置vuepress并开始写博客了.