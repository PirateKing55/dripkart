import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useCouponStore } from "../stores/useCouponStore";
import Modal from "./Modal";
import AddCouponForm from "./AddCouponForm";
import ToggleButton from "./ToggleButton";
import { useState } from "react";

const CouponsList = () => {
	const { toggleActive, coupons } = useCouponStore();
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleModal = () => {
		console.log("handleModal");
		setIsModalOpen(!isModalOpen);
	};

	const toggleCouponIsActive = async (code) => {
		try {
			await toggleActive(code);
		} catch (error) {
			console.log("error deactivating coupon", error);
		}
	};

	console.log("coupons", coupons);

	return (
		<motion.div
			className='shadow-lg rounded-lg overflow-hidden max-w-4xl mx-auto'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.8 }}
		>
			<button
				className='ml-auto mb-5 flex px-2 py-1 justify-center items-center border border-transparent rounded-md 
					shadow-sm text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 
					focus:outline-none '
				onClick={handleModal}
			>
				Create Coupon
			</button>
			<Modal isOpen={isModalOpen} onClose={handleModal}>
				<AddCouponForm />
			</Modal>
			<table className=' min-w-full divide-y divide-gray-700'>
				<thead className='bg-gray-700'>
					<tr>
						<th
							scope='col'
							className='px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider'
						>
							Code
						</th>
						<th
							scope='col'
							className='px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider'
						>
							Discount
						</th>
						<th
							scope='col'
							className='px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider'
						>
							Expiration Date
						</th>

						<th
							scope='col'
							className='px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider'
						>
							State
						</th>
					</tr>
				</thead>

				<tbody className='bg-gray-800 divide-y divide-gray-700'>
					{coupons?.map((coupon) => (
						<tr key={coupon.code} className='hover:bg-gray-700'>
							<td className='px-6 py-4 whitespace-nowrap'>
								<div className='flex items-center'>
									<div className=''>
										<div className='text-sm font-medium text-white'>{coupon.code.trim()}</div>
									</div>
								</div>
							</td>
							<td className='px-6 py-4 whitespace-nowrap'>
								<div className='text-sm text-gray-300'>{coupon.discountPercentage}%</div>
							</td>
							<td className='px-6 py-4 whitespace-nowrap'>
								<div className='text-sm text-gray-300'>
									{new Date(coupon.expirationDate).toLocaleDateString("en-US", {
										year: "numeric",
										month: "long",
										day: "numeric",
									})}
								</div>
							</td>
							<td className='px-4 py-4 whitespace-nowrap'>
								<ToggleButton
									isActive={coupon.isActive}
									onToggle={() => toggleCouponIsActive(coupon.code)}
								/>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</motion.div>
	);
};
export default CouponsList;
