import { t } from 'intlayer';

const tsContent = {
  profileText: t({
    en: 'Manage profile',
    fr: 'Gérer le profil',
    es: 'Administrar perfil',
  }),

  car: t({
    en: 'test',

    fr: 'test of new content',
    es: '',
  }),

  login: {
    text: t({
      en: 'Login',
      fr: 'Connexion',
      es: 'Iniciar sesión',
    }),
    textWithId: t({
      en: 'Login',
      fr: 'Connexion',
      es: 'Iniciar sesión',
    }),
    label: t({
      en: 'Login to app',
      fr: "Connexion à l'application",
      es: 'Iniciar sesión en la aplicación',
    }),
  },
};

export default tsContent;