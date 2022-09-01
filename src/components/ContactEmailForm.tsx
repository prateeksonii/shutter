import { SubmitHandler, useForm } from "react-hook-form";
import { styled } from "stitches.config";
import { z } from "zod";

type ContactEmailFormValues = {
  email: string;
};

const ContactEmailForm = () => {
  const { register, handleSubmit } = useForm<ContactEmailFormValues>();

  const onSubmit: SubmitHandler<ContactEmailFormValues> = (values) => {
    console.log(values);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ContactLabelInput
        placeholder="Type contact's email address"
        {...register("email")}
      />
      <button type="submit" hidden>
        Submit
      </button>
    </form>
  );
};

export default ContactEmailForm;

const ContactLabelInput = styled("input", {
  width: "100%",
  padding: "1rem",
  backgroundColor: "transparent",
  color: "$light",
  fontSize: "1.4rem",
  border: "none",
  outline: "1px solid $dark",
});
