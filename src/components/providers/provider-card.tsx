import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

interface ProviderCardProps {
  provider: {
    slug: string
    businessName: string
    description: string
    logo: string | null
    verified: boolean
    averageRating: number
    totalReviews: number
    categories?: {
      category: {
        name: string
      }
    }[]
  }
}

export function ProviderCard({ provider }: ProviderCardProps) {
  return (
    <Link href={`/providers/${provider.slug}`}>
      <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
        <CardHeader>
          <div className="flex items-start justify-between mb-2">
            <Avatar className="h-12 w-12">
              <AvatarImage src={provider.logo || ''} alt={provider.businessName} />
              <AvatarFallback>{provider.businessName[0]}</AvatarFallback>
            </Avatar>
            {provider.verified && (
              <Badge variant="secondary" className="text-xs">Verified</Badge>
            )}
          </div>
          <CardTitle className="text-lg">{provider.businessName}</CardTitle>
          <CardDescription className="line-clamp-2">
            {provider.description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-yellow-500 text-sm">★</span>
            <span className="font-semibold text-sm">{provider.averageRating.toFixed(1)}</span>
            <span className="text-sm text-muted-foreground">
              ({provider.totalReviews} {provider.totalReviews === 1 ? 'review' : 'reviews'})
            </span>
          </div>
          {provider.categories && provider.categories.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {provider.categories.slice(0, 3).map((cat) => (
                <Badge key={cat.category.name} variant="outline" className="text-xs">
                  {cat.category.name}
                </Badge>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </Link>
  )
}
