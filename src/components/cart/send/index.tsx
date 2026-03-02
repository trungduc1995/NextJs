import Link from "next/link";

export default function SendCart() {
    return (
        <div className="max-w-[656px] m-auto my-10">
            <div>
                <img
                    src="images/send-cart-image.png"
                    alt="send-cart"
                    width={1}
                    height={1}
                    className="block m-auto w-auto h-auto"
                />
                <h1 className="mt-10 mb-5 font-600 text-center text-[40px] text-[#004BA4] leading-12">
                    Bạn đã đặt hàng thành công
                </h1>
                <div className="text-justify lg:text-[18px] lg:leading-6">
                    <p className="mb-4">
                        Chúng tôi vừa nhận được đơn đặt hàng của quý khách trên website
                        HOANGHAPC <br />
                        Đơn hàng này đang được xử lý. Trong vòng
                        <b className="font-600"> 30 phút (giờ làm việc) </b>, bộ phận bán hàng
                        trực tuyến sẽ liên hệ lại Quý khách để xác nhận thời gian và địa điểm
                        giao hàng.
                    </p>
                    <p className="mb-8">
                        Cảm ơn quý khách đã mua sắm tại Trung tâm thiết bị số HOANGHAPC. Hi vọng
                        chúng tôi đã mang lại cho quý khách những trải nghiệm mua sắm thật tuyệt
                        vời.
                    </p>
                    <div className="text-center">
                        <Link
                            href="/"
                            className="inline-flex items-center bg-btn text-white leading-[52px] font-500 text-18 rounded-[50px] px-6"
                        >

                            VỀ TRANG CHỦ <i className="bx bx-arrow-up-right-stroke text-30" />
                        </Link>
                    </div>
                </div>
            </div>
            <div className="text-center text-16 lg:text-[18px]">
                <i className="bx bx-x-circle text-[red] text-[110px]" />
                <p className="font-bold text-20 mt-5"> Có lỗi xảy ra khi gửi đơn hàng </p>
                <p className="mb-4">

                    Đơn hàng của quý khách chưa được gửi. Vui lòng quay lại giỏ hàng để thử
                    gửi lại hoặc liên hệ với chúng tôi để được trợ giúp.
                </p>
                <p className="mb-4"> Cảm ơn quý khách !</p>
            </div>
        </div>


    )
}