import sequelize from "../config/database.js";
import userModal from "./user.model.js";

const User=userModal(sequelize);
export {
    User
}