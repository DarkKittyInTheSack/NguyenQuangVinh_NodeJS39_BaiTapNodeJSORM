import _sequelize from 'sequelize'
const { Model, Sequelize } = _sequelize;

export default class orders extends Model{
    static init(sequelize,DataTypes){
        return super.init({
            user_id:{
                primaryKey: true,
                allowNull: false,
                type: DataTypes.INTEGER,
                references:{
                    model:'user',
                    key:'user_id'
                }
            },
            food_id:{
                primaryKey: true,
                allowNull: false,
                type: DataTypes.INTEGER,
                references:{
                    model: 'food',
                    key: 'food_id'
                }
            },
            amount:{
                allowNull: false,
                type: DataTypes.INTEGER
            },
            code:{
                allowNull: false,
                type: DataTypes.STRING(100)
            },
            arr_sub_id:{
                allowNull: false,
                type: DataTypes.STRING(100)
            },
        },{
            sequelize,
            tableName: 'orders',
            timestamps: false,
            indexes:[
                {
                    name: 'user_id',
                    using: 'BTREE',
                    fields:[
                        {
                            name: 'user_id'
                        }
                    ]
                },
                {
                    name: 'food_id',
                    using: 'BTREE',
                    fields:[
                        {
                            name: 'food_id'
                        }
                    ]
                }
            ]
        })
    }
}