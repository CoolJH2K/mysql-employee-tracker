// Require express, inquirer, and mysql2
const express = require("express");
const inquirer = require("inquirer");
const mysql = require("mysql2");
const connectDb = require("db/connection");
const DB = require("db/index");

// Create PORT
const PORT = process.env.PORT || 3001;
const app = express();

// Connect to employee_tracker_db
const db = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "",
        database: "employee_tracker_db"
    },
    console.log("Connected to the employee_tracker_db database")
);

// Set up options with inquirer
inquirer
    .prompt([
        {
            name: "start_prompt",
            message: "What would you like to do?",
            type: "list",
            choices: ["View All Employees", "Add Employee", "Update Employee Role", "View All Roles", "Add Role", "View All Departments", "Add Department", "Quit"]
        }
    ])
    .then((answers) => {
        // If the user chooses "Add Employee"
        if (Choice === "Add Employee") {
            inquirer
                .prompt([
                    {
                        name: "new_employee_first_name",
                        message: "What is the employee's first name?",
                        type: "input"
                    },
                    {
                        name: "new_employee_last_name",
                        message: "What is the employee's last name?",
                        type: "input"
                    },
                    {
                        name: "new_employee_role",
                        message: "",
                        type: "list",
                        choices: ["Sales Lead", "Salesperson", "Lead Engineer", "Software Engineer", "Account Manager", "Accountant", "Legal Team Lead", "Lawyer"]
                    },
                    {
                        name: "new_employee_manager",
                        message: "Who is the employee's manager?",
                        type: "list",
                        choices: ["John Doe", "Mike Chan", "Ashley Rodriguez", "Kevin Tupik", "Kunal Singh", "Malia Brown", "Sarah Lourd", "Tom Allen"]
                    }
                ])
                .then((answers) => {
                    console.log(`Added ${new_employee_first_name} ${new_employee_last_name} to the database`);
                })
          // If the user chooses "Add Role"
        } else if (Choice === "Add Role") {
            inquirer
                .prompt([
                    {
                        name: "new_role",
                        message: "What is the name of the role?",
                        type: "input"
                    },
                    {
                        name: "new_role_salary",
                        message: "What is the salary for the role?",
                        type: "input"
                    },
                    {
                        name: "new_role_department",
                        message: "Which department does the role belong to?",
                        type: "list",
                        choices: ["Engineering", "Finance", "Legal", "Sales", "Service"]
                    }
                ])
                .then((answers) => {
                    console.log(`Added ${new_role} to the database`)
                })
          // If the user chooses "Add Department"
        } else if (Choice === "Add Department") {
            inquirer
                .prompt([
                    {
                        name: "new_department",
                        message: "What is the name of the department?",
                        type: "input"
                    }
                ])
                .then((answers) => {
                    console.log(`Added ${new_department} to the database`);
                })
        }
    })