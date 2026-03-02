export default function Form() {
    return (
        <>        
        <textarea
            className="p-3 w-full resize-none h-[96px] outline-none border-none"
            defaultValue={""}
        />

        <div className="border-t border-[#DDDDDD] bg-[#F5F6F7] p-[10px_12px] text-right">
            <button type="button" aria-label="submit"
                className="bg-btn text-white h-10 px-9 text-18 font-500 rounded-[30px]"
            > GỬI </button>
        </div>
        </>
    )
}