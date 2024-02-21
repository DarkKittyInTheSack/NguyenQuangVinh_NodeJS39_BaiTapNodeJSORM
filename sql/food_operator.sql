USE userDatabase;

-- Tìm 5 người đã like nhà hàng nhiều nhất --

SELECT a.full_name
FROM user as a, like_res as b
WHERE a.user_id = b.user_id
GROUP BY b.user_id
ORDER BY count(b.user_id) DESC
LIMIT 5;

-- Tìm 2 nhà hàng có lượt like nhiều nhất --

SELECT a.res_name
FROM restaurant as a, like_res as b
WHERE a.res_id = b.res_id
GROUP BY b.res_id
ORDER BY count(b.res_id) DESC
LIMIT 2;

-- Tìm người đã đặt hàng nhiều nhất --

SELECT a.full_name
FROM user as a, orders as b
WHERE a.user_id = b.user_id
GROUP BY b.user_id
ORDER BY count(b.user_id) DESC
LIMIT 1;

-- Tìm người dùng không hoạt động trong hệ thống (không đặt hàng, không like, không đánh giá nhà hàng) --

SELECT a.full_name
FROM user as a
INNER JOIN orders as b 
ON a.user_id NOT IN (SELECT user_id FROM orders WHERE a.user_id = orders.user_id)
INNER JOIN rate_res as c 
ON a.user_id NOT IN (SELECT user_id FROM rate_res WHERE a.user_id = rate_res.user_id)
INNER JOIN like_res as d 
ON a.user_id NOT IN (SELECT user_id FROM like_res WHERE a.user_id = like_res.user_id)
GROUP BY a.user_id

