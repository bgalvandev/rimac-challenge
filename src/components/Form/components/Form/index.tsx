import React, { useState } from "react";
import Input from "../../../Input";
import Checkbox from "../../../Checkbox";
import Button from "../../../Button";
import Select from "../../../Select";

import style from "./Form.module.scss";
import { validateForm } from "../../../../utils/formUtils";
import { documentOptions } from "../../../../hooks/useForm";

interface FormProps {
  onSubmit: (formData: any) => void;
}

export const Form: React.FC<FormProps> = ({ onSubmit }) => {
  const [documentType, setDocumentType] = useState<string>("DNI");
  const [documentNumber, setDocumentNumber] = useState<string>("");
  const [cellphone, setCellphone] = useState<string>("");
  const [privacyAccepted, setPrivacyAccepted] = useState<boolean>(false);
  const [communicationAccepted, setCommunicationAccepted] =
    useState<boolean>(false);
  const [errors, setErrors] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateForm(
      documentNumber,
      cellphone,
      privacyAccepted,
      communicationAccepted
    );
    if (validation.isValid) {
      onSubmit({ documentType, documentNumber, cellphone });
    } else {
      setErrors(validation.errors);
    }
  };

  const isDocumentNumberValid = !errors.includes("documentNumber");
  const isCellphoneValid = !errors.includes("cellphone");

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <div className={style["form-container"]}>
        <div className={style["form-container__document"]}>
          <Select
            variant="right"
            value={documentType}
            onChange={(e) => setDocumentType(e.target.value)}
            options={documentOptions}
            isValid={true}
          />
          <Input
            variant="left"
            label="Nro. de documento"
            value={documentNumber}
            onChange={(e) => setDocumentNumber(e.target.value)}
            isValid={isDocumentNumberValid}
          />
        </div>
        <Input
          label="Celular"
          value={cellphone}
          onChange={(e) => setCellphone(e.target.value)}
          isValid={isCellphoneValid}
        />
        <Checkbox
          text="Acepto la Política de Privacidad"
          checked={privacyAccepted}
          onChange={() => setPrivacyAccepted(!privacyAccepted)}
        />
        <Checkbox
          text="Acepto la Política de Comunicaciones Comerciales"
          checked={communicationAccepted}
          onChange={() => setCommunicationAccepted(!communicationAccepted)}
        />
        <a href="http://google.com" target="_blank" rel="noopener noreferrer">
          Aplican Términos y Condiciones.
        </a>
        <Button text="Cotiza aquí" type="submit" />
        {errors.length > 0 && (
          <div className={style.errors}>
            {errors.map((error, index) => (
              <p key={index} className={style.error}>
                {error}
              </p>
            ))}
          </div>
        )}
      </div>
    </form>
  );
};
