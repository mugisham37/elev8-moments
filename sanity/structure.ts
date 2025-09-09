import type { StructureResolver } from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.documentTypeListItem('homePage').title('Home Page'),
      S.documentTypeListItem('aboutPage').title('About Page'),
      S.documentTypeListItem('author').title('Authors'),
      S.documentTypeListItem('blockContent').title('Block Content'),
      S.documentTypeListItem('brand').title('Brands'),
      S.documentTypeListItem('category').title('Categories'),
      S.documentTypeListItem('post').title('Posts'),
      S.documentTypeListItem('service').title('Services'),
      S.documentTypeListItem('testimonial').title('Testimonials'),
      S.documentTypeListItem('teamMember').title('Team Members'),

      // Optional: include all other types automatically
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) =>
          ![
            'homePage',
            'aboutPage',
            'author',
            'blockContent',
            'brand',
            'category',
            'post',
            'service',
            'testimonial',
            'teamMember',
          ].includes(item.getId()!)
      ),
    ])
