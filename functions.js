
// filter 

const age = [43,21,32,33,26,45,35,19,15,16,11,10,18,13]

const aboveTeen = age.filter((num)=>(num>18))
const time = age.reduce((acc,item)=>acc+item, 0)
console.log(time);
console.log(aboveTeen);

// map
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

const publishAfter2000 = books.filter((item)=>(item.publish>2000))
console.log(publishAfter2000);

const getAllTitles = books.map((item)=>item.title)
console.log(getAllTitles);


const evens = [2,4,6,8]
const aboveTen = evens.map((nums=>(nums*10)))
console.log(aboveTen)

// reduce 

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const totalBill = shoppingCart.reduce((acc,item)=>( acc+item.price),0)

console.log(totalBill);