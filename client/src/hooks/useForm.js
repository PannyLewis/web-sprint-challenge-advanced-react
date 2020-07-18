// write your custom hook here to control your checkout form
import { useLocalStorage } from "../hooks/useLocalStorage";

export const useForm = (key, initialValues) => {
  const [values, setValues] = useLocalStorage([key], initialValues);

  const handleChanges = (e) => {
    // console.log(e.target.value);
    setValues({
      ...values,
      // username: hello
      [e.target.name]: e.target.value,
    });
    console.log(values);
  };
  // const handleChanges = e => {
  //   setUsername(e.target.value);
  // };

  const handleSubmit = (e) => {
    // e.preventDefault();
    if (e) e.preventDefault();
    // setShowSuccessMessage(true);
  };
  // const handleSubmit = e => {
  //   e.preventDefault();
  //   alert(username);
  // };

  return [values, handleSubmit, handleChanges];
};
