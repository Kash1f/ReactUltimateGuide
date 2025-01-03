import jobs from "../jobs.json";
import JobListing from "./JobListing";

const JobListings = () => {
  
  // We will use recentJobs = jobs.slice(0, 3); to get the first 3 jobs from the jobs.json file.
  //The jobs array will be spliced first and then it will be saved in recentJobs variable.
  // Then we will use recentJobs with map function to loop through each job and make a separate JobListing component for it.
  const recentJobs = jobs.slice(0, 3);

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          Browse Jobs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/*  The map function works like a loop here. It goes through each job in the jobs list and makes a separate JobListing component for it. It also gives each job a unique key and sends its data to the JobListing component using the job prop. */}

          {recentJobs.map((job) => (
            <JobListing key={job.id} job={job} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobListings;
