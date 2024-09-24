export const ApiPrefix = "/api";

export enum Api {
  //Forget Password
  SendMail = `${ApiPrefix}/Users/ResetPassword`,
  ChangePassword = `${ApiPrefix}/Users/ResetNewPassword`,

  // Sidebar menu items
  GetSidebarMenu = `${ApiPrefix}/Common/GetNavMenus`, //get

  // Common Dropdowns
  GetUsers = `${ApiPrefix}/Common/GetUsers`,
  GetStoreDropdownList = `${ApiPrefix}/Common/GetStores`, //get
  GetDepartments = `${ApiPrefix}/Common/GetDepartments`, //get
  GetDesignations = `${ApiPrefix}/Common/GetDesignations`, //get
  GetReasons = `${ApiPrefix}/Common/GetReasons`, //get
  GetCaseCategoryOptions = `${ApiPrefix}/Common/GetCaseCategories`, //get
  GetSkillGroupOptions = `${ApiPrefix}/Common/GetSkillGroups`, //get
  GetAgentDropdownList = `${ApiPrefix}/Common/GetUsers`, //get
  GetCaseCategoryDropdownList = `${ApiPrefix}/Common/GetCaseCategories`, //get
  GetSubCaesCategoryDropdownList = `${ApiPrefix}/Common/GetCaseSubCategories`, //get
  GetPointOfEntries = `${ApiPrefix}/Common/GetPointOfEntries`, //get
  GetUserInfo = `${ApiPrefix}/Users/GetCurrentUserInfo`,
  GetEmailAccoutns = `${ApiPrefix}/Common/GetEmailAccounts`,
  GetCustomerDropdownList = `${ApiPrefix}/Common/GetCustomers`, //get
  GetSellerDropdownList = `${ApiPrefix}/Common/GetSellers`, //get
  GetPaymentDropDownListByTypeId = `${ApiPrefix}/Common/GetPaymentOptions`, //get

  // Users
  GetAllUser = `${ApiPrefix}/Users/GetAllUsers`, // get
  GetUserList = `${ApiPrefix}/Users/GetUsers`, // get
  DeleteUser = `${ApiPrefix}/Users/DeleteUser/`,
  GetUserById = `${ApiPrefix}/Users/GetUserById/`, //get
  AddUser = `${ApiPrefix}/Users/AddUser`, //post
  UpdateUser = `${ApiPrefix}/Users/UpdateUser`, //put
  GetUserType = `${ApiPrefix}/Common/GetUserTypes`, //get
  GetUserTypeDropDown = `${ApiPrefix}/UserType/GetAll`, //get
  ActiveUser = `${ApiPrefix}/Users/ActiveUser/`, //put
  InactiveUser = `${ApiPrefix}/Users/InActiveUser/`, //put

  // Department
  GetDepartmentList = `${ApiPrefix}/Department/GetDepartments`, // get
  DeleteDepartment = `${ApiPrefix}/Department/DeleteDepartment/`,
  GetDepartmentById = `${ApiPrefix}/Department/GetDepartmentById/`, //get
  AddDepartment = `${ApiPrefix}/Department/AddDepartment`, //post
  UpdateDepartment = `${ApiPrefix}/Department/UpdateDepartment`, //post
  GetDepartmentType = `${ApiPrefix}/Common/GetDepartmentTypes`, //get
  ActiveDepartment = `${ApiPrefix}/Department/ActiveDepartment/`, //put
  InactiveDepartment = `${ApiPrefix}/Department/InActiveDepartment/`, //put

  // Designation
  GetDesignationList = `${ApiPrefix}/Designation/GetDesignations`, // get
  DeleteDesignation = `${ApiPrefix}/Designation/DeleteDesignation/`,
  GetDesignationById = `${ApiPrefix}/Designation/GetDesignationById/`, //get
  AddDesignation = `${ApiPrefix}/Designation/AddDesignation`, //post
  UpdateDesignation = `${ApiPrefix}/Designation/UpdateDesignation`, //post
  GetDesignationType = `${ApiPrefix}/Common/GetDesignationTypes`, //get
  ActiveDesignation = `${ApiPrefix}/Designation/ActiveDesignation/`, //put
  InactiveDesignation = `${ApiPrefix}/Designation/InActiveDesignation/`, //put

  // Team
  GetTeamList = `${ApiPrefix}/Team/GetTeams`, // get
  DeleteTeam = `${ApiPrefix}/Team/DeleteTeam/`,
  GetTeamById = `${ApiPrefix}/Team/GetTeamById/`, //get
  AddTeam = `${ApiPrefix}/Team/AddTeam`, //post
  UpdateTeam = `${ApiPrefix}/Team/UpdateTeam`, //post
  GetTeamType = `${ApiPrefix}/Common/GetTeamTypes`, //get
  ActiveTeam = `${ApiPrefix}/Team/ActiveTeam/`, //put
  InactiveTeam = `${ApiPrefix}/Team/InActiveTeam/`, //put

  // RequestPhase
  GetRequestPhaseList = `${ApiPrefix}/RequestPhase/GetRequestPhases`, // get
  DeleteRequestPhase = `${ApiPrefix}/RequestPhase/DeleteRequestPhase/`,
  GetRequestPhaseById = `${ApiPrefix}/RequestPhase/GetRequestPhaseById/`, //get
  AddRequestPhase = `${ApiPrefix}/RequestPhase/AddRequestPhase`, //post
  UpdateRequestPhase = `${ApiPrefix}/RequestPhase/UpdateRequestPhase`, //post
  GetRequestPhaseType = `${ApiPrefix}/Common/GetRequestTypes`, //get
  ActiveRequestPhase = `${ApiPrefix}/RequestPhase/ActiveRequest/`, //put
  InactiveRequestPhase = `${ApiPrefix}/RequestPhase/InActiveRequestPhase/`, //put

  // ApprovalStep
  GetApprovalStepList = `${ApiPrefix}/ApprovalStep/GetApprovalSteps`, // get
  AgentList = `${ApiPrefix}/Common/GetUsers`,
  DeleteApprovalStep = `${ApiPrefix}/ApprovalStep/DeleteApprovalStep/`,
  GetApprovalStepById = `${ApiPrefix}/ApprovalStep/GetApprovalStepById/`, //get
  AddApprovalStep = `${ApiPrefix}/ApprovalStep/AddApprovalStep`, //post
  UpdateApprovalStep = `${ApiPrefix}/ApprovalStep/UpdateApprovalStep`, //post
  GetApprovalStepType = `${ApiPrefix}/Common/GetRequestTypes`, //get
  ActiveApprovalStep = `${ApiPrefix}/ApprovalStep/ActiveRequest/`, //put
  InactiveApprovalStep = `${ApiPrefix}/ApprovalStep/InActiveApprovalStep/`, //put

  // User Types
  GetUserTypeList = `${ApiPrefix}/UserType/GetUserTypes`, // get
  GetUserTypeById = `${ApiPrefix}/UserType/GetUserTypeById/`, //get
  AddUserType = `${ApiPrefix}/UserType/AddUserType`, //post
  UpdateUserType = `${ApiPrefix}/UserType/UpdateUserType`, //post
  ActiveUserType = `${ApiPrefix}/UserType/ActiveUserType/`, //put
  InactiveUserType = `${ApiPrefix}/UserType/InActiveUserType/`, //put
  DeleteUserType = `${ApiPrefix}/UserType/DeleteUserType/`, //delete
  // supportTicket
  GetSupportTicketsForAgents = `${ApiPrefix}/SupportTicket/GetSupportTicketsForAgents`, // get
  GetSupportTicketList = `${ApiPrefix}/SupportTicket/GetSupportTickets`, // get
  DeleteSupportTicket = `${ApiPrefix}/SupportTicket/DeleteSupportTicket/`,
  GetSupportTicketById = `${ApiPrefix}/SupportTicket/GetSupportTicketById/`, //get
  AddSupportTicket = `${ApiPrefix}/SupportTicket/AddSupportTicket`, //post
  UpdateSupportTicket = `${ApiPrefix}/SupportTicket/UpdateSupportTicket`, //post
  GetSupportTicketType = `${ApiPrefix}/Common/GetSupportTypes`,
  SupportTicketApproval = `${ApiPrefix}/SupportTicket/SupportTicketApproval`,

  //Report
  DateWiseStockDetails = "DateWiseStockDetails",
  GetPeriodicFilterDropdownList = "GetPeriodicFilterDropdownList",
  GetAverageDeliveryTimeTableData = "GetAverageDeliveryTimeTableData",
  GetCategoryWiseSalesTableData = "GetCategoryWiseSalesTableData",
  GetCategoryWiseSalesReport = "GetCategoryWiseSalesReport",
  GetLocationsWiseSalesTableData = "GetLocationsWiseSalesTableData",
  GetLocationsWiseSalesReport = "GetLocationsWiseSalesReport",
  GetSalesReconciliationTableData = "GetSalesReconciliationTableData",
  GetSellerWiseSalesReport = "GetSellerWiseSalesReport", //get
  GetTotalSalesTableData = "GetTotalSalesTableData",
  GetTotalSalesReport = "GetTotalSalesReport", //post //get

  // Case
  GetCase = `${ApiPrefix}/Case/GetAll`, // get
  GetCaseOption = `${ApiPrefix}/Case/GetAllOptions`, // get
  GetCaseById = `${ApiPrefix}/Case/GetById/`, //get
  AddCase = `${ApiPrefix}/Case/Create`, //post
  UpdateCase = `${ApiPrefix}/Case/Update`, //put
  ActiveCase = `${ApiPrefix}/Case/Active/`, //put
  InactiveCase = `${ApiPrefix}/Case/InActive/`, //put
  DeleteCase = `${ApiPrefix}/Case/Delete/`, //delete
  GetCaseCount = `${ApiPrefix}/Case/GetCaseCount`,

  // Case category
  GetCaseCategory = `${ApiPrefix}/CaseCategory/GetAll`, // get
  GetCaseCategoryOption = `${ApiPrefix}/CaseCategory/GetAllOptions`, // get
  GetCaseCategoryById = `${ApiPrefix}/CaseCategory/GetById/`, //get
  AddCaseCategory = `${ApiPrefix}/CaseCategory/Create`, //post
  UpdateCaseCategory = `${ApiPrefix}/CaseCategory/Update`, //put
  ActiveCaseCategory = `${ApiPrefix}/CaseCategory/Active/`, //put
  InactiveCaseCategory = `${ApiPrefix}/CaseCategory/InActive/`, //put
  DeleteCaseCategory = `${ApiPrefix}/CaseCategory/Delete/`, //delete

  // Case sub category
  GetCaseSubCategory = `${ApiPrefix}/CaseSubCategory/GetAll`, // get
  GetCaseSubCategoryById = `${ApiPrefix}/CaseSubCategory/GetById/`, //get
  AddCaseSubCategory = `${ApiPrefix}/CaseSubCategory/Create`, //post
  UpdateCaseSubCategory = `${ApiPrefix}/CaseSubCategory/Update/`, //put
  ActiveCaseSubCategory = `${ApiPrefix}/CaseSubCategory/Active/`, //put
  InactiveCaseSubCategory = `${ApiPrefix}/CaseSubCategory/InActive/`, //put
  DeleteCaseSubCategory = `${ApiPrefix}/CaseSubCategory/Delete/`, //delete

  // Point Of Entry
  GetPointOfEntry = `${ApiPrefix}/PointOfEntry/GetAll`, // get
  GetPointOfEntryOption = `${ApiPrefix}/PointOfEntry/GetAll/`, // get
  GetPointOfEntryById = `${ApiPrefix}/PointOfEntry/GetById/`, //get
  AddPointOfEntry = `${ApiPrefix}/PointOfEntry/Create`, //post
  UpdatePointOfEntry = `${ApiPrefix}/PointOfEntry/Update`, //put
  ActivePointOfEntry = `${ApiPrefix}/PointOfEntry/Active/`, //put
  InactivePointOfEntry = `${ApiPrefix}/PointOfEntry/InActive/`, //put
  DeletePointOfEntry = `${ApiPrefix}/PointOfEntry/Delete/`, //delete

  // Skill Group
  GetSkillGroup = `${ApiPrefix}/SkillGroup/GetAll`, // get
  GetSkillGroupOption = `${ApiPrefix}/SkillGroup/GetAllOptions`, // get
  CreateSkillGroup = `${ApiPrefix}/SkillGroup/Create`, // POST
  UpdateSkillGroup = `${ApiPrefix}/SkillGroup/Update`, // PUT
  DeleteSkillGroup = `${ApiPrefix}/SkillGroup/DeleteSkillGroup/`, // PUT

  // Case sub category
  GetPoeVsCaseSubCategoryMapping = `${ApiPrefix}/PoeVsCaseSubCategoryMapping/GetAll`, // get
  GetPoeVsCaseSubCategoryMappingById = `${ApiPrefix}/PoeVsCaseSubCategoryMapping/GetById/`, //get
  AddPoeVsCaseSubCategoryMapping = `${ApiPrefix}/PoeVsCaseSubCategoryMapping/Create`, //post
  UpdatePoeVsCaseSubCategoryMapping = `${ApiPrefix}/PoeVsCaseSubCategoryMapping/Update`, //put
  ActivePoeVsCaseSubCategoryMapping = `${ApiPrefix}/PoeVsCaseSubCategoryMapping/Active/`, //put
  InactivePoeVsCaseSubCategoryMapping = `${ApiPrefix}/PoeVsCaseSubCategoryMapping/InActive/`, //put
  DeletePoeVsCaseSubCategoryMapping = `${ApiPrefix}/PoeVsCaseSubCategoryMapping/Delete/`, //delete

  //Get All Email
  GetAllEmailAccount = `${ApiPrefix}/EmailAccount/GetAll`, // get
  GetEmailAccountById = `${ApiPrefix}/EmailAccount/GetById/`, // get
  CreateEmailAccount = `${ApiPrefix}/EmailAccount/Create`, // post
  UpdateEmailAccount = `${ApiPrefix}/EmailAccount/Update`, // put
  DeleteEmailAccount = `${ApiPrefix}/EmailAccount/Delete/`, // put
  GetEmailCount = `${ApiPrefix}/Email/GetEmailCount`,

  //Get All Skill Group
  GetAllSkillGroup = `${ApiPrefix}/SkillGroup/GetAll`, // get
  GetSkillGroupById = `${ApiPrefix}/SkillGroup/GetById/`, // get
  GetSkillGroupMappingById = `${ApiPrefix}/UserSkillGroupMapping/GetById/`, // get
  updateSkillGroupMappingById = `${ApiPrefix}/UserSkillGroupMapping/Update`, // get
  // Case Pool
  GetAllCasePool = `${ApiPrefix}/Case/GetAll`, // get

  // Cases
  TransferCase = `${ApiPrefix}/Case/TransferCase`, // post
  CaseClaim = `${ApiPrefix}/Case/ClaimCase`, // post
  OpenCase = `${ApiPrefix}/Case/OpenCase`, // post
  ResolveCase = `${ApiPrefix}/Case/ResolveCase `, // post
  HoldCase = `${ApiPrefix}/Case/HoldCase`, // post
  CommentCase = `${ApiPrefix}/Case/CommentCase`, // post
  GetReasonDropdown = `${ApiPrefix}/Common/GetReasons`, // get
  GetListOfComments = `${ApiPrefix}/Case/GetComments/`, // get
  GetReturnById = `${ApiPrefix}/Search/GetReturnById/`, // get

  //Get Search Summary
  GetSearchSummary = `${ApiPrefix}/Search/GetSearchSummary`, // get
  ApproveCase = `${ApiPrefix}/Case/Approve`, // post
  RejectCase = `${ApiPrefix}/Case/Reject`, // post

  GetAllEmail = `${ApiPrefix}/Email/GetAll`, // post
  GetEmailById = `${ApiPrefix}/Email/GetById/`, // get
  UpdateReadStatus = `${ApiPrefix}/Email/UpdateToRead`, // put

  //Search
  GetCaseSerachList = `${ApiPrefix}/Search/SearchCase`,
  GetChatSerachList = `${ApiPrefix}/Search/SearchChat`,

  //customer center
  getCustomerDetails = `${ApiPrefix}/Search/GetSearchResult`,
  GetCaseList = `${ApiPrefix}/Search/GetCaseList`,
  GetContactlist = `${ApiPrefix}/Search/GetContactList`,
  GetOrderListByClientId = `${ApiPrefix}/Search/GetOrderListByClientId`,
  CreateCaseHistory = `${ApiPrefix}/Case/Create`,
  UpdateActiveInactive = `${ApiPrefix}/Search/UpdateBuyerOrSellerStatus`,

  // Email
  SendEmail = `${ApiPrefix}/Email/SendEmail`,
  ReplyEmail = `${ApiPrefix}/Email/ReplyEmail`,
  GetAttachmentById = `${ApiPrefix}/Email/GetAttachmentById/`,

  //Case search
  GetCaseSearchCSVReport = `${ApiPrefix}/Search/CaseCSVDownload`,

  //Email Bind
  CreateEmailBind = `${ApiPrefix}/Case/BindCaseWithEmail`,

  // Modify Return Case
  CreateModifyReturnCase = `${ApiPrefix}/Order/ModifyReturnRequest`,

  // Search
  GetClientStatusChangeHistory = `${ApiPrefix}/Search/GetClientStatusChangeHistory`,

  // Order Cancel
  CreateOrderCancelCase = `${ApiPrefix}/Order/Cancel`,

  // Order Return
}
