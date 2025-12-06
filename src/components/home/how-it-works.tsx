export function HowItWorks() {
  const steps = [
    {
      number: '1',
      title: 'Search & Browse',
      description: 'Find service providers verified by your estate'
    },
    {
      number: '2',
      title: 'Read Reviews',
      description: 'Check ratings and reviews from your neighbors'
    },
    {
      number: '3',
      title: 'Book Service',
      description: 'Contact providers and schedule your service'
    },
    {
      number: '4',
      title: 'Leave Review',
      description: 'Share your experience to help the community'
    }
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                {step.number}
              </div>
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
