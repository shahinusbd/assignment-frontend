import axios from "axios";
import process from "process";

export const ApiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_CRM_API_URL,
});

export const AuthApiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_AUTHENTICATION_URL,
});

export const AdminApiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_CRM_API_URL,
});

export const InventoryApiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_INVENTORY_API_URL,
});

export const AdminReportApiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_ADMIN_REPORT_API_URL,
});

export const MediaCenterApiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_MEDIACENTER_API_URL,
});

export const OrderApiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_ORDER_API_URL,
});
