import { SidebarLink } from '@/types';

export const sidebarLinks: SidebarLink[] = [
  {
    imgURL: '/icons/home.svg',
    route: '/',
    label: 'Home'
  },
  {
    imgURL: '/icons/menu.svg',
    route: '/community',
    label: 'Community'
  },
  {
    imgURL: '/icons/bulb.svg',
    route: '/memorize',
    label: 'Memorize'
  },
  {
    imgURL: '/icons/bookmark.svg',
    route: '/bookmark',
    label: 'Bookmarks'
  },
  {
    imgURL: '/icons/medicine.svg',
    route: '/ruqyah',
    label: 'Ruqyah'
  },
  {
    imgURL: '/icons/message.svg',
    route: '/dua-info',
    label: 'Dua Info'
  },
  {
    imgURL: '/icons/book.svg',
    route: '/book',
    label: 'Books'
  }
];
