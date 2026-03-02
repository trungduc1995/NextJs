'use client';
import { useState, useMemo } from "react";
import { StoreList } from "@/data/store";
import Feature from "./Feature";
import StoreItem from "./StoreItem";

export default function HeThongCuaHang() {
    
    const [ storeId, setStoreId ] = useState(1);

    const storeData = useMemo(() => {
        return StoreList.find((item: any) => Number(item.id) === Number(storeId));
    }, [storeId]);

    return (
        <>
            <div className="showroom text-16 color-black">
                <div className="showroom-header section-hero">
                    <div className="container">
                        <div className="text-box d-flex align-items-start justify-content-center flex-column font-weight-bold text-white">
                            <h2 className="text-28 mb-2">HỆ THỐNG SHOWROOM HOÀNG HÀ PC</h2>
                            <p className="mb-3">
                                Địa điểm trải nghiệm và mua sắm thiết bị công nghệ.
                            </p>
                            <button type="button" className="btn btn-white"><span>Khám phá ngay</span></button>
                        </div>
                    </div>
                </div>

                <div className="showroom-region container py-4x">
                    <h2 className="text-28 text-center pb-3x font-weight-600">CHỌN KHU VỰC CỦA BẠN</h2>

                    <div className="showroom-region-box font-weight-bold">
                        <ul className="grid grid--3-cols">
                            <li className={ storeId === 1 ? "active" : '' }
                                onClick={ () => setStoreId(1)}
                            >
                                <i className="static-icons static-icon-region-hn" />
                                <span className="text-28 text-center title">
                                    Khu vực <span className="color-primary">Miền Bắc</span>
                                </span>
                            </li>

                            <li className={ storeId === 2 ? "active" : '' }
                                onClick={ () => setStoreId(2)}
                            >
                                <i className="static-icons static-icon-region-central" style={{ backgroundImage: 'url(/images/showroom-central.png)', backgroundRepeat: 'no-repeat', backgroundSize: 'contain', backgroundPosition: 'center' }} />
                                <span className="text-28 text-center title">
                                    Khu vực <span className="color-primary">Miền Trung</span>
                                </span>
                            </li>

                            <li className={ storeId === 3 ? "active" : '' }
                                onClick={ () => setStoreId(3)}
                            >
                                <i className="static-icons static-icon-region-hcm" />
                                <span className="text-28 text-center title">
                                    Khu vực <span className="color-primary">Miền Nam</span>
                                </span>
                            </li>

                            <li className={ storeId === 4 ? "active" : '' }
                                onClick={ () => setStoreId(4)}
                            >
                                <i className="static-icons static-icon-region-ttbh" />
                                <span className="text-28 text-center title">
                                    Trung Tâm <span className="color-primary">Bảo hành</span>
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
                
                {   storeData && 
                    <div className="showroom-content active">
                        <h3 className="text-28 uppercase d-flex flex-column align-items-center color-primary font-weight-600">
                            <i className="static-icons static-icon-location" />
                            {storeData.title}
                        </h3>

                        <div className="showroom-list">
                            { 
                                storeData.info.map( (item:any, index:number) =>
                                    <StoreItem 
                                        key={`${storeId}_${index}`} 
                                        item={item} 
                                        storeId={storeId} 
                                    />
                                )
                            }
                        </div>
                    </div>
                }
                
                <Feature />
            </div>
        </>
    )
}