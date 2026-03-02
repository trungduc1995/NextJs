export default function ChangePassword() {
    return (
        <>
            <h3 className="title">Thay đổi mật khẩu</h3>

            <form method="post" encType="multipart/form-data" name="account_form" className="col-right-tbl">
                <table cellPadding={5} border={0} style={{ borderCollapse: 'collapse' }}>
                    <tbody>
                        <tr>
                            <td width="150px">Mật khẩu hiện tại</td>
                            <td>
                                <input type="password" name="currentpassword" id="currentpassword" className="form-control" />
                            </td>
                        </tr>
                        <tr>
                            <td>Mật khẩu mới</td>
                            <td>
                                <input type="password" name="newpassword" id="newpassword" className="form-control" />
                            </td>
                        </tr>
                        <tr>
                            <td>Nhập lại mật khẩu</td>
                            <td>
                                <input type="password" name="renewpassword" id="renewpassword" className="form-control" />
                            </td>
                        </tr>
                        <tr>
                            <td />
                            <td>
                                <input type="submit" defaultValue="Thay đổi" className="btn btn-danger" />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <input type="hidden" name="update" defaultValue="yes" />
            </form>

        </>
    );
}   