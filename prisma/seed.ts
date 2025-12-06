import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Starting database seed...')

  console.log('Seeding service categories...')
  const categories = [
    { name: 'Plumber', slug: 'plumber', description: 'Plumbing services, repairs, and installations' },
    { name: 'Electrician', slug: 'electrician', description: 'Electrical work, repairs, and installations' },
    { name: 'Gardener', slug: 'gardener', description: 'Garden maintenance and landscaping services' },
    { name: 'Painter', slug: 'painter', description: 'Interior and exterior painting services' },
    { name: 'Pest Control', slug: 'pest-control', description: 'Pest control and fumigation services' },
    { name: 'Pool Maintenance', slug: 'pool-maintenance', description: 'Pool cleaning and maintenance services' },
    { name: 'HVAC', slug: 'hvac', description: 'Heating, ventilation, and air conditioning services' },
    { name: 'Handyman', slug: 'handyman', description: 'General handyman and repair services' },
  ]

  for (const category of categories) {
    await prisma.serviceCategory.upsert({
      where: { slug: category.slug },
      update: {},
      create: category,
    })
  }

  console.log('✓ Service categories seeded')

  console.log('Seeding estates...')
  const estates = [
    {
      name: 'Sandton Gardens Estate',
      slug: 'sandton-gardens',
      address: '123 Rivonia Road',
      city: 'Sandton',
      province: 'GAUTENG',
      postalCode: '2196',
      description: 'Luxury residential estate in the heart of Sandton with 24/7 security and modern amenities.',
      totalUnits: 250,
      verified: true,
    },
    {
      name: 'Cape Town Heights',
      slug: 'cape-town-heights',
      address: '456 Table Mountain Road',
      city: 'Cape Town',
      province: 'WESTERN_CAPE',
      postalCode: '8001',
      description: 'Scenic estate with stunning views of Table Mountain and the Atlantic Ocean.',
      totalUnits: 180,
      verified: true,
    },
    {
      name: 'Durban Beachfront Complex',
      slug: 'durban-beachfront',
      address: '789 Marine Parade',
      city: 'Durban',
      province: 'KWAZULU_NATAL',
      postalCode: '4001',
      description: 'Modern beachfront complex with direct access to Durban's golden beaches.',
      totalUnits: 120,
      verified: true,
    },
  ]

  for (const estate of estates) {
    await prisma.estate.upsert({
      where: { slug: estate.slug },
      update: {},
      create: estate,
    })
  }

  console.log('✓ Estates seeded')
  console.log('\nDatabase seed completed successfully!')
  console.log('You can now run the app with: bun run dev')
}

main()
  .catch((e) => {
    console.error('Error seeding database:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
