import { useTranslation } from 'react-i18next'

export default function Title({ set = 'Portfolio' }) {
  const { t } = useTranslation()
  document.title = `${t(set)} | ${t('Deri Kurniawan')}`
}
