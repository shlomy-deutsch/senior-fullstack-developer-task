import store from "../store"

export function applyAuthGuards(router) {
  router.beforeEach((to, from, next) => {
    const isAuthenticated = store.getters.isAuthenticated

    if (to.meta.requiresAuth && !isAuthenticated) {
      return next("/")
    }

    if (to.meta.roles) {
      const userRoles = store.getters.roles
      const hasAccess = to.meta.roles.some(role =>
        userRoles.includes(role)
      )

      if (!hasAccess) {
        return next("/home")
      }
    }

    next()
  })
}
