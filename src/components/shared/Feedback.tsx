export default function FeedBack(){
    return(
        <div id="fancybox-feedback" style={{ display: 'none' }} 
            className="fancybox-content-container max-w-[800px] text-[#000] w-full text-16 leading-6 !p-0 !bg-transparent">
            <div className="bg-white overflow-hidden rounded-[12px]">
                <div className="text-center bg-[#0676DA] uppercase font-500 text-20 p-5 relative text-white">
                    <p className="m-0"> Chúng tôi luôn lắng nghe mọi ý kiến đóng góp từ Quý khách </p>
                </div>

                <div className="p-6 font-400">
                    <p className="mb-4"> Vui lòng điền đầy đủ thông tin bên dưới để chúng tôi có thể hỗ trợ nhanh chóng và chính xác nhất. </p>

                    <div className="flex flex-wrap gap-3 lg:grid lg:gap-4 grid-cols-2 text-16 mb-4">
                        <div className="col-span-1 w-full">
                            <p className="font-600 mb-2"> Họ và tên <span className="red">*</span> </p>
                            <input type="text" id="js-feedback-name" placeholder="Nhập họ và tên" className="block w-full h-[50px] rounded-[12px] px-4 bg-[#F3F3F3] border border-transparent placeholder:text-[#9B9B9B] placeholder:font-normal"/>
                        </div>

                        <div className="col-span-1 w-full">
                            <p className="font-600 mb-2"> Số điện thoại <span className="red">*</span> </p>
                            <input type="text" id="js-feedback-phone" placeholder="Nhập số điện thoại" className="block w-full h-[50px] rounded-[12px] px-4 bg-[#F3F3F3] border border-transparent placeholder:text-[#9B9B9B] placeholder:font-normal"/>
                        </div>

                        <div className="col-span-1 w-full">
                            <p className="font-600 mb-2"> Email </p>
                            <input type="text" id="js-feedback-email" placeholder="Nhập Email (tùy chọn)" className="block w-full h-[50px] rounded-[12px] px-4 bg-[#F3F3F3] border border-transparent placeholder:text-[#9B9B9B] placeholder:font-normal"/>
                        </div>

                        <div className="col-span-1 w-full">
                            <p className="font-600 mb-2"> Loại yêu cầu <span className="red">*</span> </p>
                            <select id="js-feedback-type" className="block w-full h-[50px] rounded-[12px] px-4 bg-[#F3F3F3] border border-transparent placeholder:text-[#9B9B9B] placeholder:font-normal">
                                <option value=""> Chọn loại yêu cầu </option>
                                <option value="1"> Tư vấn sản phẩm </option>
                                <option value="2"> Hỗ trợ kỹ thuật </option>
                                <option value="3"> Khiếu nại dịch vụ </option>
                                <option value="4"> Góp ý, phản hồi </option>
                                <option value="5"> Khác </option>
                            </select>
                        </div>

                        <div className="col-span-2 w-full">
                            <p className="font-600 mb-2"> Nội dung chi tiết </p>
                            <textarea id="js-feedback-content" placeholder="Vui lòng ghi rõ thông tin yêu cầu, góp ý hoặc khiếu nại của Quý khách." className="block w-full p-[14px_16px] min-h-[160px] border border-transparent rounded-[12px] bg-[#F3F3F3] placeholder:text-[#9B9B9B] placeholder:font-normal resize-none outline-none"></textarea>
                        </div>

                        <div className="col-span-2 w-full flex items-center justify-between flex-wrap gap-2 lg:gap-4">
                            <p className="m-0"> Thời gian phản hồi mong muốn </p>

                            <select id="js-feedback-time" className="w-full max-w-[400px] h-[46px] rounded-[12px] px-4 bg-[#fff] border border-[#D6DAE1]">
                                <option value=""> Thời gian phản hồi </option>
                                <option value="1"> Trong ngày </option>
                                <option value="2"> 1-3 ngày </option>
                                <option value="3"> 3-7 ngày </option>
                                <option value="4"> Trên 7 ngày </option>
                            </select>
                        </div>
                    </div>

                    <p className="text-[#757575] leading-4 my-6 flex items-center">
                        <i className="bx bx-info-circle blue mr-1 text-16"></i>
                        <span className="font-300"> Thông tin của Quý khách sẽ được chúng tôi bảo mật tuyệt đối và chỉ sử dụng nhằm mục đích hỗ trợ. </span>
                    </p>

                    <p className="red my-4"></p>

                    <button type="button" aria-label="Gửi phản hồi" className="font-600 bg-btn border text-white block w-full max-w-[320px] mx-auto text-center mt-4 leading-[40px] rounded-[40px] uppercase border-0"> Gửi góp ý </button>
                </div>
            </div>
        </div>
    )
}