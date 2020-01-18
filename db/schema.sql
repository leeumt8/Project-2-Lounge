CREATE DATABASE lounge_db;
USE lounge_db;

DROP TABLE IF EXISTS items;
CREATE TABLE items (
  item_id int(11) NOT NULL AUTO_INCREMENT,
  item_name varchar(255) NOT NULL,
  item_price int(11) NOT NULL,
  item_amount int(11) NOT NULL,
  item_desc text NOT NULL,
  item_img varchar(250) NOT NULL,
  user_id int(11) NOT NULL,
  PRIMARY KEY (item_id),
  KEY item_pk_idx (user_id),
  CONSTRAINT user_id FOREIGN KEY (user_id) REFERENCES users (id)
) 

DROP TABLE IF EXISTS users;

CREATE TABLE users (
  id int(11) NOT NULL AUTO_INCREMENT,
  user_name varchar(255) NOT NULL,
  user_email varchar(255) NOT NULL,
  user_password varchar(255) NOT NULL,
  user_totalAssets int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (id)
) 
