import { responseApi } from "../Configs/response.js";
import initModels from "./../Models/InitModel.js";
import sequelize from "./../Models/Connect.js";
import {
    AMOUNT_INVALID,
  COMPLETE_GET_LIKE,
  COMPLETE_GET_RATE,
  COMPLETE_LIKE,
  COMPLETE_ORDER,
  COMPLETE_RATE,
  COMPLETE_UNLIKE,
  EMPTY_RESTAURANT_LIKE,
  EMPTY_RESTAURANT_RATE,
  EMPTY_USER_LIKE,
  EMPTY_USER_RATE,
  FAILURE_LIKE,
  FAILURE_ORDER,
  FAILURE_RATE,
  FOOD_ID_NOT_EXIST,
  LIMIT_OF_AMOUNT,
  RESTAURANT_NOT_EXIST,
  USER_NOT_EXIST,
} from "../utils/messageUtils.js";
import { TOKEN_CREATED } from "../utils/jwtMessageUtil.js";

const model = initModels(sequelize);


export const FoodController = {
  checkUser: async (userId) => {
    let isExist = false;

    let data = await model.user.findAll({
      where: {
        user_id: userId,
      },
    });

    data.length > 0 ? isExist = true : isExist = false;
    return isExist
  },
  checkRestaurant: async (resId) => {
    let isExist = false;

    let data = await model.restaurant.findAll({
      where: {
        res_id: resId,
      },
    });

    data.length > 0 ? isExist = true : isExist = false;
    return isExist;
  },

  checkFood: async (foodId) => {
    let isExist = false;

    let data = await model.food.findAll({
      where: {
        food_id: foodId,
      },
    });

    data.length > 0 ? isExist = true : isExist = false;
    return isExist
  },

  getLikeByRestaurant: async (req, res) => {
    let { resId } = req.params;
    
    if(await FoodController.checkRestaurant(resId)){
        let data = await model.like_res.findAll({
            attributes: ['date_like'],
            where: {
              res_id: resId,
            },
            include: ['restaurant','user']
          });
      
          data.length > 0
            ? responseApi(res, 200, data, COMPLETE_GET_LIKE)
            : responseApi(res, 404, {}, EMPTY_RESTAURANT_LIKE);
    }else{
        responseApi(res, 404, {}, RESTAURANT_NOT_EXIST)
    }
  },

  getLikeByUserID: async (req, res) => {
    let { userId } = req.params;
    if(await FoodController.checkUser(userId)){
        let data = await model.like_res.findAll({
          attributes: ['date_like'],
            where: {
              user_id: userId,
            },
            include: ['restaurant','user']
          });
      
          data.length > 0
            ? responseApi(res, 200, data, COMPLETE_GET_LIKE)
            : responseApi(res, 404, {}, EMPTY_USER_LIKE);
    }else{
        responseApi(res, 404, {}, USER_NOT_EXIST);
    }

    
  },

  likeTheRestaurant: async (req, res) => {
    let { userId, resId } = req.body;

    if(await FoodController.checkRestaurant(resId) && await FoodController.checkUser(userId)){
        try {
            let data = await model.like_res.create({
              user_id: userId,
              res_id: resId,
              date_like: new Date(),
            });
            responseApi(res, 200, {}, COMPLETE_LIKE);
          } catch (error) {
            console.log(error);
            responseApi(res, 404, {}, FAILURE_LIKE);
          }
    }else{
        responseApi(res, 404, {}, RESTAURANT_NOT_EXIST + " or " + USER_NOT_EXIST);
    }
  },

  unlikeTheRestaurant: async (req, res) => {
    let { resId, userId } = req.body;

    if(await FoodController.checkRestaurant(resId) && await FoodController.checkUser(userId)){
        let removeData = await model.like_res.destroy({
            where: {
              user_id: userId,
              res_id: resId,
            },
          });
          responseApi(res, 200, {}, COMPLETE_UNLIKE);
    }else{
        responseApi(res, 404, {}, RESTAURANT_NOT_EXIST + " or " + USER_NOT_EXIST);
    } 
  },

  rateTheRestaurant: async (req, res) => {
    let { userId, resId, amounts } = req.body;

    if(await FoodController.checkRestaurant(resId) && await FoodController.checkUser(userId)){
        try {
            

            if(Number(amounts) > 10 || Number(amounts) < 0){
                responseApi(res, 404, {}, LIMIT_OF_AMOUNT)
            } else{
                let data = await model.rate_res.create({
                    user_id: userId,
                    res_id: resId,
                    amount: amounts,
                    date_rate: new Date(),
                  });
                  responseApi(res, 200, {}, COMPLETE_RATE)
            }
            
          } catch (error) {
            responseApi(res, 404, {}, FAILURE_RATE);
          }
    }else{
        responseApi(res, 404, {}, RESTAURANT_NOT_EXIST + " or " + USER_NOT_EXIST);
    }
  },

  getRateByUser: async (req, res) => {
    let { userId } = req.params;

    if(await FoodController.checkUser(userId)){
        let data = await model.rate_res.findAll({
          attributes: ['amount','date_rate'],
            where: {
              user_id: userId,
            },
            include: ['restaurant','user']
          });
      
          data.length > 0
            ? responseApi(res, 200, data, COMPLETE_GET_RATE)
            : responseApi(res, 404, {}, EMPTY_USER_RATE);
    }else{
        responseApi(res, 404, {}, USER_NOT_EXIST);
    }
  },

  getRateByRestaurant: async (req, res) => {
    let { resId } = req.params;

    if(await FoodController.checkRestaurant(resId)){
        let data = await model.rate_res.findAll({
          attributes: ['amount','date_rate'],
            where: {
              res_id: resId,
            },
            include: ['restaurant','user']
          });
      
          data.length > 0
            ? responseApi(res, 200, data, COMPLETE_GET_RATE)
            : responseApi(res, 404, {}, EMPTY_RESTAURANT_RATE);
    }else{
        responseApi(res, 404, {}, RESTAURANT_NOT_EXIST)
    }
  },

  insertOrder: async (req, res) => {
    let { userId, foodId, amounts, code, arrSub } = req.body;

    if(await FoodController.checkRestaurant(userId) && await FoodController.checkFood(foodId)){
        try {
            if(Number(amounts) <= 0){
                responseApi(res, 404, {}, AMOUNT_INVALID);
            }else{
                let data = await model.orders.create({
                    user_id: userId,
                    food_id: foodId,
                    amount: amounts,
                    code: code,
                    arr_sub_id: arrSub,
                  });
            
                  responseApi(res, 200, {}, COMPLETE_ORDER);
            }
            
          } catch (error) {
            responseApi(res, 404, {}, FAILURE_ORDER);
          }
    }else{
        responseApi(res, 404, {}, USER_NOT_EXIST + " or " + FOOD_ID_NOT_EXIST);
    }
  },
};
