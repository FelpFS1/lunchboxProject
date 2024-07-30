import * as Styles from "./styles";

import AvatarDefault from "../../../../assets/AvatarDefault.png";

import FileInput from "../FileInput";

export default function EditAvatar() {
  return (
    <Styles.EditContainer>
      <Styles.AvatarContainer>
        <h4>Escolha o avatar</h4>
        <Styles.AvatarOptions>
          <Styles.AvatarButton>
            <img src={AvatarDefault} />
          </Styles.AvatarButton>
          <Styles.AvatarButton>
            <img src="https://i.ibb.co/vcRV7wr/9334402.jpg" />
          </Styles.AvatarButton>
          <Styles.AvatarButton>
            <img src="https://i.ibb.co/hV1WGCS/Avatar2.jpg" />
          </Styles.AvatarButton>
          <Styles.AvatarButton>
            <img src="https://i.ibb.co/V06rf5r/Avatar3.jpg" />
          </Styles.AvatarButton>
          <Styles.AvatarButton>
            <img src="https://i.ibb.co/n7Y8d5z/avatar4.jpg" />
          </Styles.AvatarButton>
        </Styles.AvatarOptions>
      </Styles.AvatarContainer>
      <span>Ou faça o upload do seu avatar</span>
      <FileInput />
    </Styles.EditContainer>
  );
}
