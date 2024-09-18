import inquirer from 'inquirer';
import {pool} from './db/connection';

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
    ])};

    try {
        await pool.query('INSERT INTO departments (name) VALUES ($1)', [answers.departmentName]);
        console.log(`Added ${answers.departmentName} to departments`);
    } catch (err) {
        console.error('Error adding department',err);
    };

    const addRole = async () => {
        const answers = await inquirer.prompt([
        {
            type:'input',
            name:'addRole',
            message: 'What role would you like to add?'
        },
        {
            type:
        }
        {
            type:'input',
            name:'addEmployee',
            message: 'What employee would you like to add?'

    },

        {
            type:'input',
            name:'updateEmployeeRole',
            message: 'What role would you like to update for the employee?'
        }, 

 
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
            name: "employeeRole",
            message: "What is the employee's role?",
            choices: [
                'Sales Lead',
                'Salesperson',
                'Lead Engineer',
                'Software Engineer',
                'Accountant',
                'Legal Team Lead',
                'Lawyer'
            ]
        },
        {
            type: "list",
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
        
        ])};
   


        const SelectedAction = (answers: any) => {}
