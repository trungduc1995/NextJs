export default function Order() {
    return (
        <>
            <h3 className="title">Danh sách đơn hàng</h3>
            <div style={{ overflow: 'auto' }} className="account-order">
                <table width="100%" border={1} style={{ borderCollapse: 'collapse' }} cellPadding={4} cellSpacing={0}>
                    <tbody>
                        <tr className="text-center" style={{ fontWeight: 'bold', background: '#0066c1', color: '#fff' }}>
                            <td>STT</td>
                            <td>Số đơn hàng</td>
                            <td>Giá trị</td>
                            <td>Thời gian</td>
                            <td>Thông tin</td>
                        </tr>

                        <tr className="text-center">
                            <td>1</td>
                            
                            <td>
                                #12236 
                                <a href="?view=order-detail&id=12236" className="table blue font-500 m-auto">Xem chi tiết</a>
                            </td>

                            <td className="red font-600">
                                1.990.000
                            </td>

                            <td>22-10-2025</td>

                            <td>
                                <span>Đang xử lý</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div >

        </>
    );
}   