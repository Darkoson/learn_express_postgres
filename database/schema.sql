create database school_db ;

create table students(
    id serial primary key,
    firstname varchar(50),
    lastname varchar(500),
    age int
);