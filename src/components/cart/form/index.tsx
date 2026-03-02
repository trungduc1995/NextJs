'use client';
import { useState } from "react";
import { useRouter } from 'next/navigation';
import Link from "next/link";

type FormType = {
    name: string;
    phone: string;
    email: string;
    address: string;
    note: string;
};

type ErrorType = {
    name?: string;
    phone?: string;
    email?: string;
    address?: string;
};

export default function Form() {
    const router = useRouter();

    const [form, setForm] = useState<FormType>({
        name: "",
        phone: "",
        email: "",
        address: "",
        note: ""
    });

    const [ errors, setErrors ] = useState<ErrorType>({});
    const [ submit, setSubmit ] = useState(false);

    // =========================
    // Handle change
    // =========================
    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;

        setForm(prev => ({ ...prev, [name]: value }));

        // clear error khi user sửa lại field đó
        if (errors[name as keyof ErrorType]) {
            setErrors(prev => ({ ...prev, [name]: undefined }));
        }
    };

    // =========================
    // Validate
    // =========================
    const checkField = () => {
        const newErrors: ErrorType = {};

        if (!form.name.trim()) {
            newErrors.name = "Vui lòng nhập họ và tên";
        }

        if (!form.phone.trim()) {
            newErrors.phone = "Vui lòng nhập số điện thoại";
        } else if (!/^[0-9]{10,11}$/.test(form.phone)) {
            newErrors.phone = "Số điện thoại không hợp lệ";
        }

        if (!form.email.trim()) {
            newErrors.email = "Vui lòng nhập email";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
            newErrors.email = "Email không hợp lệ";
        }

        if (!form.address.trim()) {
            newErrors.address = "Vui lòng nhập địa chỉ nhận hàng";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // =========================
    // Submit
    // =========================
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!checkField()) return;

        console.log("Form hợp lệ:", form);
        // call API đặt hàng ở đây
        
        setSubmit(true)
        router.push('/send-cart');
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="col-right w-[440px] bg-white rounded-[16px] px-5 py-6 sticky top-[90px] z-[1] shadow-[0px_4px_20px_0px_#0615070D] lg:shadow-none"
        >
            <p className="font-600 text-18 text-[#004BA4] mb-1">
                Thông tin nhận hàng
            </p>

            <div className="leading-[18px] text-[#474747] mb-4">
                Để tiếp tục đặt hàng, quý khách xin vui lòng
                <Link href="/dang-nhap" className="font-500 text-[#0678DB]" > Đăng nhập </Link>
                hoặc nhập thông tin bên dưới. Tư vấn viên sẽ liên hệ theo thông tin bạn
                cung cấp để xác nhận, không mua không sao
            </div>

            {/* Họ tên */}
            <input
                name="name"
                value={form.name}
                onChange={handleChange}
                className={`block w-full h-[50px] mb-4 rounded-[12px] bg-[#F3F3F3] px-4
                    ${errors.name ? "border border-[#FA354A]" : "border border-transparent"}
                `}
                placeholder="Họ và tên"
            />
            {errors.name && (
                <p className="text-red-500 text-sm mb-3 mt-1">
                    {errors.name}
                </p>
            )}

            {/* Số điện thoại */}
            <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                type="tel"
                maxLength={11}
                className={`block w-full h-[50px] mb-4 rounded-[12px] bg-[#F3F3F3] px-4
                    ${errors.phone ? "border border-[#FA354A]" : "border border-transparent"}
                `}
                placeholder="Số điện thoại"
            />

            {errors.phone && (
                <p className="text-red-500 text-sm mb-3 mt-1">
                    {errors.phone}
                </p>
            )}

            {/* Email */}
            <input
                name="email"
                value={form.email}
                onChange={handleChange}
                type="email"
                className={`block w-full h-[50px] mb-4 rounded-[12px] bg-[#F3F3F3] px-4
                    ${errors.email ? "border border-[#FA354A]" : "border border-transparent"}
                `}
                placeholder="Nhập email"
            />
            {errors.email && (
                <p className="text-red-500 text-sm mb-3 mt-1">
                    {errors.email}
                </p>
            )}

            {/* Địa chỉ */}
            <input
                name="address"
                value={form.address}
                onChange={handleChange}
                className={`block w-full h-[50px] mb-4 rounded-[12px] bg-[#F3F3F3] px-4
                            
                    ${errors.address ? "border border-[#FA354A]" : "border border-transparent"}
                `}
                placeholder="Địa chỉ nhận hàng"
            />
            {errors.address && (
                <p className="text-red-500 text-sm mb-3 mt-1">
                    {errors.address}
                </p>
            )}

            <p className="text-[#757575] mb-4 text-sm">
                <i className="bx bx-info-circle text-[#0678DB] mr-1" />
                Nhập Số nhà, Đường, Phường/xã, Quận, Tỉnh
            </p>

            {/* Ghi chú */}
            <textarea
                name="note"
                value={form.note}
                onChange={handleChange}
                className="block w-full h-[112px] mb-5 rounded-[12px] bg-[#F3F3F3] px-4 pt-2 resize-none"
                placeholder="Ghi chú"
            />

            <button type="submit"
                className={`block w-full text-white h-[52px] rounded-[50px] font-500 text-18
                    ${submit ? 'bg-[#A0A5AC] pointer-events-none' :  'bg-btn'}
                `}
            >
                {submit ? 'ĐANG XỬ LÝ' : 'ĐẶT HÀNG'}
            </button>
        </form>
    );
}
