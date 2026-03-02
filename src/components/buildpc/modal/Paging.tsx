export default function Paging({ item }: any) {
    return (
        <div className="popup-paging">
            {
                item.map((item: any) => (
                    <a key={item.name} href="#"
                        className={`${item.is_active ? 'active' : ''} capitalize`}
                    >
                        {item.name}
                    </a>
                ))
            }
        </div>
    )
}