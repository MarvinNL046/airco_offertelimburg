"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Product } from "@/lib/product-catalog"
import ProductDetailDialog from "./product-detail-dialog"
import { Zap, Phone } from "lucide-react"

interface ProductGalleryProps {
  products: Product[]
}

export default function ProductGallery({ products }: ProductGalleryProps) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.slice(0, 6).map((product) => (
          <Card 
            key={product.id} 
            className="hover-lift hover-glow cursor-pointer overflow-hidden"
            onClick={() => setSelectedProduct(product)}
          >
            <div className="relative h-48 bg-gradient-to-br from-gray-50 to-white">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain p-4"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              {product.energyLabel === "A+++" && (
                <Badge className="absolute top-2 right-2 bg-green-600">
                  A+++
                </Badge>
              )}
            </div>
            
            <CardHeader>
              <CardTitle className="text-lg line-clamp-1">{product.name}</CardTitle>
              <CardDescription className="flex items-center gap-4">
                <span className="flex items-center gap-1">
                  <Zap className="h-4 w-4" />
                  {product.capacity}
                </span>
                <span>{product.type}</span>
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <div className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  {product.features.slice(0, 2).map((feature, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex items-center justify-between pt-2 border-t">
                  <Button size="sm" variant="outline" className="w-full">
                    <Phone className="mr-2 h-3 w-3" />
                    Vraag prijs op
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {selectedProduct && (
        <ProductDetailDialog
          product={selectedProduct}
          isOpen={!!selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </>
  )
}