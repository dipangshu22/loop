const setdate='21 march 2026 10:00 pm'
const time=new Date(setdate)
const newdate=new Date()

let result=(Math.floor(time-newdate/1000))

let day=Math.floor(result/3600/24)
console.log(day)

