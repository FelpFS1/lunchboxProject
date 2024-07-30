import * as Styles from "./styles";

import FileInput from "../FileInput";
import React, { useState } from "react";
import SaveAvatarButton from "../SaveAvatarButton";

export default function EditAvatar() {
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);

  const resetUrl = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.currentTarget;
    if (target.getAttribute("data-state") === "checked") {
      setAvatarUrl(null);
      target.setAttribute("data-state", "unchecked");
      return;
    }
    target.setAttribute("data-state", "checked");
    setAvatarUrl(target.getAttribute("value"));
  };

  return (
    <Styles.EditContainer>
      <Styles.AvatarContainer>
        <h4>Escolha o avatar</h4>
        <Styles.AvatarOptions onValueChange={(e: string) => setAvatarUrl(e)}>
          <Styles.AvatarButton
            value="https://i.ibb.co/vcRV7wr/9334402.jpg"
            onClick={(e) => resetUrl(e)}
          >
            <img src="https://i.ibb.co/vcRV7wr/9334402.jpg" />
          </Styles.AvatarButton>
          <Styles.AvatarButton
            value="https://i.ibb.co/hV1WGCS/Avatar2.jpg"
            onClick={(e) => resetUrl(e)}
          >
            <img src="https://i.ibb.co/hV1WGCS/Avatar2.jpg" />
          </Styles.AvatarButton>
          <Styles.AvatarButton
            value="https://i.ibb.co/V06rf5r/Avatar3.jpg"
            onClick={(e) => resetUrl(e)}
          >
            <img src="https://i.ibb.co/V06rf5r/Avatar3.jpg" />
          </Styles.AvatarButton>
          <Styles.AvatarButton
            value="https://i.ibb.co/n7Y8d5z/avatar4.jpg"
            onClick={(e) => resetUrl(e)}
          >
            <img src="https://i.ibb.co/n7Y8d5z/avatar4.jpg" />
          </Styles.AvatarButton>
        </Styles.AvatarOptions>
      </Styles.AvatarContainer>

      {avatarUrl ? (
        <SaveAvatarButton />
      ) : (
        <>
          <span>Ou faça o upload do seu avatar</span>
          <FileInput />
        </>
      )}
    </Styles.EditContainer>
  );
}
