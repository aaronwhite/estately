import { prisma } from '@/lib/prisma'
import { ProviderCard } from '@/components/providers/provider-card'

export default async function ProvidersPage() {
  const providers = await prisma.serviceProvider.findMany({
    where: { active: true },
    include: {
      user: true,
      categories: {
        include: {
          category: true
        }
      }
    },
    orderBy: {
      averageRating: 'desc'
    },
    take: 20
  })

  return (
    <div className="container py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Service Providers</h1>
        <p className="text-muted-foreground max-w-2xl">
          Browse trusted, estate-verified service providers. All providers have been vetted by estate management and reviewed by residents.
        </p>
      </div>

      {providers.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {providers.map((provider) => (
            <ProviderCard key={provider.id} provider={provider} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-lg text-muted-foreground mb-4">
            No service providers found yet.
          </p>
          <p className="text-sm text-muted-foreground">
            Check back soon as we onboard more providers to the platform.
          </p>
        </div>
      )}
    </div>
  )
}
