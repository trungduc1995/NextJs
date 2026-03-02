'use client';

import { useState, useEffect } from 'react';
import { categories } from "@/data/categories";
import { JobData } from "@/data/articles/Job";
import RecruitItem from "./RecruitItem"

export default function RecruitPage() {

    useEffect(() => {
        const originalBg = document.body.style.background;
        document.body.style.background = '#FFFFFF';

        return () => {
            document.body.style.background = originalBg;
        };
    }, []);

    const { job } = categories.article.all_category;
    const [jobId, setJobId] = useState(0);
    const [jobList, setJobList] = useState(JobData.list);

    const jobHandle = (e: number | string) => {
        const id = Number(e);
        setJobId(id);

        if (id === 0) {
            setJobList(JobData.list);
            return;
        }

        const filtered = JobData.list.filter((item: any) =>
            item.categories?.some((cat: any) => cat.id === id)
        );

        setJobList(filtered);
    };



    return (
        <div className="recruit-page mb-16">
            <div className="recruit-header">
                <div className="container">
                    <div className="text-box d-flex align-items-start justify-content-center flex-column">
                        <h1>Join the Journey</h1>
                        <h2>
                            Hành trình thành công bền vững của Hoàng Hà PC phụ thuộc vào công sức xây dựng của tập thể. Chúng tôi hy vọng bạn sẽ là một phần của tập thể này, cùng nhau tạo nên nhiều giá trị tích cực. Môi trường của Hoàng Hà PC đề cao sự đoàn kết, sáng tạo và phù hợp với xu thế của thị trường. Vì vậy, hãy thử sức với những cơ hội việc làm tại Hoàng Hà PC, chúng tôi cần những con người nhiệt huyết và khao khát phát triển tài năng giống như bạn.
                        </h2>
                    </div>
                </div>
            </div>

            <div className="recruit-content container">
                <div className="col-left">
                    <div className="item">
                        <h3 className="box-title">PHÒNG BAN</h3>
                        <div className="js-item-cat">
                            <div className="recruit-filter-search">
                                {/* <input type="text" placeholder="Tìm nhanh phòng ban" onKeyUp="searchProvinceTg(this)" /> */}
                                <input type="text" placeholder="Tìm nhanh phòng ban" />
                                <button type="submit" className="static-icons static-icon-search" />
                            </div>

                            <div className="cat-list-group" id="js-job-cat">
                                {/* <button type="button" onClick="_getJobList(0)" className="item current"></button> */}
                                <button type="button" className={`item ${jobId === 0 ? 'current' : ''}`}
                                    onClick={() => jobHandle(0)}
                                >
                                    <i className="bx bx-square text-16" />
                                    <span className="ml-1">Tất cả</span>
                                </button>

                                {
                                    job.map((item: any) =>
                                        <button type="button"
                                            className={`item ${jobId === item.id ? 'current' : ''}`}
                                            key={item.id}
                                            onClick={() => jobHandle(Number(item.id))}
                                        >
                                            <i className="bx bx-square text-16" />
                                            <span className="ml-1"> {item.title} </span>
                                        </button>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-right">
                    <p className="title">CÁC CƠ HỘI VIỆC LÀM</p>
                    
                    <div id="js-job-holder">
                        {jobList.length === 0 ? (
                            <p className="font-600 text-20 mt-3 text-center pt-5">Không có thông tin tuyển dụng ... !</p>
                        ) : (
                            jobList.map((item: any) => (
                                <RecruitItem key={item.id} item={item} />
                            ))
                        )}
                    </div>
                </div>
            </div>
        </div>

    )
}
