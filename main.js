

let dexFilePath = files.join(files.getSdcardPath(), '脚本', 'helloworld.dex')
log(files.exists(dexFilePath))
runtime.loadDex(dexFilePath);
importClass(com.autojs.Student);
let student = new Student('家', 38)
log(student.getName())
log(student.getAge())