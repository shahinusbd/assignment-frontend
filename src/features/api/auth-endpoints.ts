export const AuthApiPrefix = "/api/v1";

export enum AuthApi {
  Login = `${AuthApiPrefix}/users/signin`,
  //ChangePassword = `${AuthApiPrefix}/users/change-password`,
  //SendMail = ``,
  RefreshToken = ``,
  UpdatePassword = ``,
  GetSidebarMenu = `${AuthApiPrefix}/users/get-logged-in-user-menus`,

  // Menu
  serviceDropdownList = `${AuthApiPrefix}/services/all-services`,
  MenuTypeDropdownList = `${AuthApiPrefix}/menus/all-menu-type`,
  SAMenuDropdownList = `${AuthApiPrefix}/menus/sa/get-menu-parent-list/`,
  MenuDropdownList = `${AuthApiPrefix}/menus/get-menu-parent-list`,
  MenuList = `${AuthApiPrefix}/menus/get-menu-menuType-list`,
  SAMenuList = `${AuthApiPrefix}/menus/sa/get-menu-menuType-list/`,
  MenuDetails = `${AuthApiPrefix}/menus/get-menu-details/`,
  SAMenuDetails = `${AuthApiPrefix}/menus/sa/get-menu-details/`,
  CreateMenu = `${AuthApiPrefix}/menus/create-menu`,
  UpdateMenu = `${AuthApiPrefix}/menus/update-menu/`,
  UpdateMenuStatus = `${AuthApiPrefix}/menus/update-status/`,

  //Role wise menu permission
  GetMenuTree = `${AuthApiPrefix}/menus/get-all-nav-menu-tree-list-v2`,
  SAGetMenuTree = `${AuthApiPrefix}/menus/sa/get-all-nav-menu-tree-list-v2/`,
  CreateUserRoleMenuPermission = `${AuthApiPrefix}/users/create-role-menu-permission`,
  GetMenuIdsByRoleId = `${AuthApiPrefix}/roles/role-permission/get-menu-ids-by-role-id/`,
  SAGetMenuIdsByRoleId = `${AuthApiPrefix}/roles/sa/role-permission/get-menu-ids-by-role-id/`,
  GetRoleWiseMenuPermission = `${AuthApiPrefix}/users/get-role-menu-permission-service-wise-list`,
  SAGetRoleWiseMenuPermission = `${AuthApiPrefix}/users/sa/get-role-menu-permission-service-wise-list/`,
  RoleWiseMenuPermissionStatusChange = `${AuthApiPrefix}/users/update-role-menu-permission-status/`,
  RoleWiseMenuPermissionDetails = `${AuthApiPrefix}/roles/role-permission/get-menu-ids-by-role-id/`,
  SARoleWiseMenuPermissionDetails = `${AuthApiPrefix}/roles/sa/role-permission/get-menu-ids-by-role-id/`,

  // Role
  RoleList = `${AuthApiPrefix}/roles/get-all-role`,
  SARoleList = `${AuthApiPrefix}/roles/sa/get-all-role/`,
  RoleDetails = `${AuthApiPrefix}/roles/get-role-details/`,
  SARoleDetails = `${AuthApiPrefix}/roles/sa/get-role-details/`,
  CreateRole = `${AuthApiPrefix}/roles/create-role`,
  UpdateRole = `${AuthApiPrefix}/roles/update-role/`,
  UpdateRoleStatus = `${AuthApiPrefix}/roles/update-status/`,
  GetMappedRoles = `${AuthApiPrefix}/roles/get-mapped-roles`,
  GetSAMappedRoles = `${AuthApiPrefix}/roles/sa/get-mapped-roles/`,
  GetUnmappedRoles = `${AuthApiPrefix}/roles/get-unmapped-roles`,
  GetSAUnmappedRoles = `${AuthApiPrefix}/roles/sa/get-unmapped-roles/`,

  // user role permission
  UserRolePermissionList = `${AuthApiPrefix}/users/get-user-role-permission-list`,
  SAUserRolePermissionList = `${AuthApiPrefix}/users/sa/get-user-role-permission-list/`,
  UserRolePermissionDetails = `${AuthApiPrefix}/users/get-user-role-permission-details/`,
  SAUserRolePermissionDetails = `${AuthApiPrefix}/users/sa/get-user-role-permission-details/`,
  CreateUserRolePermission = `${AuthApiPrefix}/users/create-user-role-permission`,
  UpdateUserRolePermission = `${AuthApiPrefix}/users/update-user-role-permission`,
  UpdateUserRolePermissionStatus = `${AuthApiPrefix}/users/update-user-role-permission-status/`,
  CommonRoles = `${AuthApiPrefix}/roles/get-roles`,
  SARoles = `${AuthApiPrefix}/roles/sa/get-roles/`,
  SAUserList = `${AuthApiPrefix}/users/sa/get-user-list/`,
  GetUsers = `${AuthApiPrefix}/users/get-service-wise-user-list-data`,
}
