import { responseApi } from "../Configs/response.js";
import initModels from './../Models/InitModel.js';
import sequelize from './../Models/Connect.js'
import { COMPLETE_GET_LIKE, COMPLETE_GET_RATE, COMPLETE_LIKE, COMPLETE_ORDER, COMPLETE_RATE, COMPLETE_UNLIKE, EMPTY_RESTAURANT_LIKE, EMPTY_USER_LIKE, FAILURE_GET_LIKE_BY_RESTAURANT, FAILURE_GET_RATE_BY_RESTAURANT, FAILURE_GET_RATE_BY_USER, FAILURE_LIKE, FAILURE_ORDER, FAILURE_RATE, RESTAURANT_NOT_EXIST, USER_NOT_EXIST } from "../utils/messageUtils.js";

const model = initModels(sequelize)


export const FoodController = {
    checkUser: async (userId) =>{

        let isExist = await model.user.findAll({
            where: {
                user_id: userId
            }
        })

        return isExist
    },
    checkRestaurant: async (resId) =>{

        let isExist = await model.restaurant.findAll({
            where: {
                res_id: resId
            }
        })

        return isExist
    },
    getLikeByRestaurant: async (req,res) =>{
        let {resId} = req.params;

        let data = await model.like_res.findAll({
            where:{
                res_id: resId
            }
        })

        data.length > 0 ? responseApi(res,200,data,COMPLETE_GET_LIKE) : responseApi(res,404,{},EMPTY_RESTAURANT_LIKE)
    },

    getLikeByUserID: async (req,res) =>{
        let {userId} = req.params;

        let data = await model.like_res.findAll(
            {where: {
                user_id: userId
            }}
        )

        data.length > 0 ? responseApi(res,200,data,COMPLETE_GET_LIKE) : responseApi(res,404,{},EMPTY_USER_LIKE)
    },

    likeTheRestaurant: async (req,res) =>{
        let {userId,resId} = req.body

        try {
            let data = await model.like_res.create({
                user_id: userId,
                res_id: resId,
                date_like: new Date()
            })
            responseApi(res,200,{},COMPLETE_LIKE)
        } catch (error) {
            console.log(error)
            responseApi(res,404,{},FAILURE_LIKE)
        }
        
    },

    unlikeTheRestaurant: async (req,res) =>{
        let {resId,userId} = req.body

        let removeData = await model.like_res.destroy({
            where: {
                user_id: userId,
                res_id: resId
            }
        })
        responseApi(res,200,{},COMPLETE_UNLIKE)
    },

    rateTheRestaurant: async (req,res) =>{
        let {userId,resId,amounts} = req.body

        try {
            let data = await model.rate_res.create({
                user_id: userId,
                res_id: resId,
                amount: amounts,
                date_rate: new Date()
            })
            responseApi(res,200,{},COMPLETE_RATE)
        } catch (error) {
            responseApi(res,404,{},FAILURE_RATE)
        }
    },

    getRateByUser: async (req,res) =>{
        let {userId} = req.params

        let data = await model.rate_res.findAll({
            where:{
                user_id: userId
            }
        })

        data ? responseApi(res,200,data,COMPLETE_GET_RATE) : responseApi(res,404,{},FAILURE_GET_RATE_BY_USER)
    },

    getRateByRestaurant: async (req,res) =>{
        let {resId} = req.params

        let data = await model.rate_res.findAll({
            where:{
                res_id: resId
            }
        })

        data ? responseApi(res,200,data,COMPLETE_GET_RATE) : responseApi(res,404,{},FAILURE_GET_RATE_BY_RESTAURANT)
    },

    insertOrder: async (req,res) =>{
        let {userId,foodId,amounts,code,arrSub} = req.body

        try {
            let data = await model.orders.create({
                user_id: userId,
                food_id: foodId,
                amount: amounts,
                code: code,
                arr_sub_id: arrSub
            })

            responseApi(res,200,{},COMPLETE_ORDER)
        } catch (error) {
            responseApi(res,404,{},FAILURE_ORDER)
        }
        
    }
}

