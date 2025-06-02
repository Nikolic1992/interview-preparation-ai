import { ReactNode } from "react";
import { isAuthenticated } from "@/lib/actions/auth.action";
import { redirect } from "next/navigation";
import { Toaster } from "sonner";

const AuthLayout = async ({ children }: { children: ReactNode }) => {
  const isUserAuthenticated = await isAuthenticated();
  if (isUserAuthenticated) redirect("/");
  return (
    <div className="auth-layout">
      {children}
      <Toaster position="bottom-right" />
    </div>
  );
};

export default AuthLayout;
