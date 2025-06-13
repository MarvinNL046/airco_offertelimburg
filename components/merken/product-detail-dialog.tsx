"use client"

import { useState } from "react"
import Image from "next/image"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Product } from "@/lib/product-catalog"
import { 
  Zap, 
  Volume2, 
  Thermometer, 
  Shield, 
  Phone, 
  MessageSquare,
  ChevronLeft,
  ChevronRight
} from "lucide-react"

interface ProductDetailDialogProps {
  product: Product
  isOpen: boolean
  onClose: () => void
}

export default function ProductDetailDialog({ 
  product, 
  isOpen, 
  onClose 
}: ProductDetailDialogProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  
  // Mock multiple images for demo
  const productImages = [
    product.image,
    product.image,
    product.image
  ]

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % productImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? productImages.length - 1 : prev - 1
    )
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-heading">
            {product.name}
          </DialogTitle>
          <DialogDescription>
            {product.type} • {product.capacity}
          </DialogDescription>
        </DialogHeader>

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative h-80 bg-gradient-to-br from-gray-50 to-white rounded-lg overflow-hidden">
              <Image
                src={productImages[currentImageIndex]}
                alt={product.name}
                fill
                className="object-contain p-4"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              
              {/* Navigation buttons */}
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur p-2 rounded-full shadow-lg hover:bg-white transition-colors"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur p-2 rounded-full shadow-lg hover:bg-white transition-colors"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
              
              {/* Energy Label */}
              {product.energyLabel && (
                <Badge className="absolute top-4 right-4 bg-green-600 text-white">
                  {product.energyLabel}
                </Badge>
              )}
            </div>
            
            {/* Thumbnail selector */}
            <div className="flex gap-2 justify-center">
              {productImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentImageIndex 
                      ? "bg-blue-600" 
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            {/* CTA Box */}
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
              <p className="text-lg font-semibold text-blue-900 mb-2">
                Interesse in dit model?
              </p>
              <p className="text-sm text-muted-foreground mb-4">
                Ontvang een persoonlijke offerte op maat
              </p>
              <Button size="sm" className="gradient-primary">
                <Phone className="mr-2 h-4 w-4" />
                Bel voor advies
              </Button>
            </div>

            {/* Features */}
            <div>
              <h3 className="font-semibold mb-3">Kenmerken</h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="flex items-center gap-2 text-sm">
                  <Zap className="h-4 w-4 text-blue-600" />
                  <span>Capaciteit: {product.capacity}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Thermometer className="h-4 w-4 text-orange-600" />
                  <span>Type: {product.type}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Shield className="h-4 w-4 text-green-600" />
                  <span>Garantie: 5 jaar</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Volume2 className="h-4 w-4 text-purple-600" />
                  <span>Geluid: &lt; 19dB</span>
                </div>
              </div>
            </div>

            {/* Feature List */}
            <div>
              <h3 className="font-semibold mb-3">Uitgebreide functies</h3>
              <ul className="space-y-2">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">✓</span>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-3 pt-4">
              <Button size="lg" className="flex-1 gradient-primary">
                <Phone className="mr-2 h-5 w-5" />
                Bel voor advies
              </Button>
              <Button size="lg" variant="outline" className="flex-1">
                <MessageSquare className="mr-2 h-5 w-5" />
                WhatsApp
              </Button>
            </div>
          </div>
        </div>

        {/* Additional Info Tabs */}
        <Tabs defaultValue="specs" className="mt-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="specs">Specificaties</TabsTrigger>
            <TabsTrigger value="benefits">Voordelen</TabsTrigger>
            <TabsTrigger value="warranty">Garantie</TabsTrigger>
          </TabsList>
          
          <TabsContent value="specs" className="mt-4">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-medium mb-1">Koelvermogen</p>
                <p className="text-muted-foreground">{product.capacity} (2.5 - 3.2 kW)</p>
              </div>
              <div>
                <p className="font-medium mb-1">Verwarmingsvermogen</p>
                <p className="text-muted-foreground">3.2 kW (2.8 - 4.0 kW)</p>
              </div>
              <div>
                <p className="font-medium mb-1">SEER waarde</p>
                <p className="text-muted-foreground">8.5 (zeer efficiënt)</p>
              </div>
              <div>
                <p className="font-medium mb-1">SCOP waarde</p>
                <p className="text-muted-foreground">5.1 (uitstekend)</p>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="benefits" className="mt-4">
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-0.5">✓</span>
                <span>Tot 50% energiebesparing ten opzichte van traditionele verwarming</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-0.5">✓</span>
                <span>Fluisterstille werking voor optimaal comfort</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-0.5">✓</span>
                <span>Geavanceerde luchtfiltering voor een gezond binnenklimaat</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-0.5">✓</span>
                <span>Smart home integratie voor maximaal gebruiksgemak</span>
              </li>
            </ul>
          </TabsContent>
          
          <TabsContent value="warranty" className="mt-4">
            <div className="space-y-3 text-sm">
              <p>
                <strong>Fabrieksgarantie:</strong> 5 jaar op onderdelen
              </p>
              <p>
                <strong>Compressor garantie:</strong> 7 jaar
              </p>
              <p>
                <strong>Installatiegarantie:</strong> 2 jaar volledig
              </p>
              <p className="text-muted-foreground">
                Garantie is inclusief jaarlijks onderhoud door onze monteurs.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}