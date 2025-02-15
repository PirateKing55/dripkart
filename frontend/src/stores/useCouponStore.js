import { create } from "zustand";
import toast from "react-hot-toast";
import axios from "../lib/axios";

export const useCouponStore = create((set) => ({
    coupons: [],
    loading: false,
    error: null,

    setCoupons: (coupons) => set({ coupons }),
    createCoupon: async (couponData) => {
        set({ loading: true });
        try {
            const res = await axios.post("/coupons/create", couponData);
            set((prevState) => ({
                coupons: [...prevState.coupons, res.data],
                loading: false,
            }));
        } catch (error) {
            toast.error(error.response.data.error);
            set({ loading: false });
        }
    },
    fetchAllCoupons: async () => {
        set({ loading: true });
        try {
            const response = await axios.get("/coupons/all");
            set({ coupons: response.data, loading: false });
        }
        catch (error) {
            set({ error: "Failed to fetch coupons", loading: false });
            toast.error(error.response.data.error || "Failed to fetch coupons");
        }
    },
    toggleActive: async (code) => {
        set({ loading: true });
        try {
            await axios.put(`/coupons/toggleActive`, { code });
            set((prevState) => ({
                coupons: prevState.coupons.map((coupon) => {
                    if (coupon.code === code) {
                        coupon.isActive = !coupon.isActive;
                    }
                    return coupon;
                }),
                loading: false,
            }));
            toast.success("Coupon toggled successfully");
        } catch (error) {
            set({ loading: false });
            console.log("error deactivating coupon", error);
            toast.error(error.response.data.error || "Failed to deactivate coupon");
        }
    }
}));