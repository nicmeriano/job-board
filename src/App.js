import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import JobList from "./components/JobList";
import { Container } from "@material-ui/core";
import "./App.css";

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
    <Container maxWidth="lg">
      <Header />
      <SearchBar updateSearchTerm={updateSearchTerm} />
      <JobList jobs={jobList} />
    </Container>
  );
}

export default App;
