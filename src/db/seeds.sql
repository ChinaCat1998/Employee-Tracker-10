INSERT INTO departments (id, name) VALUES
    (1, 'Sales'),
    (2, 'Engineering'),
    (3, 'Finance'),
    (4, 'Legal')
;

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
    
INSERT INTO employees (id, first_name, last_name, role_id, manager_id) VALUES
    (1, 'John', 'Doe', 1, NULL),
    (2, 'Mike','Chan',2, 1),
    (3, 'Ashley', 'Rodriguez', 3, NULL),
    (4, 'Kevin', 'Tupin', 4, 3),
    (5, 'Kunal', 'Singh',5, NULL),
    (6, 'Nalia','Brown', 6, 5),
    (7, 'Sarah', 'Lourd', 7, NULL),
    (8, 'Tom', 'Allen', 8, 7)
    ;