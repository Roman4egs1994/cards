import { ChangeEvent, useState } from "react";
import { convertFileToBase64 } from "../../common/utils/converFileToBase64";
import styles from "./ImageUpload.module.scss";
import { Icon } from "@mui/material";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";

export const ImageUpload = () => {
  const [photoUrl, setPhotoUrl] = useState("");

  const handlePhotoSelect = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const file = event.target.files[0];

      convertFileToBase64(file, (file64) => {
        setPhotoUrl(file64);
      });
    }
  };

  return (
    <>
      <div className={styles.blockPhoto}>
        <div className={styles.labelBlock}>
          <label htmlFor={"file-upload"}>
            <Icon color="info" className={styles.iconMi}>
              <AddAPhotoIcon />
            </Icon>
          </label>
        </div>
        <input
          className={styles.inputImage}
          id={"file-upload"}
          type="file"
          accept="image/*"
          onChange={handlePhotoSelect}
        />
        {photoUrl && <img className={styles.addPhoto} src={photoUrl} alt="Selected" />}
      </div>
    </>
  );
};
