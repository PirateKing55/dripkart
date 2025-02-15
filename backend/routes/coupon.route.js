import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import { getCoupon, getAllCoupons, validateCoupon, createCoupon, toggleActive } from "../controllers/coupon.controller.js";

const router = express.Router();

router.get("/", protectRoute, getCoupon);
router.get("/all", protectRoute, getAllCoupons);
router.post("/validate", protectRoute, validateCoupon);
router.post("/create", protectRoute, createCoupon);
router.put("/toggleActive", protectRoute, toggleActive);

export default router;
