import Link from 'next/link'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { Button } from '@/components/ui/button'

export function Header() {
  return (
    <header className="border-b">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-primary">
          Estately
        </Link>

        <nav className="flex items-center gap-6">
          <Link href="/providers" className="text-sm font-medium hover:text-primary transition-colors">
            Find Providers
          </Link>
          <Link href="/estates" className="text-sm font-medium hover:text-primary transition-colors">
            Estates
          </Link>
          <a href="tel:+27768805136" className="text-sm font-medium hover:text-primary transition-colors hidden md:block">
            +27 076 880 5136
          </a>

          <SignedOut>
            <Button asChild variant="ghost">
              <Link href="/sign-in">Sign In</Link>
            </Button>
            <Button asChild>
              <Link href="/sign-up">Sign Up</Link>
            </Button>
          </SignedOut>

          <SignedIn>
            <Button asChild variant="ghost">
              <Link href="/dashboard">Dashboard</Link>
            </Button>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </nav>
      </div>
    </header>
  )
}
