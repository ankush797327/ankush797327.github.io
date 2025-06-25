

db.employees.insertOne({
    name:"John Smith",
    email: "john@gmail.com",
    department:"IT",
    salary: 1456,
    location: ["FL","OH"],
    date : Date()
})


db.employees.find();


db.employees.insertMany([{
    name:"Mikw Joseph",
    email:"mike@gmail.com",
    department:"IT",
    salary:2456,
    location:["FL","TX"],
    date:Date()
},
{
    name:"Cathey G",
    email:"cathey@gmail.com",
    department:"IT",
    salary:3456,
    location:["Az","TX"],
    date:Date()
},
])

lpua> db.employees.find().skip(1)
lpua> db.employees.find().limit(1)

db.employees.find().skip(1).limit(1)

lpua> db.employees.find().sort({name:1}) // For ascending order

lpua> db.employees.find().sort({name:-1}) // For descending order

lpua> db.employees.find().sort({name:-1}).limit(1)



db.employees.find({department : "IT"})


db.employees.find({},{}) // second {} brackets is used to display the specific field


db.employees.find({},{name:1})

db.employees.find({},{_id: 0,name:1}) // if we don't want to show the _id 

db.employees.find({},{_id: false,name:true}) // 0 is false and 1 is true 
db.employees.find({},{_id: 0,name:1,department: 1})


db.employees.find({location :"FL"})

db.employees.find({},{EmpName:"$name"})