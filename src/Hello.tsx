import * as React from "react";
import { Alert } from "reactstrap";

export interface HelloProps {
  compiler: string;
  framework: string;
}

const Hello = (props: HelloProps) => (
  <Alert>
    Hello 44ddd2224sss {props.compiler} and {props.framework}!
  </Alert>
);

export default Hello;
