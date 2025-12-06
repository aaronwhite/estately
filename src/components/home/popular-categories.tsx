import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { SERVICE_CATEGORIES } from '@/lib/constants'

export function PopularCategories() {
  return (
    <section className="py-20">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-4">Popular Services</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Browse by category to find the perfect service provider for your needs
        </p>
        <div className="grid gap-4 grid-cols-2 md:grid-cols-4 lg:grid-cols-4 max-w-4xl mx-auto">
          {SERVICE_CATEGORIES.map((category) => (
            <Link key={category.slug} href={`/providers?category=${category.slug}`}>
              <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <div className="text-5xl mb-3">{category.icon}</div>
                  <h3 className="font-semibold text-center">{category.name}</h3>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
