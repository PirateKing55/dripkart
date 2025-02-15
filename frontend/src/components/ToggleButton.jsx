import { motion } from "framer-motion";
import { useState } from "react";

const ToggleButton = ({ isActive, onToggle }) => {
    const [isCouponActive, setIsCouponActive] = useState(isActive);

    console.log(isActive)

    const handleToggle = () => {
        setIsCouponActive(!isCouponActive);
        onToggle();
    }
    return (
        <button
            onClick={handleToggle}
            className={`relative w-12 h-6 rounded-full ${isCouponActive ? "bg-[#31c791]" : "bg-gray-600"} focus:outline-none scale-75`}
        >
            <motion.div
                className="absolute left-0.5 top-0.5 w-5 h-5 rounded-full bg-gray-300"
                animate={{
                    x: isCouponActive ? 24 : 0,
                    backgroundColor: isCouponActive ? "#4B5563" : "#31c791"
                }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
        </button>
    );
};

export default ToggleButton;