import express from 'express'
import { FoodController } from '../Controllers/FoodController.js'


const foodRoute = express.Router()

//encript user id for like,unlike,rate,insert order
foodRoute.get('/encript/:userId',FoodController.encryptUserId)

foodRoute.get('/get-like/:resId', FoodController.getLikeByRestaurant);
foodRoute.get('/get-like-user/:userId', FoodController.getLikeByUserID);
foodRoute.get('/get-rate-user/:userId', FoodController.getRateByUser);
foodRoute.get('/get-rate/:resId', FoodController.getRateByRestaurant);

foodRoute.post('/like',FoodController.likeTheRestaurant)
foodRoute.post('/rate',FoodController.rateTheRestaurant)
foodRoute.delete('/unlike',FoodController.unlikeTheRestaurant)

foodRoute.post('/order/create',FoodController.insertOrder)

export default foodRoute