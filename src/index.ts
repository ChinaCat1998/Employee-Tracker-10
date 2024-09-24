import inquirer from 'inquirer';
import {pool, connectTOOb} from './db/connection.js';


connectTOOb();

const promptActions = async () => {
const answers = await 
inquirer
    .prompt([
        {
            type: 'list',
            name: 'actions',
            message: "Please select an action",
            choices: [
                'View all departments',
                'View all roles',
                'View all employees',
                'Add a department',
                'Add a role',
                'Add an employee',
                'Update an employee role',
            ],
        }
    ]);
            

           if(answers.actions === 'View all departments') {
        await viewDepartments();
    } else if (answers.actions === 'View all roles') {
        await viewRoles();
    } else if (answers.actions === 'View all employees') {
        await viewEmployees();
    } else if (answers.actions === 'Add a department') {
        await addDepartment();
    } else if (answers.actions === 'Add a role') {
        await addRole();
    } else if (answers.actions === 'Add an employee') {
        await addEmployee();
    } else if (answers.actions === 'Update an employee role') {
        await updateEmployeeRole();
    } else {
        console.log ('Invalid field requirments');
    }

    promptActions();
    };     

    const viewDepartments = async ()=> {
        try {
            const res = await pool.query('SELECT * FROM departments');
            console.table(res.rows);
        } catch (err) {
            console.error('Error viewing departments',err);
        }
        };

    const viewRoles = async () => {
        try {
            const res = await pool.query('SELECT * FROM roles');
            console.table(res.rows);
        } catch (err) {
            console.error('Error viewing roles',err);
        }
        };

    const viewEmployees = async () => {
        try {
            const res = await pool.query('SELECT * FROM employees')
            console.table(res.rows);
        } catch (err) {
            console.error('Error viewing employees',err);
        }
        };

    const addDepartment = async () => {
        const answers = await inquirer.prompt([
        {
         type:'input',
            name:'departmentName',
            message: 'What department would you like to add?'
        },
    ]);
    try {
        await pool.query('INSERT INTO departments (name) VALUES ($1)', [answers.departmentName]);
        console.log(`Added ${answers.departmentName} to departments`);
    } catch (err) {
        console.error('Error adding department',err);
    };
    };
    const addRole = async () => {
        const answers = await inquirer.prompt([
        {
            type:'input',
            name:'title',
            message: 'What is the title of the role?',
        },
        {
            type: 'input',
            name: 'salary',
            message: 'What is the salary of the role?'
        },
        {
            type: 'list',
            name: 'departmentName',
            message: 'What is the department ID?',
            choices: ["Sales","Engineer","Finance", "Legal" ]

        },
    ]);
    try {
        await pool.query('INSERT INTO roles (title, salary, departments_name) VALUES ($1, $2, $3)',
            [answers.title, answers.salary, answers.departmentName]
         );
            console.log(`Added ${answers.title} to roles`);
        } catch (err) {
            console.error('Error adding role',err);
        }
    };

    const addEmployee = async () => {
        const answers = await inquirer.prompt([
    {
            type: 'input',
            name: "firstName",
            message: "What is the employee's first name?"
        },
        {
            type: 'input',
            name: "lastName",
            message: "What is the employee's last name?"
        },
        {
            type: "list",
            name: "role",
            message: "What is the employee's role?",
            choices: [
                'Sales Lead',
                'Salesperson',
                'Lead Engineer',
                'Software Engineer',
                'Accountant',
                'Legal Team Lead',
                'Lawyer',
            ]
        },
        {
            type: 'list',
            name: "employeeManager",
            message: "Who is the employee's manager?",
            choices: [
                'John Doe',
                'Mike Chan',
                'Ashley Rodriguez',
                'Kevin Tupik',
                'Malia Brown',
                'Sarah Lourd',
            ]
        },
    ]);

    try {
        await pool.query('INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4)',
            [answers.firstName, answers.lastName, answers.role, answers.employeeManager],
        );
        console.log(`Added ${answers.firstName} ${answers.lastName} to employees`);
    } catch (err) {
        console.error('Error adding employee',err);
    }
};
const updateEmployeeRole = async () => {
    const answers = await inquirer.prompt([
    {
        type: 'input',
        name: 'employeeId',
        message: "Enter the employee's ID to update:",
    },
    {
        type: 'input',
        name: 'newRoleId',
        message: "Enter the employee's role to update:",
    },
    ]);

    try {
        await pool.query('UPDATE employees SET role_id = $1 WHERE id = $2',
            [answers.newRoleId, answers.employeeId]),
            console.log(`Updated employee role to ${answers.newRoleId}`);
        } catch (err) {
            console.error('Error updating employee role',err);
        }};

promptActions();
