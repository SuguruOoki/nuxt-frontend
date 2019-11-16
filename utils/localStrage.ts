const currentPathKey = 'currentPath'

export function setCurrentPath(path: string) {
  localStorage.setItem(currentPathKey, path)
}

export function getCurrentPath() {
  return localStorage.getItem(currentPathKey)
}

export function removeCurrentPath() {
  localStorage.removeItem(currentPathKey)
}
