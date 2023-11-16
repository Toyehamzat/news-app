import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AppNavigation from "./src/navigations";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppNavigation />
    </QueryClientProvider>
  );
}
