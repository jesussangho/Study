# mysql_study

## Database

### CRUD

    Input
    - Create
    - Update
    - Delete

    Output
    - Read

### Database ranking TOP 10 (2021.04.01)

![image](https://user-images.githubusercontent.com/66219179/113276733-18898d80-931b-11eb-943e-717d92080f68.png)

### WSL2 MySQL Setup

    > sudo apt update
    > sudo apt install mysql-server
    > sudo service mysql start
    > sudo mysql
    > ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
    > FLUSH PRIVILEGES;

### WSL2 Open Ports

    > nmap localhost
