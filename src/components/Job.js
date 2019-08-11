import React from "react";
import { Paper, Typography } from "@material-ui/core";
import style from "./Job.module.scss";

function Job({ job, onClick }) {
  return (
    <Paper onClick={onClick} className={style.job}>
      <div className={style.info}>
        <Typography variant="h5">{job.title}</Typography>
        <Typography variant="h6">{job.company}</Typography>
        <Typography>{job.location}</Typography>
      </div>
      <div className={style.date}>
        <Typography>
          {job.created_at
            .split(" ")
            .slice(0, 3)
            .join(" ")}
        </Typography>
      </div>
    </Paper>
  );
}

export default Job;
