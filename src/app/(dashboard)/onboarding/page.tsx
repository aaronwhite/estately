'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useUser } from '@clerk/nextjs'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { PROVINCES } from '@/lib/constants'

export default function OnboardingPage() {
  const { user } = useUser()
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [userType, setUserType] = useState<'estate_owner' | 'service_provider' | null>(null)
  const [estateName, setEstateName] = useState('')
  const [province, setProvince] = useState('')

  const handleUserTypeSelect = (type: 'estate_owner' | 'service_provider') => {
    setUserType(type)
    setStep(2)
  }

  const handleComplete = async () => {
    router.push('/dashboard')
  }

  return (
    <div className="container max-w-2xl py-12">
      <Card>
        <CardHeader>
          <CardTitle>Welcome to Estately{user?.firstName ? `, ${user.firstName}` : ''}!</CardTitle>
          <CardDescription>Let's set up your profile</CardDescription>
        </CardHeader>
        <CardContent>
          {step === 1 && (
            <div className="space-y-4">
              <Label>I am a...</Label>
              <div className="grid grid-cols-2 gap-4">
                <Button
                  variant="outline"
                  className="h-32 flex flex-col gap-2"
                  onClick={() => handleUserTypeSelect('estate_owner')}
                >
                  <div className="text-4xl">🏠</div>
                  <div className="font-semibold">Estate Owner</div>
                  <div className="text-xs text-muted-foreground">Looking for services</div>
                </Button>
                <Button
                  variant="outline"
                  className="h-32 flex flex-col gap-2"
                  onClick={() => handleUserTypeSelect('service_provider')}
                >
                  <div className="text-4xl">🔧</div>
                  <div className="font-semibold">Service Provider</div>
                  <div className="text-xs text-muted-foreground">Offering services</div>
                </Button>
              </div>
            </div>
          )}

          {step === 2 && userType === 'estate_owner' && (
            <div className="space-y-4">
              <div>
                <Label htmlFor="estate-name">Estate/Complex Name</Label>
                <Input
                  id="estate-name"
                  placeholder="Enter your estate name"
                  value={estateName}
                  onChange={(e) => setEstateName(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="province">Province</Label>
                <Select value={province} onValueChange={setProvince}>
                  <SelectTrigger id="province">
                    <SelectValue placeholder="Select province" />
                  </SelectTrigger>
                  <SelectContent>
                    {PROVINCES.map((prov) => (
                      <SelectItem key={prov} value={prov}>
                        {prov.replace(/_/g, ' ')}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <Button onClick={handleComplete} className="w-full" disabled={!estateName || !province}>
                Complete Setup
              </Button>
            </div>
          )}

          {step === 2 && userType === 'service_provider' && (
            <div className="space-y-4">
              <div>
                <Label htmlFor="business-name">Business Name</Label>
                <Input
                  id="business-name"
                  placeholder="Enter your business name"
                />
              </div>
              <div>
                <Label htmlFor="service-province">Province</Label>
                <Select value={province} onValueChange={setProvince}>
                  <SelectTrigger id="service-province">
                    <SelectValue placeholder="Select province" />
                  </SelectTrigger>
                  <SelectContent>
                    {PROVINCES.map((prov) => (
                      <SelectItem key={prov} value={prov}>
                        {prov.replace(/_/g, ' ')}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <Button onClick={handleComplete} className="w-full" disabled={!province}>
                Complete Setup
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
