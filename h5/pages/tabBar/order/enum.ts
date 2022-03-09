//订单状态，
//1:待付款，2:已付款，3:已发货，4：部分收货，5:全部收货，6:待审核，
//7:已审核，8:申请退货，9:申请退款，10:已退货，11:已退款'

export const statusData=[
	{value:0,label:"已取消"},
	{value:1,label:"待付款"},
	{value:2,label:"待发货"},//已付款
	{value:3,label:"已发货"},//去验收
	{value:4,label:"部分收货"},//去验收
	{value:5,label:"已验收"},//全部收货
	{value:6,label:"待审核"},
	{value:7,label:"已审核"},
	{value:8,label:"退货中"},//申请退货
	{value:9,label:"退款中"},//申请退款
	{value:10,label:"已退货"},
	{value:11,label:"已退款"},
]

export const tabOptions=[
	{value:1,label:"全部",status:[0,1,2,3,4,5,6,7,8,9,10,11]},
	{value:2,label:"待付款",status:[1]},
	{value:3,label:"待发货",status:[2]},
	{value:4,label:"待验收",status:[3,4]},
	{value:5,label:"售后",status:[6,7,8,9,10,11]},
]