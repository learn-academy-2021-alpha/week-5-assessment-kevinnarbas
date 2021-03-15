# ASSESSMENT 5: Rails Practical Questions

1. What is the command to create a new Rails application with a Postgres database?

- $ rails new app_name_in_snakecase -d postgresql -T

2. Oops, I forgot to add a foreign key to my model. Describe the steps to remedy this mistake.

- You would create a new migration to add the new column
- Then you would go into the migration file 
- inside of the define you would add the migration definition that you want to do
- in this case we'd use add_column and it'd be add_column :table(plural), :column_name, :data_type
- then run a rails db:migrate 

3. What is the command to generate a Rails model for a person table with columns named shirt, pants, and shoes?

- $ rails g(enerate) model Person shirt:string pants:string shoes:string

4. What is the naming convention for generating a Rails model? What is the naming convention for the table that is generated with this command?

- naming convention is PascalCase singular. The naming convention of the table is lowercase plural

5. A Rails application is going to have two models. One is called Library and one is called Book. A library will have many books and a book will belong to a library. Which model would contain the foreign key? What would the foreign key column be named?

- the model that would have the foreign key would be the Book model. the column would be called library_id

6. What is the schema file in a Rails application? Can you modify the schema directly? Why or why not?

the schema file is a file that is a representation of the tables created.  it should not be modified directly because it would mess up some stuff between how the app sees the database and vice versa 