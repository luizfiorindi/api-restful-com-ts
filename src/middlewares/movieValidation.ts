import { body } from "express-validator";

export const movieCreatevalidation = () => {
  return [
    body("title")
      .isString()
      .withMessage("O título é obrigatório, e deve ser texto"),
    body("rating")
      .isNumeric()
      .withMessage("A nota é obrigatória, e deve ser entre 0 e 10")
      .custom((value: number) => {
        if (value < 0 || value > 10) {
          throw new Error("A nota dever ser entre 0 e 10");
        }
        return true;
      }),
    body("description").isString().withMessage("A descrição é obrigatória"),
    body("director").isString().withMessage("O diretor é obrigatório"),
    body("poster")
      .isURL()
      .withMessage("O poster é obrigatório e deve ser uma URL"),
  ];
};
