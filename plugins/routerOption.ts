import { Context } from '@nuxt/types'

export default ({ app, store }: Context) => {
  app.router!.afterEach((to) => {
    const path = to.path
    // ユーザーのマイページに未ログイン状態でアクセスしようとした場合、
    // ユーザーのログインページにリダイレクト
    if (path.startsWith('/index')) {
      const isLoggedIn = store.getters['user/isLoggedIn']
      if (!isLoggedIn) app.router!.push('/signin')
    }
  })
}
