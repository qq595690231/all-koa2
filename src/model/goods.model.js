/*
 * @Author: aze
 * @Date: 2021-10-23 10:40:13
 * @LastEditors: aze
 * @LastEditTime: 2021-10-26 15:20:24
 * @Description: 
 * @FilePath: \all-koa2\src\model\goods.model.js
 */
const { DataTypes } = require('sequelize')

const seq = require('../db/seq')

const Goods = seq.define(
  'zd_goods',
  {
    goods_name: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: '商品名称',
    },
    goods_price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      comment: '商品价格',
    },
    goods_num: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: '商品库存',
    },
    goods_img: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: '商品图片的url',
    },
  },
  {
    paranoid: true,
  }
)

// Goods.sync({ force: true })

module.exports = Goods
