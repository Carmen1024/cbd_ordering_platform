//订单状态，
//1:待付款，2:已付款，3:已发货，4：部分收货，5:全部收货，6:待审核，
//7:已审核，8:申请退货，9:申请退款，10:已退货，11:已退款'

// "s_a_name":"",
// "s_a_phone":"",
// "s_a_province":"",
// "s_a_city":"",
// "s_a_area":"",
// "s_a_default":false,
// "s_a_detail":"",
// "s_a_postcode":""
export const submitData=[
	{value:1,label:"s_a_name",tip:"请输入收件人"},
	{value:2,label:"s_a_phone",tip:"请输入手机号"},
	{value:3,label:"s_a_province",tip:"请选择省"},
	{value:4,label:"s_a_city",tip:"请选择市"},
	{value:5,label:"s_a_area",tip:"请选择区"},
	{value:6,label:"s_a_detail",tip:"请输入详细地址"},
	// {value:7,label:"s_a_postcode",tip:"请输入邮编"}
]
// s_a_audit_status
export const statusData=[
	{value:1,label:"审核中"},
	{value:2,label:"审核中"},
	{value:3,label:"审核不通过"},
]