import React, { Fragment } from "react";
import { EducationFormData, formatDate } from "../utils/typings";
import { deleteEducation } from "../redux/actions/profile";
import PropTypes from "prop-types";
import { connect } from "react-redux";

interface EducationProps {
  education: EducationFormData[];
  deleteEducation: (id: string) => void;
}

const Education: React.FC<EducationProps> = ({
  education,
  deleteEducation,
}) => {
  const educations = education &&  education.map((edu: any) => (
    <tr key={edu._id}>
      <td>{edu.school}</td>
      <td className="hide-sm">{edu.degree}</td>
      <td>
        {formatDate(edu.from)} - {edu.to ? formatDate(edu.to) : "Now"}
      </td>
      <td>
        <button
          onClick={() => deleteEducation(edu._id)}
          className="btn btn-danger"
        >
          Delete
        </button>
      </td>
    </tr>
  ));
  return (
    <Fragment>
      <h2 className="my-2">Education Credentials</h2>
      <table className="table">
        <thead>
          <tr>
            <th>School</th>
            <th className="hide-sm">Degree</th>
            <th className="hide-sm">Years</th>
            <th />
          </tr>
        </thead>
        <tbody>{educations}</tbody>
      </table>
    </Fragment>
  );
};

Education.propTypes = {
  education: PropTypes.array.isRequired,
  deleteEducation: PropTypes.func.isRequired,
};

export default connect(null, { deleteEducation })(Education);
