import _sequelize from 'sequelize'
const { Model, Sequelize } = _sequelize;


export default class food extends Model{
    static init(sequelize,DataTypes){
        return super.init({
            food_id:{
                autoIncrement: true,
                primaryKey: true,
                allowNull: false,
                type: DataTypes.INTEGER
            },
            food_name:{
                allowNull: false,
                type: DataTypes.STRING(100)
            },
            image:{
                allowNull: false,
                type: DataTypes.STRING(100)
            },
            price:{
                allowNull: false,
                type: DataTypes.FLOAT
            },
            descriptions:{
                allowNull: false,
                type: DataTypes.STRING(100)
            },
            type_id:{
                allowNull: false,
                type: DataTypes.INTEGER,
                references: {
                    model: 'food_type',
                    key: 'type_id'
                }
            },
        },{
            sequelize,
            tableName: 'food',
            timestamps: false,
            indexes: [
                {
                    name: 'PRIMARY',
                    unique: true,
                    using: 'BTREE',
                    fields:[{name: 'food_id'}]
                },{
                    name: 'type_id',
                    using: 'BTREE',
                    fields:[{name: 'type_id'}]
                }
            ]
        })
    }
}