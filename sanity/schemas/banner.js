export default {
  name: 'banner',
  title: 'Banner',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'array',
      of: [{type: 'image'}],
      options: {
        hotspot: true,
      },
    },
    {
      name: 'buttontext',
      title: 'ButtonText',
      type: 'string',
    },
    {
      name: 'product',
      title: 'Product',
      type: 'string',
    },
    {
      name: 'disc',
      title: 'Disc',
      type: 'string',
    },
    {
      name: 'smalltext',
      title: 'SmallText',
      type: 'string',
    },
    {
      name: 'midtext',
      title: 'MidText',
      type: 'string',
    },
    {
      name: 'largetext1',
      title: 'LargeText1',
      type: 'string',
    },
    {
      name: 'largetext2',
      title: 'LargeText2',
      type: 'string',
    },
    {
      name: 'discount',
      title: 'Discount',
      type: 'string',
    },
    {
      name: 'salestime',
      title: 'SalesTime',
      type: 'string',
    },
  ],
}
