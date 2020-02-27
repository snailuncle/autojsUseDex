package com.autojs;

public class UseJar {
    public static void main(String[] args) {
        Student student = new Student("家", 18);
        String name = student.getName();
        int age = student.getAge();
        System.out.println("学生名字: " + name + ", 年龄: " + age);
    }
}
