import { DataTypes } from "sequelize";
import sequelize from "../db";

const { INTEGER, STRING } = DataTypes;

export const User = sequelize.define("user", {
  id: { type: INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: STRING, unique: true },
  password: { type: STRING },
  role: { type: STRING, defaultValue: "USER" },
});

export const Cart = sequelize.define("cart", {
  id: { type: INTEGER, primaryKey: true, autoIncrement: true },
  user_id: {
    type: STRING,
  },
});

export const CartProduct = sequelize.define("cart_product", {
  id: { type: INTEGER, primaryKey: true, autoIncrement: true },
  device_id: {
    type: STRING,
  },
  cart_id: {
    type: STRING,
  },
});

export const DeviceInfo = sequelize.define("device_info", {
  id: { type: INTEGER, primaryKey: true, autoIncrement: true },
  device_id: {
    type: INTEGER,
  },
  title: {
    type: STRING,
    allowNull: false,
  },
  description: {
    type: STRING,
    allowNull: false,
  },
});

export const Device = sequelize.define("device", {
  id: { type: INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: STRING, unique: true, allowNull: false },
  price: {
    type: INTEGER,
    allowNull: false,
  },
  description: {
    type: STRING,
  },
  rating: {
    type: INTEGER,
    defaultValue: 0,
  },
  img: {
    type: STRING,
  },
  typeId: {
    type: INTEGER,
  },
  barndId: {
    type: INTEGER,
  },
});

export const Brand = sequelize.define("brand", {
  id: { type: INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: STRING, unique: true, allowNull: false },
});

export const Type = sequelize.define("type", {
  id: { type: INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: STRING, unique: true, allowNull: false },
});

export const Rating = sequelize.define("rating", {
  id: { type: INTEGER, primaryKey: true, autoIncrement: true },
  device_id: { type: INTEGER },
  user_id: { type: INTEGER },
  rate: { type: INTEGER, defaultValue: 0 },
});

export const TypeBrand = sequelize.define('type_brand', {
  id: { type: INTEGER, primaryKey: true, autoIncrement: true },
})

User.hasOne(Cart)
Cart.belongsTo(User)
Cart.hasMany(Device)

Device.hasMany(DeviceInfo)
DeviceInfo.belongsTo(Device)

Type.hasMany(Device)
Brand.belongsTo(Type)

Type.hasMany(Device)
Device.belongsTo(Brand)

Device.hasMany(Rating);
Rating.belongsTo(Device);

Device.hasMany(CartProduct)
CartProduct.belongsTo(Device);

Device.hasMany(DeviceInfo)
DeviceInfo.belongsTo(Device);

Type.belongsToMany(Brand, { through: TypeBrand })
Brand.belongsToMany(Type, { through: TypeBrand })
