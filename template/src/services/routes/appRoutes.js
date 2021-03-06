import FrontDesk from '../../scenes/Entity/EntityList'

export const paths = {
  entity: '/entity/list'
}

const getAppRoutes = (securityManager) => {
  const routes = []

  if (securityManager.canSeeEntity()) { routes.push({ path: paths.entity, component: FrontDesk }) }

  return routes
}

export default getAppRoutes
