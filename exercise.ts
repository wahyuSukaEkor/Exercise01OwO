//exercise

//no1
//Find area of rectangle length =5 width = 3 . output 15
let _length: number = 5;
let _width: number = 3;
const areaRectangle: number = _length * _width;
console.log(areaRectangle);

//no2
//find primeter of rectangle. length =5 width = 3. output 16
const perimeterRectangle: number = 2 * (_length + _width);
console.log(perimeterRectangle);

//no3
//find diameter, circumference & area of circle. radius 5. output
//diameter 10, circumference = 31.4159, area = 78.539
let _radius: number = 5;
const _diameter: number = 2 * _radius;
const circumferenceCircle: number = 2 * Math.PI * _radius;
const areaCircle: number = Math.PI * _radius ** 2;
console.log(_diameter);
console.log(circumferenceCircle.toPrecision(6));
console.log(areaCircle.toPrecision(5));

//no4
//finnd angles of triangle if two angels are a= 80, b=65. output 35
let angelsOne: number = 80;
let angelsTwo: number = 65;
const angelsThree: number = 180 - (angelsOne + angelsTwo);
console.log(angelsThree);

//no5
//Write a code to convert days to years, months and days (Notes: 1 year : 365 days, 1 month : 30 days).
//Example : 400 days → 1 year, 1 month, 5 days
//Example: 366 days → 1 year, 0 month, 1 day
let dateOwo: number = 400;
const yearOwo: number = ~~(dateOwo / 365);
const monthOwo: number = Math.floor((dateOwo % 365) / 30); //parseInt salah karena bukan strings
const dayOwo: number = (dateOwo % 365) % 30;
console.log(yearOwo);
console.log(monthOwo);
console.log(dayOwo);
console.log(
  yearOwo + " year(s)" + " " + monthOwo + " month(s)" + " " + dayOwo + "day(s)"
);

//no6
//Write a code to get difference between dates in days.
//Example : date1 = 2022-01-20, date2 = 2022-01-22
//Output : 2
let dateSatu: Date = new Date("2022-01-20");
let dateDua: Date = new Date("2022-01-22");

//internet
const milliSec: number = Math.abs(dateDua.getTime() - dateSatu.getTime()); //nilai mutlak
const milToDay: number = Math.floor(milliSec / (1000 * 60 * 60 * 24)); // Math.floor -> pembulatan kebawah
console.log(milliSec);
console.log(milToDay);

//learn
console.log(dateDua.getFullYear() - dateSatu.getFullYear());
console.log(dateDua.getMonth() - dateSatu.getMonth());
console.log(Math.abs(dateDua.getDate() - dateSatu.getDate()));
