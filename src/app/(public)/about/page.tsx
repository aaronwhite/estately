import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">About Estately.co.za</h1>
          <p className="text-xl text-muted-foreground">
            Connecting South African estate communities with trusted service providers
          </p>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Estately.co.za was created to solve a common problem faced by estate residents across
                South Africa: finding reliable, vetted service providers who understand the unique needs
                of estate communities. We connect residents with estate-verified, neighbor-reviewed
                professionals, ensuring quality service and peace of mind.
              </p>
            </CardContent>
          </Card>

          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <div className="text-4xl mb-2">✓</div>
                <CardTitle>Estate Verified</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  All service providers are verified by estate management and trustees before being
                  listed on our platform.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="text-4xl mb-2">★</div>
                <CardTitle>Neighbor Reviewed</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Read authentic reviews from your neighbors and community members who have used
                  these services.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="text-4xl mb-2">🏆</div>
                <CardTitle>Quality Assured</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Only the most reliable and professional service providers make it onto our platform.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>How Estately Works</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">For Residents</h3>
                  <p className="text-sm text-muted-foreground">
                    Browse verified service providers in your area, read reviews from your neighbors,
                    and book services with confidence. Our platform makes it easy to find the right
                    professional for any job.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">For Service Providers</h3>
                  <p className="text-sm text-muted-foreground">
                    Join our network of trusted professionals and connect with estate communities
                    across South Africa. Build your reputation through verified reviews and grow your
                    business.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">For Estate Management</h3>
                  <p className="text-sm text-muted-foreground">
                    Maintain a curated list of approved service providers for your estate. Help your
                    residents find reliable professionals while maintaining community standards.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contact Us</CardTitle>
              <CardDescription>Get in touch with the Estately team</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 mb-4">
                <p className="text-sm">
                  <span className="font-semibold">Phone:</span>{' '}
                  <a href="tel:+27768805136" className="text-primary hover:underline">
                    +27 076 880 5136
                  </a>
                </p>
                <p className="text-sm">
                  <span className="font-semibold">Website:</span>{' '}
                  <a href="https://estately.co.za" className="text-primary hover:underline">
                    estately.co.za
                  </a>
                </p>
              </div>
              <div className="flex gap-4">
                <Button asChild>
                  <Link href="/contact">Contact Us</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/sign-up">Get Started</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
