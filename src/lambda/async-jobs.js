// example of async handler using async-await
// https://github.com/netlify/netlify-lambda/issues/43#issuecomment-444618311

import fetch from "node-fetch"

export async function handler(event) {
  try {
    const { searchTerm } = event.queryStringParameters || {};
    console.log("search", { searchTerm });
    const allJobs = await fetchGithub(searchTerm);

    return {
      statusCode: 200,
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ jobs: allJobs })
    };
  } catch (err) {
    console.log(err) // output to netlify function log
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: err.message }) // Could be a custom message or object i.e. JSON.stringify(err)
    }
  }
}

async function fetchGithub(searchTerm) {
  const baseURL = `https://jobs.github.com/positions.json?description=${searchTerm}`;
  let resultCount = 1;
  let currentPage = 0;

  const allJobs = [];

  // fetch all jobs from all pages
  console.log("Fetching Github...");
  while (resultCount > 0) {
    const res = await fetch(`${baseURL}&page=${currentPage}`);
    const jobs = await res.json();
    allJobs.push(...jobs);
    resultCount = jobs.length;
    currentPage++;
    console.log(`page: ${currentPage}, got ${resultCount} jobs`);
  }

  console.log(`got a total of ${allJobs.length} jobs (UNFILTERED)`);

  // filter algorithm
  const jrJobs = allJobs.filter(job => {
    const jobTitle = job.title.toLowerCase();
    const isSenior = jobTitle.includes("sr.") || jobTitle.includes("senior");
    const isManager = jobTitle.includes("manager");
    const isArchitect = jobTitle.includes("architect");

    if (isSenior || isManager || isArchitect) {
      return false;
    }
    return true;
  });

  console.log(`got a total of ${jrJobs.length} jobs (FILTERED)`);

  console.log('fetching complete')
  return jrJobs;
}
