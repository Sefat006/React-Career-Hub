
import { MdLocationOn   } from "react-icons/md";
import { AiOutlineDollar } from "react-icons/ai";
import { Link } from "react-router-dom";

const Job = ({job}) => {

    const {id, logo, job_title, company_name, job_description, remote_or_onsite, location, job_type, salary} = job;
    return (

        // full component in FeaturedJobs
        // only single card is shown here
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure>
                <img
                src={logo}
                alt="" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{job_title}</h2>
                <p>{company_name}</p>
                <p>Job Description: {job_description}</p>
                <div className="flex gap-4">
                    <button className="border-violet-400 border rounded-md p-3">{remote_or_onsite}</button>
                    <button  className="border-violet-400 border rounded-md p-3">{job_type}</button>
                </div>
                <div className="flex gap-4 mt-4">
                    <h2 className="flex gap-1"><MdLocationOn></MdLocationOn>{location}</h2>
                    <h2 className="flex gap-1"><AiOutlineDollar></AiOutlineDollar> Salary - {salary}</h2>
                </div>
                <div className="card-actions">
                    <Link to={`/job/${id}`}>
                        <button className="btn btn-primary">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Job;