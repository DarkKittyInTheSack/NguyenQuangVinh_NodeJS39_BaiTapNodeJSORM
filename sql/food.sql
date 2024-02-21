-- CREATE DATABASE foodDatabase;
USE userDatabase;

-- -- CREATE TABLE --

-- CREATE TABLE user(
--     user_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
--     full_name VARCHAR(100),
--     email VARCHAR(50),
--     password VARCHAR(100)
-- );

-- CREATE TABLE restaurant(
--     res_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
--     res_name VARCHAR(100),
--     image VARCHAR(100),
--     descriptions VARCHAR(100)
-- );

-- CREATE TABLE food(
--     food_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
--     food_name VARCHAR(100),
--     image VARCHAR(100),
--     price FLOAT,
--     descriptions VARCHAR(100),
--     type_id INT
-- );

-- CREATE TABLE food_type(
--     type_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
--     type_name VARCHAR(100)
-- );

-- CREATE TABLE rate_res(
--     user_id INT ,
--     res_id INT,
--     amount INT,
--     date_rate DATETIME
-- );

-- CREATE TABLE like_res(
--     user_id INT ,
--     res_id INT,
--     date_like DATETIME
-- );

-- CREATE TABLE orders (
--     user_id INT ,
--     food_id INT ,
--     amount INT,
--     code VARCHAR(100),
--     arr_sub_id VARCHAR(100)
-- );

-- CREATE TABLE sub_food(
--     sub_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
--     sub_name VARCHAR(100),
--     sub_price FLOAT,
--     food_id INT
-- );


-- -- FOREIGN KEY --

-- ALTER TABLE rate_res ADD CONSTRAINT fk_rate_res_user_id FOREIGN KEY (user_id) REFERENCES user (user_id);
-- ALTER TABLE rate_res ADD CONSTRAINT fk_rate_res_res_id FOREIGN KEY (res_id) REFERENCES restaurant (res_id);
-- ALTER TABLE like_res ADD CONSTRAINT fk_like_res_user_id FOREIGN KEY (user_id) REFERENCES user (user_id);
-- ALTER TABLE like_res ADD CONSTRAINT fk_like_res_res_id FOREIGN KEY (res_id) REFERENCES restaurant (res_id);
-- ALTER TABLE sub_food ADD CONSTRAINT fk_sub_food_food_id FOREIGN KEY (food_id) REFERENCES food (food_id);
-- ALTER TABLE food ADD CONSTRAINT fk_food_type_id FOREIGN KEY (type_id) REFERENCES food_type (type_id);
-- ALTER TABLE orders ADD CONSTRAINT fk_order_user_id FOREIGN KEY (user_id) REFERENCES user (user_id);
-- ALTER TABLE orders ADD CONSTRAINT fk_order_food_id FOREIGN KEY (food_id) REFERENCES food (food_id);

-- For JWT token --
ALTER TABLE user ADD refresh_token VARCHAR(10000);