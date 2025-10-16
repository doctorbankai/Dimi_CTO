import type { Metadata } from "next"

import { LoginForm } from "./login-form"
import { ModeToggle } from "@/components/mode-toggle"

export const metadata: Metadata = {
  title: "Login",
}

export default function LoginPage() {
  return (
    <div className="relative flex min-h-screen items-center justify-center p-4">
      <div className="absolute right-4 top-4">
        <ModeToggle />
      </div>
      <LoginForm />
    </div>
  )
}
