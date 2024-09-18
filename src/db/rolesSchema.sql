CREATE TABLE roles (
    id SERIAL PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL(10, 2) NOT NULL,
    departments_id INT,
    FOREIGN KEY (departments_id) 
    REFERENCES departments(id)
    ON DELETE SET NULL
);
INSERT INTO roles (id, title, salary, departments_id ) VALUES
    (1, 'Sales Lead', 100000, 1),
    (2, 'Sales Person', 80000, 1),
    (3, 'Lead Engineer', 150000, 2),
    (4, 'Software Engineer', 120000, 2),
    (5, 'Account Manager', 160000, 3),
    (6, 'Accountant', 120000, 3),
    (7, 'Legal Team Lead', 250000, 4),
    (8, 'Lawyer', 190000, 4)
    ;
    