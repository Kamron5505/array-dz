const fruits = ["Яблоко", "Банан", "Апельсин", "Груша"];
let message = alert("boshlanishdagi arrayning uzunligi: " + fruits.length);
let con = confirm("siz arrayning malumotini olib tashlamoqchimisz? ");

if (con === true) {
  fruits.pop();
} else {
  alert("siz arrayning malumotini olib tashlamadi");
}
console.log(fruits);
