import _sequelize from 'sequelize'
const DataTypes = _sequelize.DataTypes
import _food from './Food.js'
import _food_type from './FoodType.js'
import _orders from './Orders.js'
import _like_res from './LikeRes.js'
import _rate_res from './RateRes.js'
import _restaurant from './Restaurant.js'
import _sub_food from './SubFood.js'
import _user from './User.js'


export default function initModels(sequelize){
    const food = _food.init(sequelize,DataTypes)
    const food_type = _food_type.init(sequelize,DataTypes)
    const like_res = _like_res.init(sequelize,DataTypes)
    const orders = _orders.init(sequelize,DataTypes)
    const rate_res = _rate_res.init(sequelize,DataTypes)
    const restaurant = _restaurant.init(sequelize,DataTypes)
    const sub_food = _sub_food.init(sequelize,DataTypes)
    const user = _user.init(sequelize,DataTypes)

    food.belongsTo(food_type, { as: 'food_type', foreignKey: 'type_id'});
    food_type.hasMany(food,{as: 'food', foreignKey: 'food_id'});

    like_res.belongsTo(user,{as: 'user',foreignKey: 'user_id'});
    user.hasMany(like_res,{as:'like_res', foreignKey: 'user_id' });

    like_res.belongsTo(restaurant,{as: 'restaurant',foreignKey: 'res_id'});
    restaurant.hasMany(like_res,{as:'like_res', foreignKey: 'res_id' });

    orders.belongsTo(user, {as: 'user', foreignKey: 'user_id'});
    user.hasMany(orders, {as: 'orders', foreignKey: 'user_id'});

    orders.belongsTo(food, {as: 'food', foreignKey: 'food_id'});
    food.hasMany(orders, {as: 'orders', foreignKey: 'food_id'});

    rate_res.belongsTo(user,{as: 'user', foreignKey: 'user_id'});
    user.hasMany(rate_res,{as: 'rate_res', foreignKey: 'user_id'});

    rate_res.belongsTo(restaurant,{as: 'restaurant', foreignKey: 'res_id'});
    restaurant.hasMany(rate_res,{as: 'rate_res', foreignKey: 'res_id'});

    sub_food.belongsTo(food,{as: 'fk_sub_food_id', foreignKey: 'food_id'});
    food.hasMany(sub_food,{as: 'fk_food_sub', foreignKey: 'food_id'});

    return {food,food_type,like_res,orders,rate_res,restaurant,sub_food,user};
}