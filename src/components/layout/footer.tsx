import Link from 'next/link'

export function Footer() {
  return (
    <footer className="border-t mt-auto">
      <div className="container py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Estately</h3>
            <p className="text-sm text-muted-foreground">
              South Africa's trusted platform for estate-verified service providers
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">For Residents</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/providers" className="text-muted-foreground hover:text-primary transition-colors">
                  Find Providers
                </Link>
              </li>
              <li>
                <Link href="/estates" className="text-muted-foreground hover:text-primary transition-colors">
                  Browse Estates
                </Link>
              </li>
              <li>
                <Link href="/sign-up" className="text-muted-foreground hover:text-primary transition-colors">
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">For Providers</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/sign-up" className="text-muted-foreground hover:text-primary transition-colors">
                  Join as Provider
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="text-muted-foreground hover:text-primary transition-colors">
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="tel:+27768805136" className="hover:text-primary transition-colors">
                  +27 076 880 5136
                </a>
              </li>
              <li>
                <a href="https://estately.co.za" className="hover:text-primary transition-colors">
                  estately.co.za
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Estately.co.za. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
