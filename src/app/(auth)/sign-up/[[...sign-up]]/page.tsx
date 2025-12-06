import { SignUp } from '@clerk/nextjs'

export default function SignUpPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-muted/30">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold mb-2">Join Estately</h1>
          <p className="text-muted-foreground">Create your account to get started</p>
        </div>
        <SignUp />
      </div>
    </div>
  )
}
