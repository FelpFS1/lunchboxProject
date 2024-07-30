import { useCallback, useState } from "react";

import { useDropzone } from "react-dropzone";

import Input from "./components/Input";
import HasFile from "./components/HasFile";

export default function FileInput() {
  const [file, setFile] = useState<File | null>(null);

  const onDrop = useCallback((file: File[]) => {
    setFile(file[0]);
  }, []);
  const cancelDrop = useCallback(() => {
    setFile(null);
  }, [file]);

  const dropzone = useDropzone({
    onDrop,
    accept: {
      "image/*": [".jpeg", ".png", ".svg"],
    },
  });

  if (file) return <HasFile file={file} cancelDrop={cancelDrop} />;
  return <Input dropzone={dropzone} />;
}
