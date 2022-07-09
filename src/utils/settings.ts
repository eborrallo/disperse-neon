export interface UserSettings {
  currency: string
}

export const VERSION = 1.01

export const getDefaultSettings = (): UserSettings => ({
  currency: 'usd',
})

export const getStorageKey = (account: string) => {
  return `settings_${account}_${VERSION}`
}

export const getSettings = (account: string): UserSettings => {
  try {
    const settingsFromLs = localStorage.getItem(getStorageKey(account))
    return settingsFromLs ? JSON.parse(settingsFromLs) : getDefaultSettings()
  } catch (error) {
    return getDefaultSettings()
  }
}

export const setSettings = (account: string, newSettings: UserSettings) => {
  localStorage.setItem(getStorageKey(account), JSON.stringify(newSettings))
}

export const setSetting = (account: string, newSetting: Partial<UserSettings>) => {
  const currentSettings = getSettings(account)
  setSettings(account, { ...currentSettings, ...newSetting })
}
