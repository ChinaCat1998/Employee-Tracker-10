DROP DATABASE IF EXISTS Employee_Tracker;

CREATE DATABASE Employee_Tracker;

DROP SCHEMA IF EXISTS EmployeeTrackerSchema;

CREATE SCHEMA EmployeeTrackerSchema;

set search_path to EmployeeTrackerSchema;

CREATE TABLE departments (
    id SERIAL PRIMARY KEY,
    name VARCHAR(30) NOT NULL
);

CREATE TABLE roles (
    id SERIAL PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL(10, 2) NOT NULL,
    departments_id INT,
    FOREIGN KEY (departments_id) 
    REFERENCES departments(id)
    ON DELETE SET NULL
);

CREATE TABLE employees (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT,
    FOREIGN KEY (role_id) 
    REFERENCES roles(id)
    ON DELETE SET NULL,
    FOREIGN KEY (manager_id) 
    REFERENCES employees(id)
    ON DELETE SET NULL
);
