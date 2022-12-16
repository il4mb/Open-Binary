class Biner {

    constructor(bin) {

        this.value = bin;
    }

    sumWith(bin) {

        const mathAmount = this.__match_the_amount__(this.value, bin),
            a = mathAmount[0].split(''),
            b = mathAmount[1].split('');

        let addition = "",
            carry = 0;

        for (let x = (a.length - 1); x >= 0; x--) {

            let i = Number(a[x]),
                ii = Number(b[x]);

            let isum = carry + i + ii;

            if (carry > 0) carry -= 1;

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

            if (x == 0 && carry > 0) addition += carry;
        }

        this.value = this.__flip__(addition);
    }

    subWith(bin) {

        const mathAmount = this.__match_the_amount__(this.value, bin),
            a = mathAmount[0].split(''),
            b = mathAmount[1].split('');

        let deducted = "",
            borrow = 0;

        for (let x = (a.length - 1); x >= 0; x--) {

            let i = Number(a[x]),
                ii = Number(b[x]);

            // if it can't be reduce
            if( i < ii) {

                // collect unborrowable index elements
                let notEnaught = [];

                for (let _x = x; x > 0; _x--) {

                    if (Number(a[_x]) > 0 ) {
                        a[_x] = '0'; // replace borrowed value to zero
                        borrow += 1;
                        break; // exit loop
                    }

                    // add index unborrowable
                    notEnaught.push(_x);
                }

                // replace unborrowable element to 1
                notEnaught.forEach ( _x => {
                    a[_x] = '1';
                });
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

        this.value = this.__flip__(deducted);

    }

    __match_the_amount__(str1, str2) {

        let newStr1 = str1, newStr2 = str2;

        if (str1.length > str2.length) {

            newStr2 = "";

            for (let x = (str1.length - str2.length); x > 0; x--) {

                newStr2 += "0"

            }

            newStr2 = newStr2 + str2;


        } else {

            newStr1 = ""

            for (let x = (str2.length - str1.length); x > 0; x--) {

                newStr1 += "0"

            }

            newStr1 = newStr1 + str1

        }

        return [newStr1, newStr2];

    }

    __flip__(str) {
        let list = str.split(''),
            flip = "";

        for (let x = (list.length - 1); x >= 0; x--) {
            flip += list[x];
        }

        return flip;
    }

    toString() {
        return this.value;
    }

}