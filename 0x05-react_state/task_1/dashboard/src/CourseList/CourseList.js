import React from 'react';
import CourseListRow from './CourseListRow';
import { StyleSheet, css } from 'aphrodite';

const CourseListRowHead = [
  { cellOne: 'Available courses', cellTwo: null, isHeader: true },
  { cellOne: 'Course name', cellTwo: 'Credit', isHeader: true },
];

const CourseList = ({ listCourses }) => {
  return (
    <table className={css(styles.CourseList)}>
      <thead>
        {CourseListRowHead.map((course, idx) => (
          <CourseListRow
            key={idx}
            textFirstCell={course.cellOne}
            textSecondCell={course.cellTwo}
            isHeader={course.isHeader}
          />
        ))}
      </thead>
      <tbody>
        {listCourses?.length ? (
          listCourses.map(({ id, name, credit }) => (
            <CourseListRow
              key={id}
              textFirstCell={name}
              textSecondCell={credit}
            />
          ))
        ) : (
          <CourseListRow textFirstCell='No course available yet' />
        )}
      </tbody>
    </table>
  );
};

const styles = StyleSheet.create({
  CourseList: {
    border: '1px solid #f3eaea',
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '0.6rem',
  },
});

export default CourseList;