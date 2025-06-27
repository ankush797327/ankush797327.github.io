db.employees.getIndexes()


db.employees.createIndex({email : 1})

db.employees.dropIndex("email_1") // To delete the index

db.employees.find({email : "john@gmail.com"}).explain("executionStats")