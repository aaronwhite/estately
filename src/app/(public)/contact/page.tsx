import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function ContactPage() {
  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg text-muted-foreground">
            Get in touch with the Estately team
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span>📞</span> Phone
              </CardTitle>
              <CardDescription>Call us during business hours</CardDescription>
            </CardHeader>
            <CardContent>
              <a
                href="tel:+27768805136"
                className="text-lg font-semibold text-primary hover:underline"
              >
                +27 076 880 5136
              </a>
              <p className="text-sm text-muted-foreground mt-2">
                Monday - Friday: 8:00 AM - 6:00 PM (SAST)
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span>🌐</span> Website
              </CardTitle>
              <CardDescription>Visit our website</CardDescription>
            </CardHeader>
            <CardContent>
              <a
                href="https://estately.co.za"
                className="text-lg font-semibold text-primary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                estately.co.za
              </a>
              <p className="text-sm text-muted-foreground mt-2">
                Browse all our services online
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span>📍</span> Location
              </CardTitle>
              <CardDescription>Serving estates across South Africa</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                Gauteng, Western Cape, KwaZulu-Natal, and all major provinces
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span>💬</span> Support
              </CardTitle>
              <CardDescription>Need help?</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm mb-2">
                Call us at +27 076 880 5136 or browse our help resources
              </p>
              <Button asChild variant="outline" size="sm">
                <a href="/sign-in">Sign In for Support</a>
              </Button>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>About Estately</CardTitle>
            <CardDescription>South Africa&apos;s trusted platform for estate services</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Estately.co.za connects estate residents with verified, trusted service providers.
              All our service providers are estate-verified and neighbor-reviewed, ensuring you get
              quality service from professionals who understand your community&apos;s needs.
            </p>
            <div className="mt-4 flex gap-4">
              <Button asChild>
                <a href="/providers">Find Providers</a>
              </Button>
              <Button asChild variant="outline">
                <a href="/sign-up">Join as Provider</a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
