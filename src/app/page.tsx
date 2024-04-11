import { type FC } from "react";
import styled from "styled-components";

const StyledButton = styled.span`
  user-select: none;
  cursor: pointer;
  display: inline-block;
  margin: 1em;
  padding: 0.3em 0.5em;
  border-radius: 0.2em;
  border: solid 1px #3498db;
  color: #fff;
  background-colors: #3498db;
`;

const Home: FC = () => {
  return (
    <div className="">
      <div className="text-lg font-bold">Home</div>
      <div>
        <span className="text-blue-500">Hello</span>
        <span className="text-red-500">World</span>
      </div>
    </div>
  );
};

export default Home;
