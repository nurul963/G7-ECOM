import sequelize from "../config/database.js";
import addressModal from "./address.model.js";
import userModal from "./user.model.js";

const User=userModal(sequelize);
const Address=addressModal(sequelize);
User.hasMany(Address);
Address.belongsTo(User);
export {
    User,
    Address
}