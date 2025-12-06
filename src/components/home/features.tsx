import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const features = [
  {
    title: 'Estate Verified',
    description: 'Service providers verified by estate management and trustees',
    icon: '✓'
  },
  {
    title: 'Neighbor Reviews',
    description: 'Read authentic reviews from your neighbors and community',
    icon: '★'
  },
  {
    title: 'Quality Assured',
    description: 'Only vetted, reliable professionals in your area',
    icon: '🏆'
  },
  {
    title: 'Easy Booking',
    description: 'Request quotes and book services with a few clicks',
    icon: '📅'
  }
]

export function Features() {
  return (
    <section className="py-20">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Estately?</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <Card key={feature.title}>
              <CardHeader>
                <div className="text-4xl mb-2">{feature.icon}</div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
