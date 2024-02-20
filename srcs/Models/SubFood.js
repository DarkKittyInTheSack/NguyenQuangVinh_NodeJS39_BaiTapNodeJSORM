import _sequelize from 'sequelize'
const { Model, Sequelize } = _sequelize;

export default class sub_food extends Model{
    static init(sequelize,DataTypes){
        return super.init({
            sub_id:{
                autoIncrement: true,
                primaryKey: true,
                allowNull: false,
                type: DataTypes.INTEGER
            },
            sub_name:{
                allowNull: false,
                type: DataTypes.STRING(100)
            },
            sub_price:{
                allowNull: false,
                type: DataTypes.FLOAT
            },
            food_id:{
                allowNull: false,
                type: DataTypes.INTEGER,
                references:{
                    model: 'food',
                    key: 'food_id'
                }
            },
        },{
            sequelize,
            tableName: 'sub_food',
            timestamps: false,
            indexes:[
                {
                    name: 'PRIMARY',
                    unique: true,
                    using: 'BTREE',
                    fields:[{
                        name: 'sub_id'
                    }]
                },
                {
                    name: 'food_id',
                    using: 'BTREE',
                    fields: [{
                        name: 'food_id'
                    }]
                }
            ]
        })
    }
}