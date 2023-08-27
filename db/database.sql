CREATE DATABASE IF NOT EXISTS companydb;

USE companydb

CREATE TABLE employee(
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) DEFAULT NULL,
    salary INT(5) DEFAULT NULL,
    PRIMARY KEY (id)
);

DESCRIBE desployee;

INSERT INTO employee VALUES
    (1,'Joe', 1000),
    (2,'Henry', 1000),
    (3,'Sam', 1000),
    (4,'Max', 1000);
    