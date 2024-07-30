import styled from "styled-components";

export const EditContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  input {
    width: 100%;
    padding: 5rem;
    border: dashed 1px;
  }
  span {
    margin-bottom: 1rem;
  }
`;
export const AvatarContainer = styled.div`
  width: 100%;
  text-align: center;
  margin: 0.5rem 0;
`;
export const AvatarOptions = styled.section`
  margin: 1rem 0;
  width: 100%;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(4, 3fr);
  align-items: center;
`;
export const AvatarButton = styled.button`
  width: 70px;
  height: 70px;
  border: 0;
  border-radius: 100%;
  background-color: transparent;
  cursor: pointer;
  text-align: center;

  transition: all 0.3s ease-in-out;
  img {
    width: 70px;
    height: 70px;
    border-radius: 100px;
    text-align: center;
  }
  &:hover {
    transform: scale(1.4);
  }
`;
