import { useEffect, useState } from "react";
import api from "../api/axios";

export default function Jobs() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    api.get("/jobs").then(res => setJobs(res.data));
  }, []);

  return (
    <div>
      {jobs.map(job => (
        <div key={job._id}>
          <h3>{job.title}</h3>
          <p>{job.company} - {job.location}</p>
        </div>
      ))}
    </div>
  );
}
