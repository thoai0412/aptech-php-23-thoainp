CREATE database aptech_php_05;

CREATE  TABLE aptech_php_05.Users (
	id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) UNIQUE
);
CREATE TABLE aptech_php_05.Passport (
	id INT PRIMARY KEY AUTO_INCREMENT,
    serial VARCHAR(255) UNIQUE,
    user_id INT,
    FOREIGN KEY(user_id) REFERENCES users(id)
);

INSERT INTO aptech_php_05.Users (name)
VALUES ('nam'),('tao thao'),('nu');

INSERT INTO aptech_php_05.Passport (serial, user_id)
VALUES ('a',3),('b',2),('c',1);
SELECT a.id, a.name, b.serial FROM
aptech_php_05.users AS a
JOIN
aptech_php_05.passport AS b
ON a.id = b.user_id
;
SELECT a.id, a.name, b.serial FROM
aptech_php_05.users AS a
JOIN
aptech_php_05.passport AS b
ON a.id = b.user_id
WHERE b.serial='b';


-- one to many
CREATE TABLE aptech_php_05.vehicles(
	id INT PRIMARY KEY AUTO_INCREMENT,
	bienso VARCHAR(10) UNIQUE,
    user_id INT,
    FOREIGN KEY(user_id) REFERENCES users(id)
 );