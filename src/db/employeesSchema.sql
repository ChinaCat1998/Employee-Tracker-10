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