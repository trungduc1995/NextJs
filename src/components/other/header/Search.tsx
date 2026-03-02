export default function Search(){
    return(
        <div className="header-search-group w-[440px] relative">
            <form method="get" action="/tim" name="search" className="flex items-center justify-between p-[6px] pl-5 bg-white rounded-[30px]">
                <input 
                    type="text" 
                    name="q" 
                    placeholder="Nhập từ khóa tìm kiếm" 
                    defaultValue="" 
                    autoComplete="off" 
                    className="w-[calc(100%_-_36px)] pr-3 placeholder:!text-[#5F5F5F] placeholder:!text-[14px] h-9" 
                />

                <button 
                    type="submit"
                    aria-labelledby="js-global-search" 
                    className="bg-linear rounded-full w-9 h-9"
                >
                    <i className="block !w-full !h-full icons icon-search"></i>
                </button>
            </form>

            <div className="autocomplete-suggestions"> </div>
        </div>
    )
}