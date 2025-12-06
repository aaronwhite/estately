import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section className="bg-gradient-to-b from-primary/10 to-background py-20">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl mb-6">
            Find Trusted Service Providers in Your Estate
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Estate-verified, neighbor-reviewed quality service providers across South Africa
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" asChild>
              <Link href="/providers">Find Providers</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/sign-up">Join as Provider</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
