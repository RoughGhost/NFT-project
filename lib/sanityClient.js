import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'zoq60b0h',
  dataset: 'production',
  apiVersion: '2021-03-25',
  token:
    'skX08bPcFtYawHctu8byXYinl8J8bNDuHfrZdHGrCDi53mKk7cJGdwFLsedW0t7ZL5gHhia1zvXLXEC8j1CUnPiPz56Em8rmcZEOm1jLXOE7qQBB5WOwWvfmq4mZWaFGdwcZiMbmkUAAX8TWarS8sf1w1H8Z8ZqTO19b0KnvQhk7S7IWOymM',
  useCdn: false,
})
