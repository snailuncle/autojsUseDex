# autojsUseDex

## IDEA打包jar包详尽流程
### 参考链接: https://blog.csdn.net/weixin_42089175/article/details/89113271

1. 打开菜单栏File-Project Structure
2. 点击Artifacts
3. 点击 "+" - JAR - From module with depenencies
4. Main Class选择自己要打包的类
5. 点击ok
6. 菜单栏 点击Build-Artifacts
7. 点击build
8. 此时Output directory便出现了jar包
9. 把jar转成dex`dx --dex --output classes2.dex base.jar`
10. 测试jar包是否可用`java - jar jar包名称`

## 其他问题
###. Intellij idea 出现错误 error:java: 无效的源发行版: 11    
链接: https://www.cnblogs.com/wat1314/p/11053159.html

1. ctrl+shift+alt+s打开项目结构点击Modules
2. 找到Language level 点击下拉箭头出现不同的版本号
3. 选择和你项目配置的jdk版本一致的版本语言（我的是1.8版本）