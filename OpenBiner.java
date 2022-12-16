import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public final class OpenBiner {

    public String binary;

    OpenBiner(String binary) {

        this.binary = binary;
    }

    public void sumWith(String bin) {

        List<String> mList = __match_the_amount__(this.binary, bin);
        char[] a = mList.get(0).toCharArray();
        char[] b = mList.get(1).toCharArray();

        String addition = "";
        int carry = 0;

        for (int x = (a.length - 1); x >= 0; x--) {

            final int i = Integer.parseInt(String.valueOf(a[x])),
                    ii = Integer.parseInt(String.valueOf(b[x]));

            final int isum = carry + i + ii;

            if (carry > 0)
                carry -= 1;

            if (isum == 3) {

                addition += "1";
                carry = 1;

            } else if (isum == 2) {

                addition += "0";
                carry += 1;

            } else if (isum == 1) {

                addition += "1";

            } else if (isum == 0) {

                addition += "0";

            }

            if (x == 0 && carry > 0)
                addition += String.valueOf(carry);
        }

        this.binary = this.__flip__(addition);
    }

    public void subWith(String bin) {

        List<String> mList = __match_the_amount__(this.binary, bin);
        char[] a = mList.get(0).toCharArray();
        char[] b = mList.get(1).toCharArray();

        String deducted = "";
        int borrow = 0;

        for (int x = (a.length - 1); x >= 0; x--) {
            final int i = Integer.parseInt(String.valueOf(a[x])),
                    ii = Integer.parseInt(String.valueOf(b[x]));

            // if it can't be reduce
            if( i < ii) {

                // collect unborrowable index elements
                List<Integer> notEnaught = new ArrayList<>();

                for (int _x = x; x > 0; _x--) {

                    if (Integer.parseInt(String.valueOf(a[_x])) > 0 ) {

                        a[_x] = '0'; // replace borrowed value to zero
                        borrow += 1;
                        break; // exit loop

                    }

                    // add index unborrowable
                    notEnaught.add(_x);

                }

                // replace unborrowable element to 1
                for (int _x : notEnaught ) {

                    a[_x] = '1';

                }
            }

            if (i == 1 && ii == 1 ) {

                deducted += "0";

            } else if( i == 1 && ii == 0 ) {

                deducted += "1";

            } else if(i == 0 && ii == 1 ) {

                // this value can't subtracted
                // so we need to check was borrowed

                if ( borrow > 0 ) { //if borrow is not zero add 1 to value

                    deducted += "1";
                    borrow -= 1;

                }

            } else if( i == 0 && ii == 0 ) {

                deducted += "0";

             }
        }

        this.binary = this.__flip__(deducted);
    }

    private List<String> __match_the_amount__(String str1, String str2) {

        List values = new ArrayList<>();
        values.add(str1);
        values.add(str2);

        if (str1.length() > str2.length()) {

            String newStr2 = "";
            int len = str1.length() - str2.length();

            for (int x = 0; x < len; x++) {
                newStr2 += "0";
            }

            newStr2 = newStr2 + str2;
            values.set(1, newStr2);

        } else {

            String newStr1 = "";
            int len = str2.length() - str1.length();

            for (int x = 0; x < len; x++) {
                newStr1 += "0";
            }

            newStr1 = newStr1 + str1;
            values.set(0, newStr1);

        }

        return values;
    }

    private String __flip__(String value) {
        char[] list = value.toCharArray();
        String flip = "";

        for (int x = (list.length - 1); x >= 0; x--) {
            flip += list[x];
        }

        return flip;
    }

    public int toInteger() {
        return Integer.parseInt(binary);
    }

    public String toString() {
        return binary;
    }

}
