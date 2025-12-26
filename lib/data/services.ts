import { Gift, Sparkles } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export interface Service {
  id: string
  slug: string
  name: string
  description: string
  duration: string
  price: string
  image: string
  imageAlt: string
  icon: LucideIcon
  benefits?: string[]
  featured?: boolean
  // Full treatment details for dedicated pages
  shortDescription?: string
  fullDescription?: string
  idealFor?: string[]
}

/**
 * All services offered by the practice
 * Update this array to add/modify services shown throughout the site
 */
export const services: Service[] = [
  {
    id: 'nice-list-check',
    slug: 'initial-consultation',
    name: 'Nice List Check & Gift Planning',
    description:
      'Comprehensive first visit to Santa\'s Workshop including behavior review, wish list evaluation, and personalized gift plan development to ensure the perfect Christmas morning surprise.',
    duration: '60 min',
    price: 'Free (For nice children!)',
    image: 'https://images.unsplash.com/photo-1512389142860-9c449e58a543?w=800&auto=format&fit=crop',
    imageAlt: 'Beautifully wrapped Christmas gifts under a decorated tree',
    icon: Gift,
    benefits: [
      'Complete nice list verification',
      'Wish list consultation',
      'Personalized gift planning',
      'Meet with Santa himself',
    ],
    featured: true,
    shortDescription:
      'Your journey to a magical Christmas begins with a visit to Santa',
    fullDescription:
      'During your initial consultation at Santa\'s Workshop, jolly old Saint Nick himself conducts a thorough review of your year\'s behavior, evaluates your wish list, and works with you to ensure the perfect gift selection.\n\nUsing our magical Nice List technology and centuries of gift-giving expertise, Santa identifies exactly what will bring you the most joy on Christmas morning. Mrs. Claus may also provide warm cookies and hot cocoa during your visit!',
    idealFor: [
      'All good children',
      'Christmas believers',
      'Holiday enthusiasts',
      'Gift wishers',
      'Cookie lovers',
      'Spreading Christmas cheer',
    ],
  },
  {
    id: 'elf-delivery',
    slug: 'follow-up-consultation',
    name: 'Elf Express Delivery Service',
    description:
      'Ongoing magical delivery appointments to ensure your gifts arrive on time, track reindeer routes, and provide festive updates throughout the Christmas season.',
    duration: '30 min',
    price: 'Free (Part of Christmas magic!)',
    image: 'https://images.unsplash.com/photo-1576919228236-a097c32a5cd4?w=800&auto=format&fit=crop',
    imageAlt: 'Festive Christmas delivery with wrapped presents and decorations',
    icon: Sparkles,
    benefits: [
      'Gift delivery tracking',
      'Reindeer route updates',
      'Festive progress reports',
      'Christmas countdown alerts',
    ],
    featured: true,
    shortDescription:
      'Ongoing magical updates to track your Christmas delivery',
    fullDescription:
      'Our Elf Express Delivery Service ensures you stay connected to the magic throughout the Christmas season. Each check-in includes updates on your gift preparation status, reindeer flight path tracking, and special messages from the elves working on your presents.\n\nSanta\'s head elf personally monitors your delivery schedule and provides regular updates on workshop progress. You\'ll receive notifications when your gifts are being wrapped, loaded onto the sleigh, and ready for Christmas Eve delivery!',
    idealFor: [
      'Excited children',
      'Christmas countdown',
      'Gift tracking enthusiasts',
      'Holiday anticipation',
      'Christmas magic believers',
    ],
  },
]

/**
 * Get all services
 */
export function getAllServices(): Service[] {
  return services
}

/**
 * Get featured services only
 */
export function getFeaturedServices(): Service[] {
  return services.filter((service) => service.featured)
}

/**
 * Get a single service by slug
 */
export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug)
}

/**
 * Get a single service by ID
 */
export function getServiceById(id: string): Service | undefined {
  return services.find((service) => service.id === id)
}
