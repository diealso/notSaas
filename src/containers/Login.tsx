import supabase from "../utils/db/db";

import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";

const Login = () => {
  return (
    <div className="flex justify-center align-middle w-full bg-white min-h-[100dvh] items-center border-non">
      <div className="justify-center w-full max-w-xl px-4 mx-auto align-middle">
        <h1 className="mb-12 text-5xl font-black text-center text-main">
          NOTSAAS
        </h1>
        <Auth
          supabaseClient={supabase}
          providers={["google", "linkedin", "twitter"]}
          appearance={{
            theme: ThemeSupa,
            className: {
              button:
                "bg-secondary text-white border-none py-4 px-8 hover:bg-main_important",
            },
          }}
        />
      </div>
    </div>
  );
};

export default Login;
