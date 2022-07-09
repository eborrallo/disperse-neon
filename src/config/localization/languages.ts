import { Language } from 'uikit'

export const EN: Language = { locale: 'en-US', language: 'English', code: 'en' }
export const ESES: Language = { locale: 'es-ES', language: 'Español', code: 'es' }
export const PTBR: Language = { locale: 'pt-BR', language: 'Portugues', code: 'pt' }

export const languages = {
  'en-US': EN,
  'es-ES': ESES,
  'pt-BR': PTBR,
}

export const languageList = Object.values(languages)
