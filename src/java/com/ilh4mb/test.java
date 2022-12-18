package com.ilh4mb;

public class test {
 
    public static void main(String[] args) {
        
        OpenBinary binary = new OpenBinary("1011");

        System.out.print(binary);

        binary.sumWith("1111");


        System.out.print(" -> ");

        System.out.print(binary);
    }
}
