/* eslint-disable no-irregular-whitespace */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { LOCALE } from 'lang/locales'

export const home_page: { [key in LOCALE]?: { [key in string]: string } } = {
  [LOCALE.LOGIN_AS_GUEST]: {
    en: 'Login as guest',
    ru: 'Войти как гость',
    cz: 'Přihlaste se jako host',
    pl: 'Zaloguj się jako gość',
  },
  [LOCALE.SELECT_REGION]: {
    en: 'Select region',
    ru: 'Выбрать регион',
    cz: 'Vybrat region ',
    pl: 'Wybierz region',
  },
  [LOCALE.SERVER]: {
    en: 'Server',
    ru: 'Сервер',
    pl: 'Serwer',
  },
  [LOCALE.PING]: {
    en: 'Ping',
    ru: 'Пинг',
    pl: 'Ping',
  },
  [LOCALE.DISCORD]: {
    en: 'Discord',
    ru: 'Discord',
    pl: 'Discord',
  },
  [LOCALE.TERMS_OF_SERVICES]: {
    en: 'Terms of service',
    ru: 'Условия использования',
    cz: 'Podmínky služby',
    pl: 'Warunki korzystania z usług',
  },
  [LOCALE.PRIVACY_POLICY]: {
    en: 'Privacy policy',
    ru: 'Политика конфиденциальности',
    cz: 'Zásady ochrany',
    pl: 'Polityka prywatności',
  },
  [LOCALE.PARTNERS]: {
    en: 'Partners',
    ru: 'Партнёры',
    cz: 'Partneři',
    pl: 'Partnerzy',
  },
  [LOCALE.SOCIAL]: {
    en: 'Social',
    ru: 'Социальные сети',
    pl: 'Media społecznościowe',
  },
  [LOCALE.INFORMATIONS]: {
    en: 'Informations',
    ru: 'Информация',
    cz: 'Informace',
    pl: 'Informacje',
  },
  [LOCALE.LOGIN_AS]: {
    en: 'Login as',
    ru: 'Войти как',
    cz: 'Přihlásit se jako',
    pl: 'Zaloguj się jako',
  },
  [LOCALE.RENAME_ERROR_ALREADY_EXISTS]: {
    en: 'This name already exists!',
    ru: 'Это имя уже занято!',
    cz: 'Toto jméno již existuje!',
    pl: 'Ta nazwa jest już zajęta!',
  },
  [LOCALE.RENAME_ERROR_INCORRECT_NAME]: {
    en: 'This name contains forbidden letters or is too short!',
    ru: 'Выбранное имя содержит запрещённые символы или слишком коротко!',
    cz: 'Toto jméno obsahuje zakázaná písmena!',
    pl: 'Ta nazwa zawiera zakazane znaki lub jest zbyt krótka!',
  },
  [LOCALE.RENAME_ERROR_NO_CONNECTION]: {
    en: "Can't connect with server",
    ru: 'Нет соединения с сервером',
    pl: 'Brak połączenia z serwerem',
  },
  [LOCALE.LOADING]: {
    en: 'Loading...',
    ru: 'Загрузка...',
    cz: 'Načítá se...',
    pl: 'Ładowanie...',
  },
  [LOCALE.CONGRATULATION]: {
    en: 'Congratulations',
    ru: 'Поздравляем',
    cz: 'Gratuluji',
    pl: 'Gratulacje!',
  },
  [LOCALE.PLAY_PAGE_RANKED_DESCRIPTION]: {
    en: ' - Reward: experience, coins and ELO\n - <b>+20% experience and coins</b>\n - Rank based matchmaking\n - 2 vs 2 only',
    ru: ' - Награды: опыт, монеты и Очки рейтинга\n - <b>+20% к получаемому опыту и монетам</b>\n - Подбор на основе ранга\n - Только 2 vs 2',
    cz: ' - Odměna: zkušenosti, mince a ELO\n - <b>+20% více zkušeností a mincí</b>\n - Dohazování na základě hodnocení\n - Pouze 2 vs 2',
    en: ' - Nagrody: doświadczenie, monety oraz ELO\n - <b>+20% doświadczenia i monet</b>\n - Pojedynki z systemem rang\n - tylko 2 vs 2',
  },
  [LOCALE.PLAY_PAGE_UNRANKED_DESCRIPTION]: {
    en: ' - Reward: experience and coins\n - 1 vs 1 and 2 vs 2',
    ru: ' - Награды: опыт и монеты\n - 1vs1 и 2vs2',
    cz: ' - Odměna: zkušenosti a mince\n - 1 vs 1 a 2 vs 2',
    en: ' - Nagrody: doświadczenie i monety\n - 1 vs 1 oraz 2 vs 2',
  },
  [LOCALE.PLAY_PAGE_2VAI_DESCRIPTION]: {
    en: ' - Reward: experience and coins\n - 2 Players vs 2 Hard AI\n - 75% less experience and coins',
    ru: ' - Награды: опыт и монеты\n - 2 игрока против 2 Сложных ботов\n - На 75% меньше получаемого опыта и монет',
    cz: ' - Odměna: zkušenosti a mince\n - 2 hráči vs 2 tvrdá umělá inteligence\n - o 75 % méně zkušeností a mincí',
    pl: ' - Nagrody: doświadczenie i monety\n - 2 Graczy vs 2 Trudne Boty\n - 75% mniej doświadczenia i monet',
  },
}
