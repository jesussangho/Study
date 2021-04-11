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

### Creating and Selecting a Database

    > mysql> CREATE DATABASE [DB 명];
    > SHOW DATABASES;
    > USE [DB 명];

### SQL

    Structured (구조화)
    Query (질의)
    Language (언어)

### TABLE, 표

![image](https://user-images.githubusercontent.com/66219179/113300139-9ad47a80-9338-11eb-9cf4-f575ff9a6efb.png)

### test.sql

![image](https://user-images.githubusercontent.com/66219179/113303865-75e20680-933c-11eb-979e-bd6504014e04.png)

### Data Types

    INT - 정수 (소수점이 없는, ex) -147, 0)
    NOT NULL - 데이터가 없으면 안된다
    AUTO_INCREMENT - 자동 증가
    VARCHAR - 가변적인 문자
    TEXT - 텍스트
    Date and Time Data Types - 날짜, 시간
    - DATE : '0000-00-00'
    - TIME : '00:00:00'
    - DATETIME : '0000-00-00 00:00:00'
    - TIMESTAMP : '0000-00-00 00:00:00'
    - YEAR : 0000
