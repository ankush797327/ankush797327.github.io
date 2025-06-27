
// We use aggregate in place of find 

// it is equalant to find but have some more features


// what is aggregation pipeline 



db.employees.aggregate([
    {$match : {department : "IT"}},
    {$project : {name : 1,salary : 1}},
    {$sort : {salary :1}}
])

db.employees.aggregate([
    {$match : {department : "IT"}},
    {$project : {name : 1,salary : 1}},
    {$sort : {salary :1}},
    {$limit : 3}
])


db.employees.aggregate([
    {$group:
        { _id : "$department",
            total : {$sum : "$salary"}
        }
    }
])


db.employees.aggregate([
    {$project : {name : 0}}
])


db.employees.aggregate([
    {$project : {empName : "$name"}}
])


db.employees.aggregate([
   {$project : {_id: 0,
    name :1,
    salary : 1,
    bonus : {$multiply : ["$salary",2]}
   }
},
])

// dipplay name email and salary for all the it employees


db.employees.aggregate([
   { $match : { department : "IT"}},
   {$project : {name : 1, _id : 0, salary : 1}}
])


// display annual salary of all employees


db.employees.aggregate([
    {$project :{name :1, _id : 0,salary:1,
    bonus : {$multiply : ["$salary",12]}}}

])


// display employees whose salary is greater
// than 3000 and show CTC instead of salary field 



// test> use students
// switched to db students
// students> db.students.insertOne({name :"Alice Johnson",age : 23,course:["Math","Science"],enrolled: true})
// students> db.students.insertMany([{name: "Tom",age : 22},{name:"Sara",age : 24},{name:"Mike",age : 21}])
//calculate average age of students
// Update the age of the student named "Alice JohnSon" to 24
// Add a new course "Chemistry" to a student's courses array, only if it doesn't already exists

// Increment age by 1 for all enrolled students
// Returns only name and age for students, excluding _id 
// Remove a course "Physics" from Alice's courses 



// From two dfferent fields 

db.students.aggregate([
    {$lookup : {
        from : "address",
        localFields: "_id",
        foreignField : "studentID",
        as : "address"
    }},
    {$unwind : "$address"}, // for making in the same part 
    {$project : {name :1 , "address.city" :1,"address.country": 1}}
])




db.employees.aggregate([
    {$project : {name :1, location :1}},
    {$unwind : "$location"}
])