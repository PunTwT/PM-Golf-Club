create database if not exists pm_golf_club;
use pm_golf_club;

create table admin(
	id int auto_increment primary key,
    name varchar(50) not null,
    phone char(10) not null
);

create table admin_account(
	id int auto_increment primary key,
    username varchar(50) not null,
    password varchar(50) not null,
    email varchar(50) not null,
    admin_id int not null,
    foreign key (admin_id) references admin(id)
);

create table category(
	id int auto_increment primary key,
    name varchar(20) not null,
    status varchar(10) not null
);

create table product(
	id int auto_increment primary key,
    name varchar(100) not null,
    description varchar(255),
    code char(5) not null unique,
    brand varchar(20) not null,
    price decimal(7,2) not null,
    hand enum('RH', 'LH') not null,
    loft decimal(3,1) not null,
    flex enum('R', 'S', 'SR', 'X'),
    quantity int not null,
    category_id int not null,
    status VARCHAR(20) NOT NULL DEFAULT 'Out of Stock',
    foreign key (category_id) references category(id)
);

create table product_image(
	id int auto_increment primary key,
    url varchar(255) not null,
    name varchar(50),
    product_id int not null,
    foreign key (product_id) references product(id)
);

create table product_management(
	admin_account_id int not null,
    product_id int not null,
    last_update datetime not null,
    edit_option enum('add', 'edit', 'delete') not null,
    foreign key (admin_account_id) references admin_account(id),
    foreign key (product_id) references product(id)
);

create table category_management(
	admin_account_id int not null,
    category_id int not null,
    last_update datetime not null,
    edit_option enum('add', 'edit', 'delete') not null,
    foreign key (admin_account_id) references admin_account(id),
    foreign key (category_id) references category(id)
);

-- Initial Essential Data
INSERT INTO category (id, name, status) VALUES
(1, 'Driver', 'In Stock'),
(2, 'Iron', 'In Stock'),
(3, 'Putter', 'In Stock'),
(4, 'Wedge', 'In Stock'),
(5, 'Fairway Wood', 'In Stock');