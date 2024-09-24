export const OrderApiPrefix = "/api";

export enum OrderApi {
  ApproveBulkOrder = `${OrderApiPrefix}/Order/ApproveOrders`,
  ApproveOrder = `${OrderApiPrefix}/Order/ApproveOrder`,
  GetAllOrder = `${OrderApiPrefix}/Order/GetAllOrders`,
  getOrderById = `${OrderApiPrefix}/Order/GetOrderDetailByOrderId/`,
  RejectBulkOrder = `${OrderApiPrefix}/Order/RejectOrders`,
  RejectOrder = `${OrderApiPrefix}/Order/RejectOrder`,
  GetOrders = "GetOrders",
}
