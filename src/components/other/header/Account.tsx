import Link from 'next/link';

export default function Account(){
    return (
        <div className="header-account bg-[#003ED0] rounded-[30px] group">
            <button type="button" className="flex items-center justify-center gap-2 py-[6px] w-[103px]" aria-label="Tài khoản">
                <i className="icons icon-user"></i>
                <span className="text"> Đăng<br/>Nhập </span>
            </button>
            
            <div className="bg-white text-[#000] text-16 leading-6 absolute top-[150%] right-0 whitespace-nowrap min-w-[220px] overflow-hidden rounded-md shadow-[0px_4px_10px_0px_#0000001a]  transition-all duration-200 z-[-1] invisible opacity-0 group-hover:opacity-100 group-hover:visible group-hover:z-[9] group-hover:top-[100%] group-hover:visible">
                <Link href="/dang-ky" className="flex items-center px-3 py-3 transition-all duration-100 hover:bg-[#0676DA] hover:text-white w-full text-left">
                    <i className="bx bx-user w-5 h-5 text-center mr-2 text-20"></i>
                    <span>Đăng ký</span>
                </Link>

                <Link href="/dang-nhap" className="flex items-center px-3 py-3 transition-all duration-100 hover:bg-[#0676DA] hover:text-white w-full text-left">
                    <i className="bx bx-user w-5 h-5 text-center mr-2 text-20"></i>
                    <span>Đăng nhập</span>
                </Link>

                <Link href="/taikhoan?view=change-info" className="flex items-center px-3 py-3 transition-all duration-100 hover:bg-[#0676DA] hover:text-white">
                    <i className="bx bx-user w-5 h-5 text-center mr-2 text-20"></i>
                    <span>Thông tin tài khoản</span>
                </Link>

                <Link href="/taikhoan?view=order" className="flex items-center px-3 py-3 transition-all duration-100 hover:bg-[#0676DA] hover:text-white">
                    <i className="bx bx-list-ul-square w-5 h-5 text-center mr-2 text-20"></i>
                    <span>Danh sách đơn hàng</span>
                </Link>

                <Link href="/san-pham-da-xem" className="flex items-center px-3 py-3 transition-all duration-100 hover:bg-[#0676DA] hover:text-white">
                    <i className="bx bx-eye w-5 h-5 text-center mr-2 text-20"></i>
                    <span>Sản phẩm đã xem</span>
                </Link>

                <Link href="/taikhoan?view=change-pass" className="flex items-center px-3 py-3 transition-all duration-100 hover:bg-[#0676DA] hover:text-white">
                    <i className="bx bx-lock w-5 h-5 text-center mr-2 text-20"></i>
                    <span>Thay đổi mật khẩu</span>
                </Link>

                <Link href="/logout.php" className="flex items-center px-3 py-3 transition-all duration-100 hover:bg-[#0676DA] hover:text-white">
                    <i className="bx bx-arrow-out-right-square-half w-5 h-5 text-center mr-2 text-20"></i>
                    <span>Thoát tài khoản</span>
                </Link>
            </div>
        </div>
    )
}