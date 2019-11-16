export const firebase = {
  auth() {
    return {
      signInWithEmailAndPassword(email: string, password: string) {
        if (!email || !password) throw new Error('email and password required.')
      },
      signOut() {}
    }
  }
}
