import { useEffect, useState } from "react";
import supabase from "./utils/db/db";

import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import Error from "./components/Error";
import Login from "./containers/Login";
import Index from "./containers/Index";
import Frame from "./containers/Frame";

const queryClient = new QueryClient();

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Frame />} errorElement={<Error />}>
      <Route path="/" element={<Index />} />

      {/* <Route path="cart/" element={<Cart />} />
        <Route path="product/:productRef" element={<ProductDetails />} />
        <Route path="checkout/" element={<Checkout />} /> */}
    </Route>
  )
);

function App() {
  const [session, setSession] = useState<any>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (!session) {
    return <Login />;
  } else {
    console.log(session);
    return (
      <>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
          <RouterProvider router={router} />
        </QueryClientProvider>
      </>
    );
  }
}

export default App;
