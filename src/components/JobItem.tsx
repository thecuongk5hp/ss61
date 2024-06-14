import React, { useState } from "react";

interface Job {
  id: number;
  name_job: string;
  status: boolean;
  deleteJob: (id: number) => void;
  updateJob: (id: number, updatedJob: Partial<Job>) => void;
}

export default function JobItem({
  id,
  name_job,
  status,
  deleteJob,
  updateJob,
}: Job) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(name_job);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    updateJob(id, { name_job: editedName });
    setIsEditing(false);
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedName(e.target.value);
  };

  return (
    <>
      <div
        key={id}
        className="job-item d-flex justify-content-between align-items-center border px-2 py-1"
      >
        <div>
          <input defaultChecked={status} type="checkbox" />
          {isEditing ? (
            <input
              type="text"
              value={editedName}
              onChange={handleNameChange}
              onBlur={handleSaveClick}
            />
          ) : (
            <span className="ms-1">{name_job}</span>
          )}
        </div>
        <div>
          {isEditing ? (
            <button className="btn text-success" onClick={handleSaveClick}>
              <i className="fa-solid fa-check"></i>
            </button>
          ) : (
            <>
              <button className="btn text-warning" onClick={handleEditClick}>
                <i className="fa-solid fa-pen"></i>
              </button>
              <button className="btn text-danger" onClick={() => deleteJob(id)}>
                <i className="fa-solid fa-trash-can"></i>
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
}
