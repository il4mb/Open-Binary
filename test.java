
public class test {

    public static void main(String[] args) {
        
        OpenBiner binary = new OpenBiner("0101");
        
        System.out.println(binary);

        binary.sumWith("01111");

        System.out.println(binary);

        binary.subWith("01111");

        System.out.println(binary.toInteger());

    }

}