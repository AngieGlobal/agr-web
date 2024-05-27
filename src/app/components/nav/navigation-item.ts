export interface NavigationItem extends BaseNavigation {
  hasChildren: boolean,
  children?:BaseNavigation[]
 }
 interface BaseNavigation {
  title: string,
  url?: string,
  isActive:boolean
 }

 export let structure: NavigationItem[] = [
  {
    title:'We Offer',
    isActive: false,
    hasChildren:true,
    children:[
      {
        title: 'Buy Home',
        isActive: false,
        url: '/offers/buy-home.html'
      },
      {
        title: 'Sell Home',
        isActive: false,
        url: '/offers/sell-home.html'
      },      {
        title: 'Property Management',
        isActive: false,
        url: '/offers/property-management.html'
      }
    ]
  },
  {
    title:'Mortgage',
    url:'/mortgage.html',
    hasChildren: false,
    isActive:false
  },
  {
    title:'Angie University',
    url:'/learning.html',
    hasChildren: false,
    isActive:false
  },
  {
    title:'About',
    url:'/about.html',
    hasChildren: false,
    isActive:false
  }
];
