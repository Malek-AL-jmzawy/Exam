/*

PART 2 [SQL Queries]:

Type the correct SQL query below every question:

Q1) What is the query for displaying all the databases?
SHOW databases;
Q2) What is the query for using a specific database?
USE database_name;

Q3) What is the query for creating a new database called `meraki`?
CREATE database meraki;

Q4) What is the query for deleting a database called `meraki`?
drop database meraki;

Q5) What is the query for displaying all the tables for a database called `meraki`?
USE meraki;
SHOW TABLES;
Q6) What is the query for displaying the columns of a table called `users`?
DESCEIBES users;

Q7) What is the query to insert information into a table called `users` that has four columns (name, email, password, age)?
insert into users (name, email, password, age) VALUES (?,?,?,?);

Q8) What is the query to update the `name` of a user that has `info@meraki-academy.org` as an email?
UPDATE users SET name=? WHARE email=info@meraki-academy.org;

Q9) What is the query to delete a user that has `info@meraki-academy.org` as an email?
delete from users WHARE email=info@meraki-academy.org;

Q10) What is the query to perform a left join on two tables (users, posts) depending on the user_id? (user_id is a FK in `posts` table)
select * from users 
left join ON post.user_id=users.user_id;

Q11) What is the query to get all the users that their age ranges from 20-30 from the `users` table?
select * from users 
WHERE age between 20 AND 30;

*/