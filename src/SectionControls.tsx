import * as React from "react";
import styled from "styled-components";
import { FiSettings, FiMove, FiTrash } from "react-icons/fi";
import { Button } from "reactstrap";

interface IProps {}

const SectionControls: React.SFC<IProps> = props => {
  return (
    <Controls className="section-controls">
      <ul className="list-inline">
        <li className="list-inline-item">
          <Button color="primary">
            <FiMove />
          </Button>
        </li>
        <li className="list-inline-item">
          <Button color="primary">
            <FiSettings />
          </Button>
        </li>
        <li className="list-inline-item">
          <Button color="primary">
            <FiTrash />
          </Button>
        </li>
      </ul>
    </Controls>
  );
};

export default SectionControls;

const Controls: any = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  z-index: 100;
  ul {
    margin: 0;
  }
  li {
    margin-right: 2px !important;
  }
`;
