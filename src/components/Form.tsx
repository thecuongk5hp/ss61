import axios from "axios";
import React, { useState } from "react";

interface Job {
  id: number;
  name_job: string;
  status: boolean;
}

export default function Form({ addJob }) {
  const [jobName, setJobName] = useState("");
  const [warning, setWarning] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (jobName.trim() === "") {
      setWarning("Công việc không được để trống");
      return;
    }
    addJob({ name_job: jobName, status: false });
    setJobName("");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setJobName(e.target.value);
  };

  return (
    <form
      className="addJob d-flex flex-column gap-3 p-2 border mb-4"
      style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Nhập thêm công việc"
        value={jobName}
        onChange={handleChange}
      />
      {warning && <p className="text-danger">{warning}</p>}
      <button type="submit" className="btn btn-primary">
        Thêm công việc
      </button>
    </form>
  );
}
