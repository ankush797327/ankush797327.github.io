


db.employees.find({department:"IT"})

db.employees.find({department: {$eq :"IT"}})

db.employees.find({salary: {$gt : 3000}})

db.employees.find({salary: {$gte : 3000}}) // gte stands for greater than and equals to 

db.employees.find({salary: {$lt : 3000}}) // lt stands for less than

db.employees.find({salary: {$lte : 3000}})

db.employees.find({salary: {$ne : 3000}})  // ne stands for not equals to 

db.employees.find({salary : {$ne : 3000}},{name: 1})


db.employees.find({},{}) // first bracket is for operation and second bracket is for the which field we want to display 

db.employees.find({salary: {$ne:3000},department : {$eq: "IT"}},{name:1})

lpua> db.employees.find({salary: {$gt:3000},department : {$eq: "IT"}},{name:1})

lpua> db.employees.find({salary: {$gt:3000},department : {$eq: "IT"}},{name:1}).limit(1)

// Display the top to highest paid employee

db.employees.find().sort({salary: -1}).limit(2)



db.employees.find({
    $or:[{salary:{$gt : 3000},department:{$eq:"IT"}}]
})


db.employees.find({
    $and:[{salary:{$gt : 3000},department:{$eq:"IT"}}]
})