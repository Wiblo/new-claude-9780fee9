export interface FaqItem {
  id: string
  question: string
  answer: string
}

/**
 * Frequently Asked Questions
 * Update this array to modify FAQs shown on the site
 */
export const faqs: FaqItem[] = [
  {
    id: 'first-visit',
    question: 'What should I expect on my first visit to Santa\'s Workshop?',
    answer:
      "Your initial consultation includes a thorough Nice List review and wish list evaluation to determine if you've been good enough for presents this year. We'll discuss your Christmas wishes and create a personalized gift plan. The first visit typically lasts 60 minutes and includes meeting Santa himself, warm cookies from Mrs. Claus, and a tour of the workshop!",
  },
  {
    id: 'nice-list',
    question: 'How does Santa keep track of who\'s naughty or nice?',
    answer:
      'Santa uses his magical Nice List technology combined with centuries of experience. His network of Christmas elves reports back throughout the year, and Santa personally reviews each child\'s behavior before making his final decision. The magic helps him see good deeds even when nobody else is watching!',
  },
  {
    id: 'reindeer-delivery',
    question: 'How do the reindeer fly and deliver everything in one night?',
    answer:
      "The reindeer are powered by pure Christmas magic! Rudolph's red nose lights the way, and together they can travel faster than the speed of light. Santa's magic sleigh has special time-bending abilities that allow him to visit every good child around the world on Christmas Eve.",
  },
  {
    id: 'gift-timeline',
    question: 'When will I receive my Christmas gifts?',
    answer:
      "All gifts are delivered on Christmas Eve while you're sleeping! After your initial Nice List consultation, the elves begin crafting your presents in the workshop. Gifts are loaded onto Santa's sleigh on Christmas Eve, and he delivers them that very night. You'll find them under your tree on Christmas morning!",
  },
  {
    id: 'cookies-milk',
    question: 'Does Santa really eat all the cookies left out for him?',
    answer:
      'Yes! Santa absolutely loves cookies and milk. Mrs. Claus packs him snacks for the journey, but he makes sure to enjoy the treats left by each family. His favorites are chocolate chip cookies and sugar cookies, but he appreciates all homemade goodies. The magic keeps him from getting too full!',
  },
  {
    id: 'elves-help',
    question: 'Can I meet the elves who make the toys?',
    answer:
      'Absolutely! During your workshop tour, you\'ll meet our talented elves who craft all the presents. They love showing children how toys are made using both traditional techniques and a touch of Christmas magic. Each elf specializes in different types of gifts - from dolls to trains to modern electronics!',
  },
  {
    id: 'visit-santa',
    question: 'How do I schedule a visit with Santa?',
    answer:
      'You can schedule your Nice List consultation through our magical booking portal at northpole.christmas/nice-list, send a letter to Santa at the North Pole, or call (555) HO-HO-HO. We offer appointments throughout the holiday season, with extended hours during December to accommodate all the excited children!',
  },
  {
    id: 'what-to-bring',
    question: 'What should I bring to my visit?',
    answer:
      'Bring your Christmas spirit and your wish list! Dress warmly as the North Pole can be chilly, though our workshop is heated and cozy. Feel free to bring your parents, siblings, and even pets - Santa loves meeting the whole family. Don\'t forget to smile for photos with Santa!',
  },
]

/**
 * Get all FAQs
 */
export function getAllFaqs(): FaqItem[] {
  return faqs
}

/**
 * Get a single FAQ by ID
 */
export function getFaqById(id: string): FaqItem | undefined {
  return faqs.find((faq) => faq.id === id)
}
