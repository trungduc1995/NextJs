export default function Comment({ customer } : any) {
    return (
        <>
            <h3 className="title">Bình luận sản phẩm</h3>
            
            <div className="account-review-page">
                <div className="item">
                    <div className="item-text">
                        <a href="/link/product.php?id=6434" className="item-name"> HuraSoft - Sản phẩm test (Không xóa) </a>
                        <time className="item-time"> 21/10/2025 </time>
                        <p className="item-rate">
                            <i className="star star-4" />
                            <span style={{ color: '#f51f42' }}>Chưa duyệt</span>
                            <span style={{ color: '#1BB51B' }}>Đã duyệt</span>
                        </p>
                        <div className="item-content">account test comment</div>
                    </div>
                </div>
                <div className="account-paging"></div>
            </div>
        </>
    );
}   