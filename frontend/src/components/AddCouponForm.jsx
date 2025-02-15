import { useState } from "react";
import { useCouponStore } from "../stores/useCouponStore";
import { motion } from "framer-motion";
import { Loader } from "lucide-react";

const AddCouponForm = () => {
    const [newCoupon, setNewCoupon] = useState({
        code: "",
        discountPercentage: 0,
        expirationDate: "",
        isActive: true,
    });

    const { createCoupon, loading } = useCouponStore();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createCoupon(newCoupon);
            setNewCoupon({ code: "", discountPercentage: 0, expirationDate: "", isActive: true });
        } catch {
            console.log("error creating a product");
        }
    };

    return (
        <motion.div
            className='bg-gray-800 shadow-lg rounded-lg p-8 w-full mx-auto'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <div>
                <h2 className='text-2xl font-semibold mb-6 text-emerald-300 text-center'>Create New Coupon</h2>

                <form onSubmit={handleSubmit} className='space-y-4'>
                    <div>
                        <label htmlFor='name' className='block text-sm font-medium text-gray-300'>
                            Code
                        </label>
                        <input
                            type='text'
                            id='code'
                            name='code'
                            value={newCoupon.code}
                            onChange={(e) => setNewCoupon({ ...newCoupon, code: e.target.value })}
                            className='mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2
						 px-3 text-white focus:outline-none focus:ring-2
						focus:ring-emerald-500 focus:border-emerald-500'
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor='price' className='block text-sm font-medium text-gray-300'>
                            Discount
                        </label>
                        <input
                            type='number'
                            id='discountPercentage'
                            name='discountPercentage'
                            value={newCoupon.discountPercentage}
                            onChange={(e) => setNewCoupon({ ...newCoupon, discountPercentage: e.target.value })}
                            step='0.01'
                            className='mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm 
						py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500
						 focus:border-emerald-500'
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor='category' className='block text-sm font-medium text-gray-300'>
                            Expiration Date
                        </label>
                        <input
                            type="date"
                            id='expirationDate'
                            name='expirationDate'
                            value={newCoupon.expirationDate}
                            onChange={(e) => setNewCoupon({ ...newCoupon, expirationDate: e.target.value })}
                            className='mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md
						 shadow-sm py-2 px-3 text-white focus:outline-none 
						 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500'
                            required
                        />
                    </div>

                    <button
                        type='submit'
                        className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md 
					shadow-sm text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 
					focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 disabled:opacity-50'
                        disabled={loading}
                    >
                        {loading ? (
                            <>
                                <Loader className='mr-2 h-5 w-5 animate-spin' aria-hidden='true' />
                                Loading...
                            </>
                        ) : (
                            <>
                                Create Coupon
                            </>
                        )}
                    </button>
                </form>
            </div>
        </motion.div>
    );
};
export default AddCouponForm;