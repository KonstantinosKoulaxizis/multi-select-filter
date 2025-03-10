import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render } from "@testing-library/react";
import { ReactElement } from "react";

const queryClient = new QueryClient()

export const renderWithQueryClient = (element: ReactElement) => {
    render(
        <QueryClientProvider client={queryClient}>
            {element}
        </QueryClientProvider>
    )
}