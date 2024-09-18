

DROP DATABASE IF EXISTS Employee_Tracker;

CREATE DATABASE Employee_Tracker;

USE Employee_Tracker;

DROP SCHEMA IF EXISTS EmployeeTrackerSchema;

CREATE SCHEMA EmployeeTrackerSchema;

set search_path to EmployeeTrackerSchema;


CREATE TABLE departments (
    id SERIAL PRIMARY KEY,
    name VARCHAR(30) NOT NULL
);

INSERT INTO departments (id, name) VALUES
    (1, 'Sales'),
    (2, 'Engineering'),
    (3, 'Finance'),
    (4, 'Legal')
;
