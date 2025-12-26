export interface AboutPreview {
  title: string
  description: string
  image: string
  imageAlt: string
}

export interface AboutFull {
  title: string
  paragraphs: string[]
  image: string
  imageAlt: string
}

/**
 * About section preview for homepage
 * Brief introduction with link to full about page
 */
export const aboutPreview: AboutPreview = {
  title: 'About Santa\'s Workshop',
  description:
    "Santa Claus is a dedicated gift-giver committed to helping children around the world experience the magic of Christmas. With over 1,700 years of experience spreading joy and cheer, he provides personalized, heartwarming presents to good children of all ages. Mrs. Claus, the elves, and the reindeer work tirelessly year-round to make Christmas dreams come true.",
  image: 'https://images.unsplash.com/photo-1564694983797-7b67b20a3505?w=800&auto=format&fit=crop',
  imageAlt: 'Santa Claus in his traditional red suit at the North Pole workshop',
}

/**
 * Full about content for dedicated about page
 * Comprehensive information about the practice
 */
export const aboutFull: AboutFull = {
  title: 'About Santa Claus & The North Pole Workshop',
  paragraphs: [
    "Santa Claus is the world's most beloved gift-giver, dedicated to spreading Christmas magic and joy to children everywhere. With over 1,700 years of experience bringing smiles to children's faces, Santa has perfected the art of gift-giving, wish fulfillment, and spreading holiday cheer across the globe.",
    'Specializing in magical toy creation and reindeer-powered delivery, Santa combines centuries-old Christmas traditions with a jolly, compassionate approach to ensure every good child receives exactly what they wish for. Working alongside Mrs. Claus and his team of talented elves, Santa oversees every aspect of Christmas preparation from his workshop at the North Pole.',
    'At Santa\'s Workshop & Wellness, every child receives personalized attention and a customized gift plan designed to bring maximum joy on Christmas morning. The elves work year-round crafting toys, while the reindeer train for their magical Christmas Eve flight around the world.',
  ],
  image: 'https://images.unsplash.com/photo-1564694983797-7b67b20a3505?w=800&auto=format&fit=crop',
  imageAlt: 'Santa Claus in his traditional red suit at the North Pole workshop',
}
