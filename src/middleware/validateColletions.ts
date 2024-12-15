import { body } from "express-validator";

export const ValidationColletions = () => {
  return [
    body("title")
      .isString()
      .withMessage("O valor precisa ser uma string")
      .isLength({ min: 5 })
      .withMessage("O nome do filme precisa ter no mínimo 5 caractere"),
    body("rating")
      .isNumeric()
      .withMessage("O valor precisa ser numero")
      .custom((er) => {
        if (er < 0 || er > 10) {
          throw new Error("O valor precisa esta entre 1 a 10");
        }
        return true;
      }),
    body("description")
      .isString()
      .withMessage("O valor precisa ser uma string"),
    body("poster").isURL().withMessage("A imagem precisa ser uma URL."),
  ];
};
