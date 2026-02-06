import { DataTypes } from "sequelize";
const couponModal = (sequelize) => {
    return sequelize.define('coupon', {
        discountType: { type: DataTypes.ENUM("PERCENT", "FIXED") },
        value: DataTypes.DECIMAL(10, 2),
        minOrderAmount: DataTypes.DECIMAL(10, 2),
        expiryDate: DataTypes.DATE
    })
}
export default couponModal;