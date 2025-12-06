import { prisma } from '@/lib/prisma'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default async function EstatesPage() {
  const estates = await prisma.estate.findMany({
    where: { active: true },
    orderBy: {
      name: 'asc'
    },
    take: 20
  })

  return (
    <div className="container py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Estates & Complexes</h1>
        <p className="text-muted-foreground max-w-2xl">
          Browse residential estates and complexes on our platform.
        </p>
      </div>

      {estates.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {estates.map((estate) => (
            <Card key={estate.id}>
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <CardTitle className="text-lg">{estate.name}</CardTitle>
                  {estate.verified && (
                    <Badge variant="secondary" className="text-xs">Verified</Badge>
                  )}
                </div>
                <CardDescription>
                  {estate.city}, {estate.province.replace(/_/g, ' ')}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {estate.description && (
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-2">
                    {estate.description}
                  </p>
                )}
                {estate.totalUnits && (
                  <p className="text-xs text-muted-foreground">
                    {estate.totalUnits} units
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-lg text-muted-foreground mb-4">
            No estates found yet.
          </p>
          <p className="text-sm text-muted-foreground">
            Check back soon as we add more estates to the platform.
          </p>
        </div>
      )}
    </div>
  )
}
