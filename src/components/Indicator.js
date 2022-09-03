import React from "react";

export const Indicator = () => {
  const [toggleState, setToggleState] = React.useState(1);

  function toggleTab(index) {
    setToggleState(index);
    console.log(index);
  }

  return (
    <div className="indicator-con">
      <div className="tabs-con">
        <div
          className={toggleState === 1 ? "active-tab" : " tab"}
          onClick={() => toggleTab(1)}
        >
          tab1
        </div>
        <div
          className={toggleState === 2 ? "active-tab" : " tab"}
          onClick={() => toggleTab(2)}
        >
          tab2
        </div>
        <div
          className={toggleState === 3 ? "active-tab" : " tab"}
          onClick={() => toggleTab(3)}
        >
          tab3
        </div>
      </div>
      <div className="content-tabs">
        <div className={toggleState === 1 ? "active-content" : " content"}>
          <h1>CONTENT 1</h1>
        </div>
        <div className={toggleState === 2 ? "active-content" : " content"}>
          <h1>CONTENT 2</h1>
        </div>
        <div className={toggleState === 3 ? "active-content" : " content"}>
          <h1>CONTENT 3</h1>
        </div>
      </div>
    </div>
  );
};
