
///////////////////Cau 1-5
var arr = [];
function buildArray() {
    var str = prompt("Enter a number (q to quit): ");
    while (str != "q" && str !="") {
        arr.push(Number(str));
        str = prompt("Enter a number (q to quit): ");
    }
    document.getElementById("arr").innerHTML = "<p>Input Array: [" + arr + "]</p>";
}
function printStats() {
    var sumPos = 0;
    var numPos = 0;
    var smallest = 0;
    var smallestPos = 1000;
    var lastEven = -1;

    for(const x of arr) {
        if (x >= 0) {
            numPos += 1;
            sumPos += x;
            if (x <= smallestPos) {
                smallestPos = x;
            }
        }
        if (x <= smallest) {
            smallest = x;
        }
        if (x%2 == 0) {
            lastEven = x;
        }
    }
        var res = "<p>Câu1:  Sum of positives: " + sumPos + "<br>" +
                    "Câu2:  Number of positives: " + numPos + "<br>" +
                    "Câu3:  The smallest number: " + smallest + "<br>" +
                    "Câu4:  The smallest positive number: " + smallestPos + "<br>" +
                    "Câu5:  The last even number: " + lastEven + "</p";

        document.getElementById("outStats").innerHTML = res;
}
/////////////////////Cau 6
function swapPosition() {
    var index1 = Number(prompt("Enter index 1 in range of (0, " + (arr.length - 1) + "): "));
    var index2 = Number(prompt("Enter index 2 in range of (0, " + (arr.length - 1) + "): "));

    res = "<p>Câu6: <br> Swapping elements at index " + index1 + " and " + index2 + "<br>"
    res += "Original Array: [" + arr + "]<br>";
    var temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
    res +=  "After swapping: [" + arr + "]</p>";

    document.getElementById("outSwap").innerHTML = res;
}   
/////////////////Cau 7
function sorting() {
    res = "<p>Câu7: Sorted array <br>[" + arr.sort(function(a, b){return a - b}) + "]</p>"
    document.getElementById("outSort").innerHTML =  res;
}
/////////////////////Cau 8
function isPrime(n)
{
    if (n <= 1)
        return false;
    for (let i = 2; i < n; i++)
        if (n % i == 0)
            return false;
 
    return true;
}
function firstPrime() {
    var p = -1;
    for(const x of arr) {
        if (isPrime(x)) {
            p = x;
            break;
        }
    }
    document.getElementById("outPrime").innerHTML = "<p>Câu8: <br> First prime in array: " + p + "</p>";
}
////////////////////Cau 9 va 10
function realArray() {
    var realArr = [];
    var numWhole = 0;
    var numPos = 0;
    var numNeg = 0;

    alert("We are going to build array of real numbers");
    var str = prompt("Enter a number (q to quit): ");

    while (str != "q" && str !="") {
        var num = Number(str);
        realArr.push(num);

        num >= 0 ? numPos++ : numNeg++;
        if (num%1 == 0) {numWhole++}     //(whole number)

        str = prompt("Enter a number (q to quit): ");
    }

    var res = "<p>Real Array: [" + realArr + "]<br><br>";
    res += "Cau9: Number of whole numbers: " + numWhole + "<br>Cau10: ";
    res += numPos >= numNeg ? "More positive numbers than negative numbers" : "More negative numbers than positive numbers";

    document.getElementById("outReal").innerHTML = res;
}