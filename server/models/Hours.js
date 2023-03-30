module.exports = (sequelize, DataTypes) => {
    const Hours = sequelize.define("Hours", {
        sunday_open: {
            type: DataTypes.STRING,
        },
        sunday_close: {
            type: DataTypes.STRING,
        },
        monday_open: {
            type: DataTypes.STRING,
        },
        monday_close: {
            type: DataTypes.STRING,
        },
        tuesday_open: {
            type: DataTypes.STRING,
        },
        tuesday_close: {
            type: DataTypes.STRING,
        },
        wednesday_open: {
            type: DataTypes.STRING,
        },
        wednesday_close: {
            type: DataTypes.STRING,
        },
        thursday_open: {
            type: DataTypes.STRING,
        },
        thursday_close: {
            type: DataTypes.STRING,
        },
        friday_open: {
            type: DataTypes.STRING,
        },
        friday_close: {
            type: DataTypes.STRING,
        },
        saturday_open: {
            type: DataTypes.STRING,
        },
        saturday_close: {
            type: DataTypes.STRING,
        },
    });

    Hours.associate = function (models) {
        Hours.belongsTo(models.Restaurant)
    };

    return Hours;
};