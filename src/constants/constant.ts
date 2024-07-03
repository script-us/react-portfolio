export const sidebarMenu = [
  {
    category: 'Menu',
    optionList: [
      {
        label: 'Dashboard',
        url: '/dashboard',
        icon: 'DashboardIcon',
        subs: [{ label: 'ECommerce', url: '/dashboard/e-commerce' }],
      },
      {
        label: 'Calender',
        url: '/calender',
        icon: 'CalenderIcon',
      },
      {
        label: 'Profile',
        url: '/profile',
        icon: 'ProfileIcon',
      },
      {
        label: 'Forms',
        url: '/forms',
        icon: 'FormsIcon',
        subs: [
          { label: 'Form Elements', url: '/forms/form-elements' },
          { label: 'Form Layout', url: '/forms/form-layout' },
        ],
      },
      {
        label: 'Tables',
        url: '/tables',
        icon: 'TableIcon',
      },
      {
        label: 'Settings',
        url: '/settings',
        icon: 'SettingsIcon',
      },
    ],
  },
  {
    category: 'Others',
    optionList: [
      {
        label: 'Chart',
        url: '/chart',
        icon: 'ChartIcon',
      },
      {
        label: 'UI Elements',
        url: '/ui',
        icon: 'UiElementIcon',
        subs: [
          { label: 'Alerts', url: '/ui/alerts' },
          { label: 'Avatars', url: '/ui/avatars' },
          { label: 'Badges', url: '/ui/badges' },
          { label: 'Buttons', url: '/ui/buttons' },
          { label: 'Chips', url: '/ui/chips' },
          { label: 'TextFields', url: '/ui/textFields' },
          { label: 'Tooltips', url: '/ui/tooltips' },
          { label: 'ButtonGroups', url: '/ui/buttonGroups' },
          { label: 'Modals', url: '/ui/modals' },
          { label: 'Loader', url: '/ui/loader' },
          { label: 'Typographies', url: '/ui/typographies' },
          { label: 'Selects', url: '/ui/selects' },
          { label: 'Accordions', url: '/ui/accordions' },
          { label: 'Switches', url: '/ui/switches' },
          { label: 'Checkboxes', url: '/ui/checkboxes' },
          { label: 'AutoCompletes', url: '/ui/autocompletes' },
          { label: 'Tabs', url: '/ui/tabs' },
          { label: 'TextAreas', url: '/ui/textareas' },
          { label: 'Breadcrumbs', url: '/ui/breadcrumbs' },
          { label: 'paginations', url: '/ui/paginations' },
        ],
      },
      {
        label: 'Redux',
        url: '/redux',
        icon: 'IconRedux',
      },
      {
        label: 'React-query',
        url: '/react-query',
        icon: 'IconReactQuery',
      },
    ],
  },
]

export const ELEMENT_BREADCRUMB_LIST = [
  { label: 'uiElement', link: '/' },
  { label: 'Breadcrumbs', link: '/ui/breadcrumbs' },
]

export const ELEMENT_BREADCRUMB_LIST1 = [
  { label: 'uiElement', link: '/', icon: 'SettingsIcon' },
  { label: 'Breadcrumbs', link: '/ui/breadcrumbs', icon: 'ProfileIcon' },
]
