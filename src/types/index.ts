import { User, Estate, ServiceProvider, Review } from '@prisma/client'

export type UserWithRelations = User & {
  estates?: Estate[]
  serviceProvider?: ServiceProvider
}

export type ProviderWithDetails = ServiceProvider & {
  user: User
  reviews: Review[]
  categories: {
    category: {
      name: string
      slug: string
    }
  }[]
}
