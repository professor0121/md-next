import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import axiosInstance from "@/lib/axios";

/**
 * 🧾 Order Type
 */
export type Order = {
  _id: string;
  name: string;
  phone: string;
  address: string;
  pincode: string;
  quantity: number;
  total: number;
  product: string;
  orderId: string;
  createdAt: string;
};
/**
 * 📦 API Response Types
 */
type GetOrdersResponse = {
  success: boolean;
  page: number;
  totalPages: number;
  total: number;
  data: Order[];
};

type CreateOrderResponse = {
  success: boolean;
  message: string;
  order: Order;
};

/**
 * 📦 State
 */
type OrderState = {
  orders: Order[];
  loading: boolean;
  error: string | null;
  page: number;
  totalPages: number;
  total: number;
};

const initialState: OrderState = {
  orders: [],
  loading: false,
  error: null,
  page: 1,
  totalPages: 1,
  total: 0,
};


export const createOrder = createAsyncThunk<
  Order,
  Partial<Order>,
  { rejectValue: string }
>("order/create", async (data, { rejectWithValue }) => {
  try {
    const res = await axiosInstance.post<CreateOrderResponse>(
      "/order",
      data
    );

    return res.data.order;
  } catch (error) {
    const err = error as AxiosError<{ message: string }>;
    return rejectWithValue(err.response?.data?.message || "Create failed");
  }
});

type GetOrdersParams = {
  search?: string;
  page?: number;
  limit?: number;
  startDate?: string;
  endDate?: string;
  date?: string;
};

export const getOrders = createAsyncThunk<
  GetOrdersResponse,
  GetOrdersParams,
  { rejectValue: string }
>("order/getAll", async (params, { rejectWithValue }) => {
  try {
    const query = new URLSearchParams();

    if (params.search) query.append("search", params.search);
    if (params.page) query.append("page", String(params.page));
    if (params.limit) query.append("limit", String(params.limit));
    if (params.startDate) query.append("startDate", params.startDate);
    if (params.endDate) query.append("endDate", params.endDate);
    if (params.date) query.append("date", params.date);

    const res = await axiosInstance.get<GetOrdersResponse>(
      `/order?${query.toString()}`
    );

    return res.data;
  } catch (error) {
    const err = error as AxiosError<{ message: string }>;
    return rejectWithValue(err.response?.data?.message || "Fetch failed");
  }
});



const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder

      // CREATE
      .addCase(createOrder.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createOrder.fulfilled, (state, action: PayloadAction<Order>) => {
        state.loading = false;
        state.orders.unshift(action.payload);
      })
      .addCase(createOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Error";
      })

      // GET
      .addCase(getOrders.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getOrders.fulfilled, (state, action: PayloadAction<GetOrdersResponse>) => {
        state.loading = false;
        state.orders = action.payload.data;
        state.page = action.payload.page;
        state.totalPages = action.payload.totalPages;
        state.total = action.payload.total;
      })
      .addCase(getOrders.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Error";
      });
  },
});

export default orderSlice.reducer;