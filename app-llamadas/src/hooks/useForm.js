import { useState } from "react";

const useForm = (initialForm) => {
  const [formValues, setFormValues] = useState(initialForm);

  const handleInputChange = ({ target }) => {
    const { name, value } = target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  return { formValues, handleInputChange, setFormValues };
};

export default useForm;
