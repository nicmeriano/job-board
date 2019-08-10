import React from "react";

import { Job, JobModal } from "../index";
import { Typography } from "@material-ui/core";

import MobileStepper from "@material-ui/core/MobileStepper";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";

import style from "./joblist.module.scss";

const Jobs = ({ jobs }) => {
  const [open, setOpen] = React.useState(false);
  const [selectedJob, selectJob] = React.useState({});

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  // artificial pagination - loading all jobs then splitting them into pages
  // TODO: move pagination to the server side
  const [activeStep, setActiveStep] = React.useState(0);
  const numJobs = jobs.length;
  const numPages = Math.ceil(numJobs / 25);
  const jobsOnPage = jobs.slice(activeStep * 25, activeStep * 25 + 25);

  function handleNext() {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  }

  function handleBack() {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  }

  return (
    <div>
      <JobModal open={open} handleClose={handleClose} job={selectedJob} />
      <Typography variant="h6" component="h2" className={style.title}>
        Found {numJobs} Jobs
      </Typography>

      {jobsOnPage.map((job, i) => (
        <Job
          key={i}
          job={job}
          onClick={() => {
            handleClickOpen();
            selectJob(job);
          }}
        />
      ))}

      <div>
        Page {activeStep + 1} of {numPages}
      </div>

      <MobileStepper
        variant="dots"
        steps={numPages}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === numPages - 1}
          >
            Next
            <KeyboardArrowRight />
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            <KeyboardArrowLeft />
            Back
          </Button>
        }
      />
    </div>
  );
};

export default Jobs;
