import { JobData } from "../../data/articles/Job";

export function resolveJobPage(slug: string) {
    const job = JobData.list.find(
        (item) => item.url.replace(/^\//, "") === slug
    );

    if (!job) return null;

    return {
        type: "job_detail",
        data: job,
    };
}
