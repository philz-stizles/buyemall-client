export default [
  {
    id: 'mng',
    title: 'Applications',
    items: [
      { id: '/admin/dashboard', icon: 'las la-tachometer-alt', text: 'Dashboard' },
      { id: '/admin/categories', icon: 'las la-building', text: 'Categories' },
      { id: '/admin/subCategories', icon: 'las la-building', text: 'Sub categories' },
      {
        id: '/admin/products',
        icon: 'las la-building',
        text: 'Products',
        items: [
          {
            id: '/admin/products/create',
            icon: 'las la-building',
            text: 'New Product',
            parent: '/admin/products'
          },
          {
            id: '/admin/products/list',
            icon: 'las la-user-lock',
            text: 'Products List',
            parent: '/admin/products'
          }
        ]
      },
      { id: '/admin/orders', icon: 'las la-user-lock', text: 'Orders' },
      { id: '/admin/coupons', icon: 'las la-user-lock', text: 'Coupons' },
      { id: '/admin/customers', icon: 'las la-wrench', text: 'Customers' },
      { id: '/admin/users', icon: 'las la-wrench', text: 'Users' },
      { id: '/admin/reports', icon: 'las la-warehouse', text: 'Reports' },
      { id: '/admin/audit', icon: 'las la-wrench', text: 'Audit' }
    ]
  },
  {
    id: 'leave',
    title: 'Saved reports',
    items: [
      { id: 'r', icon: 'las la-question', text: 'Requests' },
      { id: 'l', icon: 'las la-sign-out-alt', text: 'Leave Policy' },
      { id: 'sd', icon: 'las la-calendar', text: 'Special Days' },
      { id: 'al', icon: 'las la-file-alt', text: 'Apply for Leave' }
    ]
  }
]
