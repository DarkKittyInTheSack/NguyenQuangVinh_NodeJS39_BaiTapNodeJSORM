import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class food_type extends Model{
    static init(sequelize,DataTypes){
        return super.init({
            type_id: {
                autoIncrement: true,
                primaryKey: true,
                allowNull: false,
                type: DataTypes.INTEGER
            },
            type_name:{
                allowNull: false,
                type: DataTypes.STRING(100)
            }
        },{
            sequelize,
            tableName: 'food_type',
            timestamps: false,
            indexes:[
                {
                    name: 'PRIMARY',
                    unique: true,
                    using: 'BTREE',
                    fields:[{name: 'type_id'}]
                }
            ]
        })
    }
}