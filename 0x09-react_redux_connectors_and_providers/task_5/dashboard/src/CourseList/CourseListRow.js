import React, { useState } from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#deb5b545",
  },

  normal: {
    backgroundColor: "#f5f5f5ab",
  },
  cell: {
    border: "1px solid #ddd",
    width: "80%",
  },
  rowChecked: { backgroundColor: "#e6e4e4" },
});

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {
  const [checked, setChecked] = useState(false);
  const handleChecked = () => setChecked(!checked);
  return (
    <tr className={isHeader ? css(styles.header) : css(styles.normal)}>
      {isHeader ? (
        textSecondCell === null ? (
          <th colSpan={2}>{textFirstCell}</th>
        ) : (
          <>
            <th>{textFirstCell}</th>
            <th>{textSecondCell}</th>
          </>
        )
      ) : (
        <>
          <td
            className={
              checked ? css(styles.cell, styles.rowChecked) : css(styles.cell)
            }
          >
            <input
              type="checkbox"
              onChange={handleChecked}
              defaultChecked={checked}
            />
            {textFirstCell}
          </td>
          <td className={css(styles.cell)}>{textSecondCell}</td>
        </>
      )}
    </tr>
  );
};

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

export default CourseListRow;