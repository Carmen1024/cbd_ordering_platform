//订单状态，1:待付款，2:已付款，3:已发货，4：部分收货，5:全部收货，6:待审核，
//7:已审核，8:申请退货，9:申请退款，10:已退货，11:已退款'

export const statusData=[
	{value:1,label:"待付款"},
	{value:2,label:"已付款"},
]

export const tabOptions=[
	{value:1,label:"待付款",status:1},
	{value:2,label:"已付款",status:2},
	{value:3,label:"全部",status:0},
]
