'use client';
import Link from "next/link";
import { useState } from "react";
import { useRouter } from 'next/navigation';

export default function LoginPage() {
    const router = useRouter();

    const [ hidePass, setHidePass ] = useState(false);

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ error, setError ] = useState('');

    const handleLogin = () => {
        console.log('email: ', email);
        console.log('password: ', password);

        if (
            email === 'admin@mail.com' && 
            password === '123456'
        ) {
            setError('');

            router.push('/taikhoan');

        } else {
            setError('Email hoặc mật khẩu không đúng!');
        }

    }

    return (
        <div className="customer-page container p-10">
            <div className="customer-content-group">
                <div className="text-center title text-18 font-600">
                    <Link href="/dang-ky" className="mr-5">ĐĂNG KÝ</Link>
                    <Link href="/dang-nhap" className="current">ĐĂNG NHẬP</Link>
                </div>

                <p className="text-center font-bold red my-4">
                    Test:
                    admin@mail.com / 123456
                </p>

                <div className="customer-form">
                    <div className="item">
                        <p>Email<span className="red">*</span></p>
                        <input 
                            type="email" 
                            name="email" 
                            value={email}
                            onChange={ (e) => setEmail(e.target.value) }
                            required 
                        />                        
                    </div>

                    <div className="item">
                        <p>Mật khẩu<span className="red">*</span></p>
                        <div className="position-relative">
                            <input 
                                type={`${hidePass ? 'text' : 'password'}`}
                                className="input-pass" 
                                name="password" 
                                value={password}
                                onChange={ (e) => setPassword(e.target.value) }
                                required 
                            />
                            <button 
                                type="button"
                                onClick={ () => setHidePass(!hidePass) }
                                className="show-pass bx bx-eye-big" 
                            />
                        </div>
                    </div>

                    { error && 
                        <span className="d-block w-100 mt-2 red">{error}</span>
                    }                    

                    <div className="text-right mt-2 mb-2">
                        <Link 
                            href="/quen-mat-khau" 
                            style={{ color: '#208ce8' }}
                        > Quên mật khẩu? </Link>
                    </div>
                    
                    <button 
                        type="button" 
                        onClick={handleLogin} 
                        className="bg-red font-600 text-18 text-white d-block btn-regis"
                    >
                        ĐĂNG NHẬP
                    </button>
                </div>
            </div>
        </div>
    );
}