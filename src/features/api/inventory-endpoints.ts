export const InventoryApiPrefix = "/api";

export enum InventoryApi {
  //Common
  GetFlashDealCategory = `${InventoryApiPrefix}/CommonService/GetFlashDealCategories`,
  GetProductCategory = `${InventoryApiPrefix}/CommonService/GetProductCategories`,
  GeProducts = `${InventoryApiPrefix}/CommonService/GetProducts`,

  //FLash-Deal
  FlashDealCategoriesResource = `${InventoryApiPrefix}/Marketing/FlashDealCategory`, //get, post
  FlashDealAdd = `${InventoryApiPrefix}/FlashDeal/AddFlashDeal`, //get, post
  FlashDealEdit = `${InventoryApiPrefix}/FlashDeal/`,
  GetFlashDeal = `${InventoryApiPrefix}/FlashDeal/GetFlashDeals`,
  GetFlashDealById = `${InventoryApiPrefix}/FlashDeal/GetFlashDealById/`,
  FlashDealActive = `${InventoryApiPrefix}/FlashDeal/Active/`,
  FlashDealInactive = `${InventoryApiPrefix}/FlashDeal/InActive/`,
  FlashDealDelete = `${InventoryApiPrefix}/FlashDeal/Delete/`,

  // //Product
  ProductSource = `${InventoryApiPrefix}/Product`,
  SetActiveProduct = `${InventoryApiPrefix}/Product/Active/`,
  SetInactiveProduct = `${InventoryApiPrefix}/Product/InActive/`,
  updateProduct = `${InventoryApiPrefix}/Product/`,
  GetUOM = `${InventoryApiPrefix}/CommonService/UnitOfMeasurements`,
  GetAllCategoryWiseAttributes = `${InventoryApiPrefix}/Product/Attribute/GetCategoryWiseAttributes`, //get

  //shipping-cost-category
  GetShippingCostCategory = `${InventoryApiPrefix}/CategoryWiseShippingCost/`, //get
  DeleteShippingCostCategory = `${InventoryApiPrefix}/CategoryWiseShippingCost/`, //delete
  ActiveShippingCostCategory = `${InventoryApiPrefix}/CategoryWiseShippingCost/Active/`, //active
  InActiveShippingCostCategory = `${InventoryApiPrefix}/CategoryWiseShippingCost/InActive/`, //inactive
  GetShippingCostCategoryById = `${InventoryApiPrefix}/CategoryWiseShippingCost/`, //get
  AddShippingCostCategory = `${InventoryApiPrefix}/CategoryWiseShippingCost/`, //post
  UpdateShippingCostCategory = `${InventoryApiPrefix}/CategoryWiseShippingCost/`, //put
}
