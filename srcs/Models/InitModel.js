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

    food.belongsTo(food_type, { as: 'fk_food_type_id', foreignKey: 'type_id'});
    food_type.hasMany(food,{as: 'fk_food_id', foreignKey: 'food_id'});

    like_res.belongsTo(user,{as: 'fk_like_user_id',foreignKey: 'user_id'});
    user.hasMany(like_res,{as:'fk_user_like', foreignKey: 'user_id' });

    like_res.belongsTo(restaurant,{as: 'fk_like_res_id',foreignKey: 'res_id'});
    restaurant.hasMany(like_res,{as:'fk_res_like', foreignKey: 'res_id' });

    orders.belongsTo(user, {as: 'fk_order_user_id', foreignKey: 'user_id'});
    user.hasMany(orders, {as: 'fk_user_orders', foreignKey: 'user_id'});

    orders.belongsTo(food, {as: 'fk_order_food_id', foreignKey: 'food_id'});
    food.hasMany(orders, {as: 'fk_food_orders', foreignKey: 'food_id'});

    rate_res.belongsTo(user,{as: 'fk_rate_user_id', foreignKey: 'user_id'});
    user.hasMany(rate_res,{as: 'fk_user_rate', foreignKey: 'user_id'});

    rate_res.belongsTo(restaurant,{as: 'fk_rate_res_id', foreignKey: 'res_id'});
    restaurant.hasMany(rate_res,{as: 'fk_res_rate', foreignKey: 'res_id'});

    sub_food.belongsTo(food,{as: 'fk_sub_food_id', foreignKey: 'food_id'});
    food.hasMany(sub_food,{as: 'fk_food_sub', foreignKey: 'food_id'});

    return {food,food_type,like_res,orders,rate_res,restaurant,sub_food,user};
}