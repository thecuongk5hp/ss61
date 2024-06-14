import React, { useState, useEffect } from "react";
import axios from "axios";
import Form from "./components/Form";
import ListJob from "./components/ListJob";

interface Job {
  id: number;
  name_job: string;
  status: boolean;
}

export default function App() {
  const [jobs, setJobs] = useState<Job[]>([]);

  const getAllJobs = () => {
    axios
      .get("http://localhost:8080/jobs")
      .then((res) => {
        setJobs(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getAllJobs();
  }, []);

  const addJob = (job: Job) => {
    axios
      .post("http://localhost:8080/jobs", job)
      .then(() => {
        getAllJobs();
      })
      .catch((err) => console.log(err));
  };

  const deleteJob = (id: number) => {
    axios
      .delete(`http://localhost:8080/jobs/${id}`)
      .then(() => {
        getAllJobs();
      })
      .catch((err) => console.log(err));
  };

  const updateJob = (id: number, updatedJob: Partial<Job>) => {
    axios
      .put(`http://localhost:8080/jobs/${id}`, updatedJob)
      .then(() => {
        getAllJobs();
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="vh-100 d-flex justify-content-center ">
        <div>
          <h3 className="text-center mb-3">Quản lý công việc</h3>
          <div className="p-3 border">
            <Form addJob={addJob}></Form>
            <div
              className="p-3 border mb-4"
              style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
            >
              <ul className="nav nav-pills">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Tất cả
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Hoàn thành
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Đang thực hiện
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <ListJob
                jobs={jobs}
                deleteJob={deleteJob}
                updateJob={updateJob}
              ></ListJob>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
