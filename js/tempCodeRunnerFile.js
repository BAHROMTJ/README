let a="I have never seen a thin person drinking Diet Coke.";

for (let index = 0; index < a.length; index++) {
    if (a[index]=="a") {
        a[index]=" ";
    }
    console.log(a[index]);
}