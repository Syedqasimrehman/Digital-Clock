/*
const before = new Date('December 28 2021 8:30:59')
const now = new Date();
// console.log(now.getTime(), before.getTime())

const diff =  now.getTime() - before.getTime();
console.log(diff)



const mins = Math.round(diff/1000 /60);
const hours = Math.round(mins/60);
const days = Math.round(hours/24);
// const mins = Math.round(diff/1000 /60);

console.log(mins,hours,days)
console.log(`this article was written ${days} ago`)

const timestemp = (1498999945823);
console.log(new Date(timestemp))

*/



// digital clock 

// const clock = document.querySelector('.Clock');

// const tick = () => {
//     const now = new Date();

//     const hrs = now.getHours();
//     const min = now.getMinutes();
//     const sec = now.getSeconds();

//     const html = `
// <span>${hrs}</span> :
// <span>${min}</span> :
// <span>${sec}</span>
// `

//     clock.innerHTML = html
// }

// setInterval is work for timer  
// setInterval(tick, 1000);




/*
const current = new Date();

// console.log(dateFns.isToday(current))

// using date formate 

console.log(dateFns.format(current , 'YYYY'))
console.log(dateFns.format(current , 'MMMM'))
console.log(dateFns.format(current , 'dddd'))
console.log(dateFns.format(current , 'Do'))
console.log(dateFns.format(current , 'Do dddd MMMM YYYY'))

const before = new Date('March 2 2022 12:00:00')

console.log(dateFns.distanceInWords(current , before, {addSuffix:true}))
*/




const hms = document.querySelector('.clock')

const thin = () => {
    const now = new Date();
    const days = ['Sun', 'Mon', 'Tue', 'Wen', 'Thu', 'Fri', 'Sat']
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    
    
    
    
    
    const hours = now.getHours();
    const mintes = now.getMinutes();
    const secounds = now.getSeconds();
    const day = days[now.getDay()];
    const month = months[now.getMonth()];
    const date = now.getDate();
    const html = `
    <span>${hours}</span> :
    <span>${mintes}</span> :
    <span>${secounds}</span> <hr>
    <span>${month}</span>
    <span>${day}</span>
    <span>${date}</span>
   `
    hms.innerHTML = html;
}
setInterval(thin, 1000)

const now = new Date();
console.log(now);