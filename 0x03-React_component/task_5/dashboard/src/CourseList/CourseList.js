import React from 'react';
import './CourseList.css';
import CourseListRow from './CourseListRow';

const courseListHeaders = [
  { cellOne: 'Available courses', cellTwo: null, isHeader: true },
  { cellOne: 'Course name', cellTwo: 'Credit', isHeader: true },
];

const CourseList = ({ listCourses = [] }) => {
  const renderHeaderRows = () =>
    courseListHeaders.map((header, idx) => (
      <CourseListRow
        key={idx}
        textFirstCell={header.cellOne}
        textSecondCell={header.cellTwo}
        isHeader={header.isHeader}
      />
    ));

  const renderCourseRows = () =>
    listCourses.length > 0 ? (
      listCourses.map(({ id, name, credit }) => (
        <CourseListRow
          key={id}
          textFirstCell={name}
          textSecondCell={credit}
        />
      ))
    ) : (
      <CourseListRow textFirstCell='No course available yet' />
    );

  return (
    <table id='CourseList'>
      <thead>
        {renderHeaderRows()}
      </thead>
      <tbody>
        {renderCourseRows()}
      </tbody>
    </table>
  );
};

export default CourseList;
