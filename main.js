/* var yobi = new Array();

yobi[0] = "日曜日";
yobi[1] = "月曜日";
yobi[2] = "火曜日";
yobi[3] = "水曜日";
yobi[4] = "木曜日";
yobi[5] = "金曜日";
yobi[6] = "土曜日";

//今日の日付データを取得し、それから曜日を取得する
var today = new Date();
var week  = today.getDay();

document.write("今日は"+yobi[week]+"です！"); */

/* let flg;
flg=confirm("色を変えますか？")
if(flg===true){
    document.bgColor = "red";
} */

/* var str;
str = prompt("input your name");
if(str=="")
{
    document.write("no input");
}
document.write("<center>");
document.write("ようこそ、" + str + "さん！");
document.write("</center>"); */

/* var x;

x = prompt("番号を入れてください　　1==>>mypage  2==>>andersen", "");

switch (x) {
    case "1":
        location.href = "mypage.html";
        break;

    case "2":
        location.href = "andersen_park.html";
        break;

    default:
        documnet.write("規定外の番号です");
        break;
} */

/* 
let x;
x = prompt("input number  0==>>mypage  other==>>close")
if (x == 0) {
    window.open("mypage.html", "");
} else {
    document.write("closed");
} */


/* var elem = document.getElementById("test");
elem.textContent = "これは成功"; */
var cnt=1;
cnt=parseInt(cnt)+1;
document.write(cnt+"回目の訪問です！");
document.cookie="counts="+cnt+";";