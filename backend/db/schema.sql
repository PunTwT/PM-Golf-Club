CREATE DATABASE IF NOT EXISTS pm_golf_club;
USE pm_golf_club;

CREATE TABLE admin (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    phone CHAR(10) NOT NULL
);

CREATE TABLE admin_account (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(255) NOT NULL, 
    email VARCHAR(50) NOT NULL,
    admin_id INT NOT NULL,
    FOREIGN KEY (admin_id) REFERENCES admin(id)
);

CREATE TABLE category (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(20) NOT NULL,
    status VARCHAR(10) NOT NULL
);

CREATE TABLE product (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    description VARCHAR(255),
    code CHAR(5) NOT NULL UNIQUE,
    brand VARCHAR(20) NOT NULL,
    price DECIMAL(7,2) NOT NULL,
    hand ENUM('RH', 'LH') NOT NULL,
    loft DECIMAL(3,1) NOT NULL, 
    flex ENUM('R', 'S', 'SR', 'X'),
    quantity INT NOT NULL,
    category_id INT NOT NULL,
    FOREIGN KEY (category_id) REFERENCES category(id)
);

CREATE TABLE product_image (
    id INT AUTO_INCREMENT PRIMARY KEY,
    url VARCHAR(255) NOT NULL,
    name VARCHAR(50),
    product_id INT NOT NULL,
    FOREIGN KEY (product_id) REFERENCES product(id)
);

CREATE TABLE product_management (
    admin_account_id INT NOT NULL,
    product_id INT NOT NULL,
    last_update DATETIME NOT NULL,
    edit_option ENUM('add', 'edit', 'delete') NOT NULL,
    FOREIGN KEY (admin_account_id) REFERENCES admin_account(id),
    FOREIGN KEY (product_id) REFERENCES product(id)
);

CREATE TABLE category_management (
    admin_account_id INT NOT NULL,
    category_id INT NOT NULL,
    last_update DATETIME NOT NULL,
    edit_option ENUM('add', 'edit', 'delete') NOT NULL,
    FOREIGN KEY (admin_account_id) REFERENCES admin_account(id),
    FOREIGN KEY (category_id) REFERENCES category(id)
);

-- Initial Essential Data
INSERT INTO category (id, name, status) VALUES
(1, 'Driver', 'In Stock'),
(2, 'Iron', 'In Stock'),
(3, 'Putter', 'In Stock'),
(4, 'Wedge', 'In Stock'),
(5, 'Fairway Wood', 'In Stock');