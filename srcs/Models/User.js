import _sequelize from 'sequelize'
const { Model, Sequelize } = _sequelize;


export default class user extends Model{
    static init(sequelize,DataTypes){
        return super.init({
            user_id:{
                primaryKey:true,
                allowNull: false,
                autoIncrement: true,
                type: DataTypes.INTEGER
            },
            full_name:{
                allowNull: false,
                type: DataTypes.STRING(100)
            },
            email:{
                allowNull: false,
                type: DataTypes.STRING(50)
            },
            password:{
                allowNull: false,
                type: DataTypes.STRING(100)
            },
        },{
            sequelize,
            tableName: 'user',
            timestamps: false,
            indexes:[
                {
                    name: 'PRIMARY',
                    unique: true,
                    using: 'BTREE',
                    fields: [{name: 'user_id'}]
                },
                {
                    name: 'email',
                    unique: true,
                    using: 'BTREE',
                    fields: [{
                        name: 'email'
                    }]
                }
            ]
        })
    }
}