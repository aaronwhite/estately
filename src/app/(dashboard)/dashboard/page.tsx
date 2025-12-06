import { currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import { prisma } from '@/lib/prisma'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default async function DashboardPage() {
  const clerkUser = await currentUser()

  if (!clerkUser) {
    redirect('/sign-in')
  }

  const user = await prisma.user.findUnique({
    where: { clerkId: clerkUser.id },
    include: {
      estates: {
        include: {
          estate: true
        }
      },
      reviews: true,
      bookings: true,
    }
  })

  return (
    <div className="container py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome back{user?.firstName ? `, ${user.firstName}` : ''}!
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>My Estates</CardTitle>
            <CardDescription>Estates you're registered with</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{user?.estates.length || 0}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>My Reviews</CardTitle>
            <CardDescription>Reviews you've written</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{user?.reviews.length || 0}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Bookings</CardTitle>
            <CardDescription>Active service requests</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{user?.bookings.length || 0}</div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>What would you like to do?</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <Button asChild className="w-full" variant="outline">
              <Link href="/providers">Find Service Providers</Link>
            </Button>
            <Button asChild className="w-full" variant="outline">
              <Link href="/estates">Browse Estates</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Your Estates</CardTitle>
            <CardDescription>Estates you belong to</CardDescription>
          </CardHeader>
          <CardContent>
            {user?.estates.length ? (
              <ul className="space-y-2">
                {user.estates.map((estateOwnership) => (
                  <li key={estateOwnership.id} className="text-sm">
                    {estateOwnership.estate.name}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-muted-foreground">
                You haven't joined any estates yet.
              </p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
