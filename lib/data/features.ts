export interface FeatureBlock {
  id: string
  title: string
  description: string
  image: string
  imageAlt: string
  imagePosition: 'left' | 'right'
}

/**
 * Features section content
 * Highlighting key features, benefits, or unique aspects of the practice
 */
export const featureBlocks: FeatureBlock[] = [
  {
    id: 'feature-1',
    title: 'Magical Gift Crafting Workshop',
    description:
      'Our world-renowned elves combine centuries-old toy-making traditions with personalized gift creation designed to bring joy to every child. We focus on handcrafted quality and magical touches that make Christmas morning unforgettable.',
    image: 'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=800&auto=format&fit=crop',
    imageAlt: 'Christmas workshop with wrapped presents and festive decorations',
    imagePosition: 'right',
  },
  {
    id: 'feature-2',
    title: 'Reindeer-Powered Global Delivery',
    description:
      'Our fleet of magical reindeer, led by the famous Rudolph, ensures every gift arrives precisely on Christmas Eve. Our delivery techniques are continuously perfected to reach every corner of the world in a single night.',
    image: 'https://images.unsplash.com/photo-1482805061302-533822c84a85?w=800&auto=format&fit=crop',
    imageAlt: 'Cozy Christmas scene with decorations and festive atmosphere',
    imagePosition: 'left',
  },
  {
    id: 'feature-3',
    title: 'Personalized Nice List Management',
    description:
      'Every child receives a customized behavior tracking plan tailored to their unique personality and growth. We take the time to understand each child\'s year and create a fair assessment to determine their Christmas gift eligibility.',
    image: 'https://images.unsplash.com/photo-1512909006721-3d6018887383?w=800&auto=format&fit=crop',
    imageAlt: 'Santa checking his nice list with Christmas decorations',
    imagePosition: 'right',
  },
]
