import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import JobList from "./components/JobList";
import Loader from "./components/Loader";
import { Container } from "@material-ui/core";
import "./App.css";

async function fetchJobs(searchTerm, loading) {
  loading(true);
  const LAMBDA_API = `/.netlify/functions/async-jobs?searchTerm=${searchTerm}`;
  const res = await fetch(LAMBDA_API);
  let data;
  try {
    data = await res.json();
  } catch (e) {
    data = { jobs: [] };
  }
  loading(false);
  return data.jobs;
}

function App() {
  const [jobList, updateJobs] = useState([]);
  const [searchTerm, updateSearchTerm] = useState("");
  const [isLoading, updateLoading] = useState(true);

  useEffect(() => {
    fetchJobs(searchTerm, updateLoading).then(updateJobs);
  }, [searchTerm]);

  return (
    <Container maxWidth="lg">
      <Header />
      <SearchBar updateSearchTerm={updateSearchTerm} />
      {isLoading ? <Loader /> : <JobList jobs={jobList} />}
    </Container>
  );
}

export default App;
