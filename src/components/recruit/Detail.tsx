
'use client';
import { getRemainingDays } from "@/lib/times"
import parse from "html-react-parser"
import { JobData } from "@/data/articles/Job";
import RecruitForm from "./Form";


export default function JobDetail({ slug }: any) {
    
    const remain =  getRemainingDays(slug.extend.end_date);    
    const data   =  JobData.list.filter((item: any) =>
                        item.categories?.some((cat: any) => 
                            cat.id == slug.article_category &&
                            item.id != slug.id
                    )) || [];

    return (
        <>
            <div className="recruit-detail-page container d-flex flex-wrap">
                <div className="col-left">
                    <div>
                        <h1 className="page-title"> {slug.title} </h1>

                        { slug.extend.end_date &&
                            <span className="recruit-date js-date-note" 
                                data-date={slug.extend.end_date}> 
                                (còn {remain} ngày)
                            </span>
                        }                        
                        
                        { slug.extend.location &&
                            <p className="recruit-location">{slug.extend.location}</p>
                        }                        
                    </div>

                    <div className="recruit-content-group">
                        <div className="recruit-extend-list">
                            <div className="item">
                                <i className="static-icons icon-member" />
                                <p>Số lượng</p>
                                <b> {slug.extend.vacancy_num || 0} nhân viên </b>
                            </div>

                            <div className="item">
                                <i className="static-icons icon-time-work" />
                                <p>Hình thức làm việc</p>
                                <b>8h00 - 18h00</b>
                            </div>

                            <div className="item">
                                <i className="static-icons icon-payment" />
                                <p>Mức lương</p>                                
                                <b>
                                    { slug.extend.salary 
                                        ? slug.extend.salary 
                                        : 'Thỏa thuận'
                                    }
                                </b>
                            </div>

                            <div className="item">
                                <i className="static-icons icon-clock" />
                                <p>Hạn nộp hồ sơ</p>
                                <b>
                                    { remain > 0 
                                        ? slug.extend.end_date 
                                        : 'Hết hạn'
                                    }
                                </b>
                            </div>
                        </div>

                        <div className="recruit-detail-content">
                            {parse(slug.content)}
                        </div>
                    </div>
                </div>

                <div className="col-right">
                    <div className="sticky top-[90px]">
                        <RecruitForm />

                        { data &&
                            <div className="recruit-same-cate-group">
                                <p className="title">Công việc liên quan</p>
                                {
                                    data.map( (item:any) => 
                                        <a href={item.url} key={item.id} > {item.title} </a>
                                    )
                                }                                
                            </div>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}