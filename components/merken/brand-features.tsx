import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

interface BrandFeaturesProps {
  brand: {
    name: string
    features: string[]
  }
}

export function BrandFeatures({ brand }: BrandFeaturesProps) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
        <CardTitle className="text-2xl">
          Unieke Kenmerken van {brand.name}
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="grid gap-4">
          {brand.features.map((feature, index) => (
            <div 
              key={index} 
              className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
            >
              <div className="bg-green-100 rounded-full p-1 mt-0.5">
                <CheckCircle2 className="h-4 w-4 text-green-600" />
              </div>
              <span className="text-sm font-medium">{feature}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}