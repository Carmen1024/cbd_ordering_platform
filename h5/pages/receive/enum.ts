export const listData = [
	{value:"o_type",label:"订单类型"},
	{value:"i_code",label:"单据编号"},
	{value:"i_su_id",label:"关联的单据id"},
	{value:"i_detail_type",label:"单据内容类型"},
	{value:"_id",label:"单据主键id"},
	{value:"i_type",label:"单据类型"},
	{value:"o_s_id",label:"订单子表id"},
	{value:"o_s_code",label:"子订单编号"},
]

// i_type	单据类型
export const typeOptions=[
	{value:1,label:"收款单"},
	{value:2,label:"采购单"},
	{value:3,label:"出库单"},
	{value:4,label:"收货单"},
	{value:5,label:"退货单"},
	{value:6,label:"退款单"},
	{value:7,label:"盘点单"},
]

// i_detail_type 单据内容类型
// 1:物料单据，路由到物料单据表，2:费用单据，路由到费用单据表。
export const detailTypeOptions=[
	{value:1,label:"物料单据"},
	{value:2,label:"费用单据"},
]

// o_type	订单类型
export const orderTypeOptions=[
	{value:1,label:"商品订单"},
	{value:2,label:"费用订单"},
]