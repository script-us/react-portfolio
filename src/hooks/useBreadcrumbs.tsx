import { useMemo } from 'react'
import { useRouter } from 'next/router'
import { BreadCrumbMenuItem } from '@/components/shared/breadcrumb'

function useBreadCrumbs(menus: Array<BreadCrumbMenuItem>, overwriteMenuContent: Array<BreadCrumbMenuItem> = []) {
  const { route } = useRouter()

  const breadcrumbMenus = useMemo(() => {
    let result: Array<BreadCrumbMenuItem> = []
    const menuIndex = menus.findIndex((menu) => menu.link === route)
    if (menuIndex > -1) {
      result = menus.slice(0, menuIndex + 1)
      if (overwriteMenuContent) {
        const menusByRoute = overwriteMenuContent.reduce(
          (obj: Record<string, BreadCrumbMenuItem>, item: BreadCrumbMenuItem) => {
            obj[item.link] = item
            return obj
          },
          {},
        )

        return result.map((menuItem) => ({
          ...menuItem,
          ...(menusByRoute[menuItem.link] || {}),
        }))
      }
    }

    return result
  }, [menus, overwriteMenuContent, route])

  return breadcrumbMenus
}

export default useBreadCrumbs
