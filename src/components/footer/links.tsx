import { CiLocationOn, CiMail, CiPhone } from 'react-icons/ci'

export interface col_items {
  icons?: React.ReactNode
  title: string
  url: string
}

export interface links {
  title: string
  links: Array<col_items>
}

export const cols: Array<links> = [
  {
    title: 'About',
    links: [
      {
        title: 'Team',
        url: '/about',
      },
      {
        title: 'Project',
        url: '/projects',
      },
    ],
  },

  {
    title: 'Services',
    links: [
      {
        title: 'Design',
        url: '/design',
      },
      {
        title: 'Project Management',
        url: '/projectmanagement',
      },
      {
        title: 'Engineering',
        url: '/engineering',
      },
    ],
  },
  
  {
    title: 'Services',
    links: [
      {
        title: 'Design',
        url: '/design',
      },
      {
        title: 'Project Management',
        url: '/projectmanagement',
      },
      {
        title: 'Engineering',
        url: '/engineering',
      },
    ],
  },

  {
    title: 'Contacts',
    links: [
      {
        icons: <CiLocationOn size={22} />,
        title: '22 Sin Ming Lane #06-76 Midview City Singapore (573969)',
        url: 'https://www.google.com/maps/place/VOFFICE+SERVICES+PTE+LTD/@1.3584939,103.833422,17z/data=!3m2!4b1!5s0x31da1123e1841947:0x9a94f9fba4a3dcac!4m6!3m5!1s0x31da1725f6ca4f35:0xec3df2f14f962668!8m2!3d1.3584939!4d103.833422!16s%2Fg%2F11b6c62myg?entry=ttu',
      },
      {
        icons: <CiMail size={22} />,
        title: 'admin@apollocode.io',
        url: 'mailto:admin@apollocode.io',
      },
      {
        icons: <CiPhone size={22} />,
        title: '+65 8183 1873',
        url: 'tel:+6581831873',
      },
    ],
  },
]
