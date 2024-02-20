import _sequelize from 'sequelize'
const { Model, Sequelize } = _sequelize;

export default class restaurant extends Model{
    static init(sequelize,DataTypes){
        return super.init({
            res_id:{
                autoIncrement: true,
                primaryKey:true,
                allowNull: false,
                type: DataTypes.INTEGER
            },
            res_name:{
                allowNull: false,
                type: DataTypes.STRING(100)
            },
            image:{
                allowNull: false,
                type: DataTypes.STRING(100)
            },
            descriptions:{
                allowNull: false,
                type: DataTypes.STRING(100)
            },
        },{
            sequelize,
            tableName: 'restaurant',
            timestamps: false,
            indexes:[
                {
                    name: 'PRIMARY',
                    unique: true,
                    using: 'BTREE',
                    fields:[
                        {
                            name: 'res_id'
                        }
                    ]
                }
            ]
        })
    }
}