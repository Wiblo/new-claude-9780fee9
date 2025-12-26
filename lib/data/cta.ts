export interface CTAContent {
  title: string
  description: string
  ctaText: string
  ctaUrl: string
  backgroundImage: string
  backgroundImageAlt: string
}

/**
 * CTA (Call-to-Action) section content
 * Update this to modify the CTA section shown on the homepage
 */
export const ctaContent: CTAContent = {
  title: 'Ready to Experience Christmas Magic?',
  description:
    'Join us at the North Pole for a magical experience tailored to bring joy to your heart. Santa Claus and his elves are ready to make your Christmas dreams come true!',
  ctaText: 'Get on the Nice List',
  ctaUrl: 'https://northpole.christmas/nice-list',
  backgroundImage: 'https://images.unsplash.com/photo-1543589077-47d81606c1bf?w=800&auto=format&fit=crop',
  backgroundImageAlt: 'Cozy Christmas fireplace with stockings and decorations',
}
