'use client';
import { useEffect, useState } from "react";
import { Fancybox } from "@fancyapps/ui/dist/fancybox/";
import { categoryDetail } from "@/data/buildpc/categoryDetail";
import ModalContent from "../modal";
import SelectedItemRow from "../modal/SelectedItemRow";

export default function BuildPCCategories({
    categories,
    activeTab,
    buildData,
    setBuildData
}: any) {

    const [selectedCategory, setSelectedCategory] = useState<any>(null);
    const [categoryInfo, setCategoryInfo] = useState<any>(null);

    const getStorageKey = () => `buildpc_tab_${activeTab}`;
    
    useEffect(() => {
        if (selectedCategory) {
            const filterCategory = categoryDetail.find(
                (item: any) => item.id === selectedCategory
            );
            setCategoryInfo(filterCategory);
        }
    }, [selectedCategory]);

    const handleSaveProduct = (rowId: number, product: any) => {

        const newData = [
            ...buildData.filter((b: any) => b.rowId !== rowId), // loại bỏ row cũ
            {
                rowId,
                info: [product]
            }
        ];

        localStorage.setItem(getStorageKey(), JSON.stringify(newData));
        setBuildData(newData);

        window.dispatchEvent(new Event("buildpcUpdated"));
    };

    // ==============================
    // REMOVE
    // ==============================
    const handleRemove = (rowId: number) => {
        const newData = buildData.filter((b: any) => b.rowId !== rowId);
        localStorage.setItem(getStorageKey(), JSON.stringify(newData));
        setBuildData(newData);
    };

    // ==============================
    // QUANTITY
    // ==============================
    const handleQuantityChange = (rowId: number, quantity: number) => {

        const newData = buildData.map((b: any) => {
            if (b.rowId === rowId) {
                return {
                    ...b,
                    info: [
                        {
                            ...b.info[0],
                            quantity
                        }
                    ]
                };
            }
            return b;
        });

        localStorage.setItem(getStorageKey(), JSON.stringify(newData));
        setBuildData(newData);
    };

    return (
        <>
            <div className="buildpc-holder-container">
                {categories.map((item: any, index: number) => {

                    const selectedBuild = buildData.find((b: any) => b.rowId === item.id);

                    const product = selectedBuild?.info?.[0];

                    return (
                        <div className="item-drive" key={item.id}>
                            <p className="item-title leading-5">
                                <span>{index + 1}. {item.name}</span>
                            </p>

                            <div className="item-drive-info">
                                { product 
                                ? (
                                    <SelectedItemRow
                                        product={product}
                                        rowId={item.id}
                                        onRemove={handleRemove}
                                        onQuantityChange={handleQuantityChange}
                                        onEdit={(rowId: number) => setSelectedCategory(rowId)}
                                    />
                                ) : (
                                    <button 
                                        type="button"                                        
                                        className="open-selection"                                        
                                        onClick={(e) => {
                                            e.preventDefault();

                                            setSelectedCategory(item.id);

                                            Fancybox.show([
                                                {
                                                    src: "#js-modal-popup",
                                                    type: "inline",
                                                },
                                            ]);
                                        }}
                                    >
                                        <i className="bx bx-plus" /> Chọn {item.name}
                                    </button>
                                )}

                            </div>
                        </div>
                    );
                })}
            </div>

            <div
                className="buildpc-modal-popup-container text-black"
                id="js-modal-popup"
                style={{ display: 'none', padding: 0 }}
            >
                <ModalContent
                    item={categoryInfo}
                    onSave={handleSaveProduct}
                />
            </div>
        </>
    );
}