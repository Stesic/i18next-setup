import * as yup from "yup";

export const setYupLocale = (_, t) => {
  yup.setLocale({
    mixed: {
      required: t("ccc.required.label"),
    },
    string: {
      email: t("ccc.invalidEmail.label"),
    },
  });
};
