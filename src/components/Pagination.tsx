import React from "react";
import { Icon, Pagination } from "semantic-ui-react";

const PaginationState = (props: any) => {
  return (
    <>
      <Pagination
        ellipsisItem={{
          content: <Icon name="ellipsis horizontal" />,
          icon: true,
        }}
        firstItem={{ content: <Icon name="angle double left" />, icon: true }}
        lastItem={{ content: <Icon name="angle double right" />, icon: true }}
        prevItem={{ content: <Icon name="angle left" />, icon: true }}
        nextItem={{ content: <Icon name="angle right" />, icon: true }}
        boundaryRange={2}
        activePage={props.activePage ? props.activePage : 1}
        totalPages={props.totalPages ? props.totalPages : 1}
        onPageChange={props.onPageChange}
      />
    </>
  );
};

export default PaginationState;
