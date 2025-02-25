let str="sv university"
// console.log(str.length);
// console.log(str[str.length-1]);

// str[0]="p"// its cannot change becase striing is immutale

// let arr =[1,2,3, "abs",1.2,true,null,undefined,""]
// arr[3]="xyz" // your change element like this store in array
// arr[3][0]="x"// you channot chnage string

// arr.push("push");
// arr[4]="push"
// arr.pop()
// console.log(arr);

//object

const obj={
    praveen :{
        class:"btch",
        roll:34,
        subject:[
            "DBMS","NM","CN","FULL STCAK"
        ]

    },
    subhankar:{
        class:"btch",
        roll:23,
        subject:[
            "DBMS","NM","CN","FULL STCAK"
        ]

    },
    1:"SUV"
}
obj["1"]="yygfyg"
console.log(obj);
delete obj["praveen"]
obj.cricket={
    class:"btch",
        roll:23,
        subject:[
            "DBMS","NM","CN","FULL STCAK"
        ]
}
console.log(obj);
