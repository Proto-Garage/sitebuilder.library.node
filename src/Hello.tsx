import * as React from "react";
import "./hello.scss";
export interface HelloProps {
  compiler: string;
  framework: string;
}

const Hello = (props: HelloProps) => (
  <h1 className="test">
    Hello 44ddd2224sss {props.compiler} and {props.framework}!
  </h1>
);

export default Hello;
