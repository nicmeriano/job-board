import React from "react";

import "./App.css";

import { SearchBar, JobList } from "./components/index";
import { Typography } from "@material-ui/core";

async function fetchJobs(updateCb, searchTerm) {
  const LAMBDA_API = `/.netlify/functions/async-jobs?searchTerm=${searchTerm}`;
  const res = await fetch(LAMBDA_API);
  let data;
  try {
    data = await res.json();
  } catch (e) {
    data = { jobs: [] };
  }

  updateCb(data.jobs);
}

function App() {
  const [jobList, updateJobs] = React.useState([]);
  const [searchTerm, updateSearch] = React.useState("");

  // replacing componentDidMount() by passing empty array as second arg
  React.useEffect(() => {
    fetchJobs(updateJobs, "");
  }, []);

  return (
    <>
      <Typography variant="h4" component="h1" className="title">
        Entry Level Software Jobs
      </Typography>
      <SearchBar
        searchTerm={searchTerm}
        updateSearch={updateSearch}
        fetchJobs={fetchJobs}
        updateJobs={updateJobs}
      />
      <JobList jobs={jobList} />
    </>
  );
}

export default App;
