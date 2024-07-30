import styled from "styled-components";

export const Container = styled.div`
  width: 150px;
  padding: 0.5rem;
  background-color: ${(props) => props.theme["gray-400"]};
  border-radius: 20px;

  display: flex;
  align-items: center;
  gap: 1.5rem;

  span {
    text-transform: uppercase;
    font-weight: bold;
  }
`;

export const Avatar = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 100%;
  border: 0;
  background-color: ${(props) => props.theme["gray-100"]};
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 38px;
    height: 38px;
    border-radius: 100%;
  }
`;
