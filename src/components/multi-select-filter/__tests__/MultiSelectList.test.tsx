import '@testing-library/jest-dom'
import { screen, waitFor } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { MultiSelectList } from "../MultiSelectList";
import { renderWithQueryClient } from "../../../tests/utils";

describe("MultiSelectList", () => {
  it("should render loading state initially", () => {

    renderWithQueryClient(<MultiSelectList />);

    expect(screen.getByTestId("multi-select-list-loading")).toBeInTheDocument();
  });

  it("should render data when query resolves", async () => {
    renderWithQueryClient(<MultiSelectList />);


    await waitFor(() => {
      expect(screen.getByTestId("multi-select-list")).toBeInTheDocument();
      expect(screen.getByText("Thrillers")).toBeInTheDocument();
    });
  });
});
