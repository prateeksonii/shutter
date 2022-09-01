import { trpc } from "@/utils/trpc";
import type { User } from "@prisma/client";
import type { Dispatch, FC, SetStateAction } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { styled } from "stitches.config";

type ContactEmailFormProps = {
  setSelectedUser: Dispatch<SetStateAction<User | undefined>>;
};

type ContactEmailFormValues = {
  email: string;
};

const ContactEmailForm: FC<ContactEmailFormProps> = ({ setSelectedUser }) => {
  const { register, handleSubmit, watch } = useForm<ContactEmailFormValues>();

  const email = watch("email");

  const { data: user, refetch } = trpc.useQuery(
    [
      "contact.findByEmail",
      {
        email,
      },
    ],
    {
      enabled: false,
    }
  );

  if (user) setSelectedUser(user);

  const onSubmit: SubmitHandler<ContactEmailFormValues> = (values) => {
    refetch();
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <ContactLabelInput
        placeholder="Type contact's email address"
        {...register("email")}
      />
      <button type="submit" hidden>
        Submit
      </button>
    </Form>
  );
};

export default ContactEmailForm;

const Form = styled("form", {
  width: "100%",
});

const ContactLabelInput = styled("input", {
  width: "100%",
  padding: "1rem",
  backgroundColor: "transparent",
  color: "$light",
  fontSize: "1.2rem",
  border: "none",
  outline: "1px solid $dark",
});
