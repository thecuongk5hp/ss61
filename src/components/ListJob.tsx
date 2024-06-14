import React from "react";
import JobItem from "./JobItem";

interface Job {
  id: number;
  name_job: string;
  status: boolean;
}

interface ListJobProps {
  jobs: Job[];
  deleteJob: (id: number) => void;
  updateJob: (id: number, updatedJob: Partial<Job>) => void;
}

export default function ListJob({ jobs, deleteJob, updateJob }: ListJobProps) {
  return (
    <>
      <div
        className="job_list d-flex flex-column gap-3"
        style={{ maxHeight: "400px", overflowY: "auto" }}
      >
        {jobs.map((job: Job) => (
          <JobItem
            key={job.id}
            id={job.id}
            name_job={job.name_job}
            status={job.status}
            deleteJob={deleteJob}
            updateJob={updateJob}
          ></JobItem>
        ))}
      </div>
      <div className="d-flex justify-content-between mt-3">
        <button
          className="btn btn-danger"
          style={{ fontSize: "14px", width: "45%" }}
        >
          Xóa công việc hoàn thành
        </button>
        <button
          className="btn btn-danger"
          style={{ fontSize: "14px", width: "45%" }}
        >
          Xóa tât cả công việc
        </button>
      </div>
    </>
  );
}
