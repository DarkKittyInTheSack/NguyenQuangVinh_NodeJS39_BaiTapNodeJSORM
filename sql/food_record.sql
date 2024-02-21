USE userDatabase;

-- INSERT TABLE --

INSERT INTO user(user_id ,full_name ,email ,password) VALUES
    (1,'Nguyen Van A','nguyenvana@gmail.com','1234567890'),
    (2,'Nguyen Van B','nguyenvanb@gmail.com','1234567890'),
    (3,'Nguyen Van C','nguyenvanc@gmail.com','1234567890'),
    (4,'Nguyen Van D','nguyenvand@gmail.com','1234567890'),
    (5,'Nguyen Van E','nguyenvane@gmail.com','1234567890'),
    (6,'Nguyen Van F','nguyenvanf@gmail.com','1234567890');

INSERT INTO restaurant(res_id ,res_name ,image ,descriptions) VALUES
    (1,'Restaurant 01', 'images 01', 'This is description01'),
    (2,'Restaurant 02', 'images 02', 'This is description02'),
    (3,'Restaurant 03', 'images 03', 'This is description03'),
    (4,'Restaurant 04', 'images 04', 'This is description04'),
    (5,'Restaurant 05', 'images 05', 'This is description05'),
    (6,'Restaurant 06', 'images 06', 'This is description06');

INSERT INTO food_type(type_id ,type_name) VALUES
    (1,'Mon man'),
    (2,'Mon chay'),
    (3,'Mon chien'),
    (4,'Mon xao');

INSERT INTO food(food_id ,food_name ,image ,price ,descriptions ,type_id) VALUES 
    (1,'Mon an 1','images01',21000,'This is description', 1),
    (2,'Mon an man ','images01',21000,'This is description', 1),
    (3,'Mon an chay','images01',21000,'This is description', 2),
    (4,'Mon an chien','images01',21000,'This is description', 3),
    (5,'Mon an xao','images01',21000,'This is description', 4),
    (6,'Mon an chay 2','images01',21000,'This is description', 2),
    (7,'Mon an man 2','images01',21000,'This is description', 1),
    (8,'Mon an chien 2','images01',21000,'This is description', 3),
    (9,'Mon an xao 2','images01',21000,'This is description', 4),
    (10,'Mon an chay 3','images01',21000,'This is description', 2);

INSERT INTO rate_res(user_id ,res_id ,amounT ,date_rate) VALUES
    (1,6,5,'2022-12-3'),
    (3,1,3,'2022-07-6'),
    (2,4,2,'2022-10-4'),
    (5,3,3,'2022-3-29'),
    (2,5,4,'2022-10-17'),
    (5,2,2,'2022-8-8'),
    (1,3,5,'2022-11-19'),
    (3,1,1,'2022-2-21'),
    (5,5,3,'2022-10-5'),
    (6,5,3,'2022-10-5'),
    (2,4,3,'2022-9-20');

INSERT INTO like_res(user_id ,res_id ,date_like) VALUES
    (1,6,'2022-12-3'),
    (3,1,'2022-07-6'),
    (2,4,'2022-10-4'),
    (5,3,'2022-3-29'),
    (2,5,'2022-10-17'),
    (5,2,'2022-8-8'),
    (1,3,'2022-11-19'),
    (3,1,'2022-2-21'),
    (5,5,'2022-10-5'),
    (6,3,'2022-10-5'),
    (2,4,'2022-9-20');

INSERT INTO orders (user_id ,food_id ,amount ,code ,arr_sub_id) VALUES
    (1,10,2,'ORDER01','sub 01'),
    (3,4,1,'ORDER02','sub 02'),
    (5,3,3,'ORDER03','sub 03'),
    (2,6,4,'ORDER04','sub 04'),
    (5,9,9,'ORDER05','sub 05'),
    (3,2,5,'ORDER06','sub 06'),
    (1,1,1,'ORDER07','sub 07'),
    (2,7,2,'ORDER08','sub 08'),
    (2,5,4,'ORDER09','sub 09'),
    (6,2,8,'ORDER1o','sub 10'),
    (5,2,8,'ORDER1o','sub 10');

INSERT INTO sub_food(sub_id ,sub_name ,sub_price ,food_id) VALUES
    (1,'Mon rau', 20000,3),
    (2,'Thit lon luoc', 45000,1),
    (3,'Khoai tay chien', 15000,4),
    (4,'Khoai lang chien', 10000,4),
    (5,'Cha gio chay', 12000,2);
