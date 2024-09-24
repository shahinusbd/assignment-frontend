export const ReturnApiPrefix = "/api";

export enum ReturnApi {
  GetAllReturn = `${ReturnApiPrefix}/ReturnRequest/GetReturnRequests`,
  GetReturnRequestById = `${ReturnApiPrefix}/ReturnRequest/GetReturnRequestById/`,
  ApproveOrRejectReturn = `${ReturnApiPrefix}/ReturnRequest/IRApproval`,
}
