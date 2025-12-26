export const businessInfo = {
  // Core business details
  name: "Santa's Workshop & Wellness",
  tagline: "Spreading Christmas joy and festive cheer in the North Pole",
  logo: "/logo.png",

  // Contact information
  phone: "(555) HO-HO-HO",
  phoneSecondary: "(555) MERRY-XMS", // Optional second phone number
  email: "santa@northpole.christmas",

  // Location
  address: {
    street: "1 Candy Cane Lane",
    area: "Workshop District", // Optional (e.g., "Building Name" or "Suite 100")
    city: "North Pole",
    state: "Arctic",
    zip: "99705",
    country: "North Pole",
  },

  // Optional: Coordinates for map and LocalBusiness schema
  geo: {
    latitude: 89.9950,
    longitude: -135.0000,
  },

  // Business hours
  hours: {
    monday: "8:00am - Midnight",
    tuesday: "8:00am - Midnight",
    wednesday: "8:00am - Midnight",
    thursday: "8:00am - Midnight",
    friday: "8:00am - Midnight",
    saturday: "24 Hours (Christmas Rush!)",
    sunday: "24 Hours (Christmas Rush!)",
  },

  // Social media profiles
  social: {
    facebook: "https://facebook.com/yourpage",
    instagram: "https://instagram.com/yourpage",
    whatsapp: "https://wa.me/1234567890", // WhatsApp link with number
    // twitter: "https://twitter.com/yourpage",
    // linkedin: "https://linkedin.com/company/yourpage",
  },

  // Site metadata
  url: "https://northpole.christmas",
  description: "Dedicated to spreading Christmas magic, delivering presents, and bringing joy to children around the world. Home of Santa Claus, Mrs. Claus, and the hardworking elves.",
  priceRange: "Free (Gifts for good children!)", // $, $$, $$$, or $$$$

  // Schema.org types for JSON-LD structured data
  // Customize based on your business type. Common combinations:
  // - Chiropractor: ['LocalBusiness', 'MedicalBusiness', 'HealthAndBeautyBusiness']
  // - Physical Therapist: ['LocalBusiness', 'MedicalBusiness', 'HealthAndBeautyBusiness']
  // - Massage Spa: ['LocalBusiness', 'HealthAndBeautyBusiness', 'DaySpa']
  // - General Wellness: ['LocalBusiness', 'HealthAndBeautyBusiness']
  // - Acupuncture: ['LocalBusiness', 'MedicalBusiness', 'HealthAndBeautyBusiness']
  schemaTypes: ['LocalBusiness', 'MedicalBusiness', 'HealthAndBeautyBusiness'] as const,

  // Booking/appointment URL
  bookingUrl: "https://northpole.christmas/nice-list",

  // Google Maps configuration
  maps: {
    apiKey: "AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8",
    // Location name for Google Maps searches
    locationName: "Santa's Workshop & Wellness",
  },
}

// Helper function to get formatted address for Google Maps
export function getGoogleMapsUrl() {
  const { street, city, state, zip } = businessInfo.address
  const query = encodeURIComponent(`${street}, ${city}, ${state} ${zip}`)
  return `https://maps.google.com/?q=${query}`
}

// Helper function to get tel: link
export function getPhoneLink(phoneNumber: string = businessInfo.phone) {
  return `tel:${phoneNumber.replace(/[^0-9+]/g, "")}`
}

// Helper function to get mailto: link
export function getEmailLink() {
  return `mailto:${businessInfo.email}`
}

// Helper function to get Google Maps embed URL
export function getGoogleMapsEmbedUrl() {
  const { street, city, state, zip } = businessInfo.address
  const { apiKey, locationName } = businessInfo.maps
  const query = encodeURIComponent(
    `${locationName},${street},${city},${state},${zip}`
  )
  return `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${query}&zoom=15`
}

// Helper function to get Google Maps directions URL
export function getGoogleMapsDirectionsUrl() {
  const { street, city, state, zip } = businessInfo.address
  const { locationName } = businessInfo.maps
  const destination = encodeURIComponent(
    `${locationName},${street},${city},${state},${zip}`
  )
  return `https://www.google.com/maps/dir/?api=1&destination=${destination}`
}
