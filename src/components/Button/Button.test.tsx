import Button from "./Button";
import { vi } from "vitest";
import { screen, render, fireEvent } from "@testing-library/react";

describe("Given a button complement", () => {
  describe("When it receives a text 'add mass'", () => {
    test("Then it should call the received action", async () => {
      const actionOnClick = vi.fn();

      render(
        <Button
          text="textClick"
          actionOnClick={actionOnClick}
          type={"button"}
          modifier={""}
          symbol={"+"}
        />,
      );

      const button = screen.getByRole("button");
      fireEvent.click(button);
    });
  });
});
