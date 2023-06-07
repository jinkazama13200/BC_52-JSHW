// Bài tập 1
// tính tiền lương nhân viên
function click1() {
  let salary = +document.getElementById("input-salary").value;
  let day = +document.getElementById("input-day").value;

  let result1 = salary * day;
  if (result1 > 0) {
  } else {
    alert("Hãy nhập số tiền lương, số ngày vào");
  }
  display(result1, "xuatVND");
}

// Gọi hàm hiển thị
// function display(result1) {
//   document.getElementById(
//     "xuatVND"
//   ).innerHTML = `${result1.toLocaleString()} VND`;
// }
// -------
// Bài Tập 2
// tính tỷ giá USD
function click2() {
  let usd = +document.getElementById("input-usd").value;
  if (usd > 0) {
    usd *= 23500;
  } else {
    alert("Hãy nhập số USD vào");
  }

  display(usd, "xuatUSD");
}
// Gọi hàm hiển thị
function display(usd, id) {
  document.getElementById(id).innerHTML = usd.toLocaleString();
}
// ----------
// Bài tập 3
// tính diện tích chu vi hcn
function click3() {
  let cdai = +document.getElementById("input-cdai").value;
  let crong = +document.getElementById("input-crong").value;

  let dtich = cdai * crong;
  let chuvi = (cdai + crong) * 2;

  if (dtich > 0) {
  } else if (chuvi > 0) {
  } else {
    alert("Hãy nhập chiều dài, chiểu rộng vào để tính");
  }
  display(dtich, "kqdtich");
  display(chuvi, "kqchuvi");
}
// -----------------
// Bài tập 4
// tính giá trị trung bình
function ex4() {
  let num1 = +document.getElementById("input-num1").value;
  let num2 = +document.getElementById("input-num2").value;
  let num3 = +document.getElementById("input-num3").value;
  let num4 = +document.getElementById("input-num4").value;
  let num5 = +document.getElementById("input-num5").value;

  let result4 = (num1 + num2 + num3 + num4 + num5) / 5;
  if (result4 > 0) {
  } else {
    alert("Hãy nhập số vào để tính giá trị trung bình");
  }
  display(result4, "kqtrungbinh");
}
// ------------------
// Bài tập 5
// Tính tổng 2 ký số
function ex5() {
  let sum = +document.getElementById("input-sum").value;

  let sum1 = sum % 10;
  let sum2 = sum / 10;
  let sumTotal = Math.round(sum1 + sum2);

  if (sumTotal > 0) {
  } else {
    alert("Hãy nhập 2 chữ số vào để tính");
  }
  display(sumTotal, 'tong');
}
