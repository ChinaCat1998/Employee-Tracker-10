DROP DATABASE IF EXISTS employee_tracker;

CREATE DATABASE employee_tracker;

SET search_path TO employee_tracker,public;

CREATE TABLE departments (
    id SERIAL PRIMARY KEY,
    name VARCHAR(30) NOT NULL
);

CREATE TABLE roles (
    id SERIAL PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    departments_id INT NOT NULL,
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


