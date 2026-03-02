export default function ForgotPasswordPage() {
    return (
        <div className="customer-page p-10 container">
            <div className="p-10" style={{ padding: '20px 0' }}>
                <form action="" method="post" encType="multipart/form-data">
                    <h2 className="text-20 font-600">Bạn quên mật khẩu vào tài khoản?</h2>
                    <p>Vui lòng nhập địa chỉ email đã đăng ký với chúng tôi để tạo mật khẩu mới. Chúng tôi sẽ gửi 1 email vào địa chỉ email cung cấp và yêu cầu xác minh trước khi có thể tạo mật khẩu mới</p>
                    <table>
                        <tbody>
                            <tr>
                                <td>Nhập địa chỉ email đăng ký</td>
                                <td>
                                    <input 
                                        type="text" 
                                        size={40} 
                                        name="email"
                                        className="bg-white w-full block h-9 rounded-[4px] px-3" 
                                    />
                                    <span className="red d-block"></span>
                                </td>
                            </tr>
                            <tr>
                                <td />
                                <td>
                                    <input 
                                        type="button" 
                                        className="btn-regis text-uppercase bold px-9" 
                                        style={{ width: 'auto' }}
                                        defaultValue="Lấy mật khẩu" 
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        </div>

    )
}