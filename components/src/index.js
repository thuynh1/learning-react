import React from "react";
import ReactDOM from "react-dom";

import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const getAvatar = () => {
  return "https://source.unsplash.com/random";
};

const getTimeStamp = () => {
  const event = new Date("August 19, 1975 23:15:30 GMT+00:00");
  return event.toLocaleTimeString("en-US");
};

const getText = () => {
  return "Nulla pariatur exercitation enim duis magna.";
};

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h4>Warning!</h4>
          Are you sure you want to do this?
        </div>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Sam"
          avatar={getAvatar()}
          date={getTimeStamp()}
          text={getText()}
        />
      </ApprovalCard>
      <CommentDetail
        author="Alex"
        avatar={getAvatar()}
        date={getTimeStamp()}
        text={getText()}
      />
      <CommentDetail
        author="Jane"
        avatar={getAvatar()}
        date={getTimeStamp()}
        text={getText()}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
