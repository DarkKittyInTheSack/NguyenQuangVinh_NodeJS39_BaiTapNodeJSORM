import _sequelize from 'sequelize'
const { Model, Sequelize } = _sequelize;

export default class like_res extends Model{
    static init(sequelize,DataTypes){
        return super.init({

            user_id:{
                primaryKey: true,
                allowNull: false,
                type: DataTypes.INTEGER,
                references:{
                    model: 'user',
                    key: 'user_id'
                }
            },
            res_id:{
                primaryKey: true,
                allowNull: false,
                type: DataTypes.INTEGER,
                references:{
                    model: 'restaurant',
                    key: 'res_id'
                }
            },
            date_like:{
                allowNull: false,
                type: DataTypes.DATE
            },
        },{
            sequelize,
            tableName: 'like_res',
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
                    name: 'res_id',
                    using: 'BTREE',
                    fields:[
                        {
                            name: 'res_id'
                        }
                    ]
                },
            ]
        })
    }
}