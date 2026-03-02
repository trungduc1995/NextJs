import parse from 'html-react-parser';

export default function ProductSpec( {item} : any ) {

    return (
        <div className="pd-box-group bg-white mb-6 px-4 py-6 rounded-[24px]">
            <p className="group-title border-b border-[#D0D8E3] leading-[31px] font-600 text-24 mb-4 pb-4">
                Thông số kỹ thuật
            </p>

            <div className="pd-spec-group">
                {parse(item)}
            </div>

            <a
                href="#fancybox-spec"
                data-fancybox=""
                className="table m-auto mt-4 text-white leading-10 uppercase rounded-[40px] bg-btn font-500 text-16 px-6"
            >
                Xem tất cả thông số
            </a>

            <div
                className="pd-spec-group p-3"
                id="fancybox-spec"
                style={{ display: "none" }}
            >
                {parse(item)}
            </div>
        </div>
    )
}