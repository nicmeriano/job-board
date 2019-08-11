import React, { useState, useEffect } from "react";

import "./App.css";

import SearchBar from "./components/SearchBar";
import JobList from "./components/JobList";
import { Typography } from "@material-ui/core";

async function fetchJobs(searchTerm) {
  const LAMBDA_API = `/.netlify/functions/async-jobs?searchTerm=${searchTerm}`;
  const res = await fetch(LAMBDA_API);
  let data;
  try {
    data = await res.json();
  } catch (e) {
    data = { jobs: [] };
  }
  return data.jobs;
}

function App() {
  const [jobList, updateJobs] = useState([]);
  const [searchTerm, updateSearchTerm] = useState("");

  useEffect(() => {
    fetchJobs(searchTerm).then(updateJobs);
  }, [searchTerm]);

  return (
    <>
      <Typography variant="h4" component="h1" className="title">
        Entry Level Software Jobs
      </Typography>
      <SearchBar updateSearchTerm={updateSearchTerm} />
      <JobList jobs={jobList} />
    </>
  );
}

export default App;
