// Add tất cả sp trong data product vào 1 mảng
import { productList } from '@/data/products/productList';

export function getAllProducts() {
    return productList.flatMap((group: any) => group.list);
}


export function formatTextList(
    text?: string | any[],
    limit?: number | undefined
) {
    if (!text) return '';

    if (typeof window === 'undefined') {
        // server: trả raw HTML
        return Array.isArray(text)
            ? String(text[1] ?? '')
            : String(text);
    }

    const html = Array.isArray(text)
        ? String(text[1] ?? '')
        : String(text);

    if (!html) return '';

    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');

    const nodes = Array.from(
        doc.body.querySelectorAll('p, div, li')
    );

    return nodes
        .slice(0, limit)
        .map(node => `<div class="item">${node.innerHTML}</div>`)
        .join('');
}

export function renderSummary(data: any) {
    if (!data) return null;

    // Nếu là HTML string
    if (typeof data === 'string' && data.includes('<')) {

        // Bỏ toàn bộ tag HTML
        const textOnly = data.replace(/<[^>]*>/g, '\n');

        return textOnly
            .split(/\r?\n/)
            .filter((line: string) => line.trim() !== '')
            .map((line: string, index: number) => (
                <div key={index} className="item-circle">
                    {line.trim()}
                </div>
            ));
    }

    // Nếu là text thường
    return data
        .split(/\r?\n/)
        .filter((line: string) => line.trim() !== '')
        .map((line: string, index: number) => (
            <div key={index} className="item-circle">
                {line.trim()}
            </div>
        ));
}


// Format giá
export function formatPrice(amount: number) {
    return amount.toLocaleString('vi-VN');
}

// Tính % giảm giá
export function calculateDiscount(
    price: number,
    marketPrice: number
) {
    if (price <= 0 || marketPrice <= price) return 0;
    return Math.ceil(((marketPrice - price) / marketPrice) * 100);
}

// format thời gian
export function formatArticleTime(article_time: string) {
    let day: string;
    let month: string;
    let year: string;

    if (article_time.toLowerCase().includes('hôm nay')) {
        const time = new Date();
        day = (time.getDate() <= 9) ? '0' + time.getDate() : String(time.getDate());
        month = (time.getMonth() + 1 <= 9) ? '0' + (time.getMonth() + 1) : String(time.getMonth() + 1);
        year = String(time.getFullYear());
    } else {
        day = article_time.substring(0, 2);
        month = article_time.substring(3, 5);
        year = article_time.substring(6, 10);
    }
    return `${day}/${month}/${year}`;
}

export function formatDate(a:any){
    let dateObj = new Date(parseInt(a)*1000);
    
    let year    = dateObj.getFullYear();
    let month   = ((dateObj.getMonth()+1) <= 9) ? '0' + (dateObj.getMonth()+1) : dateObj.getMonth()+1;
    let date    = (dateObj.getDate() < 10) ? '0' + dateObj.getDate() : dateObj.getDate();
    let hour    = (dateObj.getHours() < 10) ? '0' + dateObj.getHours() : dateObj.getHours();
    let min     = (dateObj.getMinutes() < 10) ? '0' + dateObj.getMinutes() : dateObj.getMinutes();
    let time    = `${date}/${month}/${year}, ${hour}:${min}`;
    return time;  
}

//
export function normalizeKey(str: string) {
    return str
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase()
        .replace(/\s+/g, '-');
}

export function convertToSlug(text: string) {
    let newText = text;
    const lastDot = text.lastIndexOf(".");
    if (lastDot > 0 && lastDot + 2 <= text.length) {
        newText = text.substring(lastDot + 2);
    }

    return newText
        .toLowerCase()
        .replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a")
        .replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e")
        .replace(/ì|í|ị|ỉ|ĩ/g, "i")
        .replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o")
        .replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u")
        .replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y")
        .replace(/đ/g, "d")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^\w ]+/g, "")
        .trim()
        .replace(/ +/g, "-");
}

