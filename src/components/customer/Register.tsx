'use client';
import Link from "next/link";
import { useState } from "react";

export default function RegisterPage() {
    const [ hidePass, setHidePass ] = useState(false);
    const [ hideConfirmPass, setHideConfirmPass ] = useState(false);

    return (
        <div className="customer-page container p-10">
            <div className="customer-content-group">
                <div className="text-center title text-18 font-600">
                    <Link href="/dang-ky" className="current mr-5">ĐĂNG KÝ</Link>
                    <Link href="/dang-nhap">ĐĂNG NHẬP</Link>
                </div>
                
                <div className="customer-form">
                    <form encType="multipart/form-data">
                        <div className="item">
                            <p>Họ và Tên<span className="red">*</span></p>
                            <input type="text" name="info[full_name]" id="full_name" />
                        </div>
                        <div className="item">
                            <p>Số điện thoại<span className="red">*</span></p>
                            <input type="text" name="info[tel]" id="tel" />
                        </div>
                        <div className="item">
                            <p>Địa chỉ<span className="red">*</span></p>
                            <input type="text" name="info[address]" id="address" />
                        </div>
                        <div className="item">
                            <p>Email<span className="red">*</span></p>
                            <input type="text" name="info[email]" id="email" />
                        </div>
                        <div className="item">
                            <p>Mật khẩu<span className="red">*</span></p>
                            <div className="position-relative">
                                <input 
                                    type={`${hidePass ? 'text' : 'password'}`} 
                                    className="input-pass" 
                                    name="info[password]" 
                                    id="password" 
                                />

                                <button 
                                    type="button"
                                    onClick={ () => setHidePass(!hidePass) }
                                    className="show-pass bx bx-eye-big" 
                                />
                            </div>
                        </div>

                        <div className="item">
                            <p>Nhập lại mật khẩu<span className="red">*</span></p>
                            <div className="position-relative">
                                <input 
                                    type={`${hideConfirmPass ? 'text' : 'password'}`} 
                                    className="input-pass" 
                                    name="info[confirm_password]" 
                                    id="confirm_password" 
                                />
                                
                                <button 
                                    type="button"
                                    onClick={ () => setHideConfirmPass(!hideConfirmPass) }
                                    className="show-pass bx bx-eye-big" 
                                />
                            </div>
                            <span className="d-block w-100 red" id="js-pass-alert" />
                        </div>
                        
                        <button type="button" className="bg-red font-600 text-18 text-white d-block btn-regis mt-3">ĐĂNG KÝ</button>
                    </form>
                </div>
            </div>
        </div>

    );
}