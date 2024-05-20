import React from "react";
import ReactDOM from "react-dom/client";
import { CorgiButton } from "testdog-corgi-library";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <div>
      <h2>Primary Btn</h2>
      <div style={{ display: "flex", width: "100%" }}>
        <div style={{ margin: "5px" }}>
          <CorgiButton type="Primary" content="Corgi is so cute~!!" />
        </div>
        <div style={{ margin: "5px" }}>
          <CorgiButton
            type="Primary"
            content="Disabled Corgi"
            disabled={true}
          />
        </div>
      </div>
    </div>
    <hr />
    <div>
      <h2>Destructive Btn</h2>
      <div style={{ display: "flex", width: "100%" }}>
        <div style={{ margin: "5px" }}>
          <CorgiButton type="Destructive" content="Corgi is so cute~!!" />
        </div>
        <div style={{ margin: "5px" }}>
          <CorgiButton
            type="Destructive"
            content="Disabled Corgi"
            disabled={true}
          />
        </div>
      </div>
    </div>
    <hr />
    <div>
      <h2>Safe Btn</h2>
      <div style={{ display: "flex", width: "100%" }}>
        <div style={{ margin: "5px" }}>
          <CorgiButton type="Safe" content="Corgi is so cute~!!" />
        </div>
        <div style={{ margin: "5px" }}>
          <CorgiButton type="Safe" content="Disabled Corgi" disabled={true} />
        </div>
      </div>
    </div>
    <hr />
    <div>
      <h2>Warning Btn</h2>
      <div style={{ display: "flex", width: "100%" }}>
        <div style={{ margin: "5px" }}>
          <CorgiButton type="Warning" content="Corgi is so cute~!!" />
        </div>
        <div style={{ margin: "5px" }}>
          <CorgiButton
            type="Warning"
            content="Disabled Corgi"
            disabled={true}
          />
        </div>
      </div>
    </div>
    <hr />
    <div>
      <h2>Info Btn</h2>
      <div style={{ display: "flex", width: "100%" }}>
        <div style={{ margin: "5px" }}>
          <CorgiButton type="Info" content="Corgi is so cute~!!" />
        </div>
        <div style={{ margin: "5px" }}>
          <CorgiButton type="Info" content="Disabled Corgi" disabled={true} />
        </div>
      </div>
    </div>
    <hr />
  </React.StrictMode>
);
