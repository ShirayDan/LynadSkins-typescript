import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import Backend from 'i18next-http-backend'
import { initReactI18next } from 'react-i18next'

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: 'en',
    resources: {
      en: {
        translation: {
          settings: 'Settings',
          key: 'hello world',
          footer_advantages:
            'Buy, sell, and trade skins easier and faster. All deals are secured with the highest level protection methods.',
          footer_one_title: 'Company',
          footer_one_item_one: 'Prime',
          footer_one_item_two: 'Service',
          footer_one_item_three: 'Blog',
          footer_one_item_four: ' Contact',
          footer_two_title: 'Support',
          footer_two_item_one: 'Comunity',
          footer_two_item_two: 'Faqs',
          footer_two_item_three: 'Privacy Policy',
          footer_two_item_four: 'Resources',
          footer_three_title: 'Get in Touch',
          copyright: 'Copyright',
          sorting_newest: 'Newest',
          sorting_price_low: 'Price: Min',
          sorting_price_high: 'Price: Max',
          sorting_float_low: 'Float: Low',
          sorting_float_high: 'Float: Max',
          filters: 'Filters',
          reset: 'Reset',
          save: 'Save',
          price: 'Price',
          type: 'Type',
          exteriror: 'Exterior',
          colour: 'Colour',
          float: 'Float',
          rarity: 'Rarity',
          other: 'Other',
          factory_new: 'Factory New',
          minimal_wear: 'Minimal Wear',
          field_tested: 'Field-Tested',
          well_worn: 'Well-Worn',
          battle_scarred: 'Battle-Scarred',
          consumer_grade: 'Consumer Grade',
          industrial_grade: 'Industrial Grade',
          milSpec_grade: 'Mil-Spec Grade',
          restricted: 'Restricted',
          classified: 'Classified',
          covert: 'Covert',
          knives: 'Knives',
          gloves: 'Gloves',
          pistols: 'Pistols',
          smgs: 'SMGs',
          assault_rifles: 'Assault Rifles',
          sniper_rifles: 'Sniper Rifles',
          shotguns: 'Shotguns',
          machine_guns: 'Machine Guns',
          main_title: 'A better way to trade CS skins',
          advantage_one: 'Bonus for top up balance',
          advantage_two: 'CS items on our website',
          advantage_three: 'From logging in to making a purchase',
          advantage_four: 'Online support, response time less than 5 minutes',
          popular_items: 'Popular CS items',
          show_items: 'Show all items',
          header: {
            sign_in: 'Sign in',
            sign_up: 'Sign up',
            trade: 'Trade',
            market: 'Market',
            blog: 'Blog'
          },
          no_page: {
            page_not_found: 'Page not found',
            error_reload: 'Error 404. An incorrectly typed address or such a page on the site no longer exists.',
            move_trade: 'Move to Trade',
            move_market: 'Move to Market'
          },
          advantage_slider: {
            one: {
              title: 'Store',
              text: 'Our Store mode makes the items buying process easier and faster.',
              advantages: {
                one: 'Items with a 23% discount',
                two: 'Ability to buy without Steam Guard and with any Steam level'
              }
            },
            two: {
              title: 'Trade',
              text: 'Improved trade interface. Now faster and more user-friendly:',
              advantages: {
                one: 'Upgraded search filters',
                two: 'Cart interface added',
                three: 'More detailed skin cards'
              }
            },
            three: {
              title: 'Personal account',
              text: 'Added some more advantages like: ',
              advantages: {
                one: 'Easy access',
                two: 'Personalized experience'
              }
            },
            four: {
              title: 'Different statuses',
              text: 'Our shop has 3 statuses: ',
              advantages: {
                one: 'Basic',
                two: 'Prime',
                three: 'Trader +'
              }
            }
          },
          our_advantages: 'Our advantages',
          not_authorized: 'You`re not authorized',
          authorize: 'Sign in',
          prime_page: {
            title: 'Everything you need for a profitable trade',
            subtitle: 'Includes the newest trading tools and features',
            try_free: 'Try for Free',
            buy_now: 'Buy now',
            choose_plan: 'Choose plan',
            current_plan: 'Current plan',
            advantages: {
              one: {
                title: 'Increased deposit bonus',
                text: 'Get a 15% top up bonus'
              },
              two: {
                title: 'Trade commission only 4%',
                text: 'Only 4% trade commission'
              },
              three: {
                title: '31% discount in the Store',
                text: 'Additional 8% discount for buying all items in the Store'
              },
              four: {
                title: '3D Skin Viewer',
                text: 'No restrictions in using the 3D skin Viewer'
              },
              five: {
                title: 'Priority support',
                text: 'Instant solution of any issues'
              }
            },
            try_prime: {
              title: 'Try Prime mode for FREE',
              text: 'Get access to all features and discounts with a 5-day trial subscription! Please note that the subscription renews automatically.'
            },
            table: {
              one: {
                param_one: 'Buying, selling and trading items',
                param_two: '3D Skin Viewer',
                param_three: 'Personal account',
                param_four: 'Technical support',
                param_five: 'Top up bonus',
                param_six: 'Increased discount in Store mode',
                param_seven: 'Trade commission',
                param_eight: 'Sale commission',
                param_nine: 'Extended sell statistics',
                param_ten: 'Increased sell bonuses'
              },
              two: {
                title: 'Basic',
                text: 'For basic tasks like buying, selling, and trading items',
                param_one: '✓',
                param_two: 'Limited',
                param_three: 'Standart',
                param_four: 'Standart',
                param_five: '30-35%',
                param_six: '23%',
                param_seven: '7%',
                param_eight: '7%',
                param_nine: '',
                param_ten: 'No',
                price: 'Free'
              },
              three: {
                title: 'Prime',
                text: 'For advanced users. Includes extra features and bonuses',
                param_one: '✓',
                param_two: 'Full',
                param_three: 'Standart',
                param_four: 'Prime',
                param_five: '45%',
                param_six: '31%',
                param_seven: '7%',
                param_eight: '7%',
                param_nine: '',
                param_ten: 'No',
                price: '$ 8.99  / month'
              },
              four: {
                title: 'Trader +',
                text: 'For professional traders. Includes extended statistics and extra bonuses',
                param_one: '✓',
                param_two: 'Full',
                param_three: 'Extended',
                param_four: 'Prime',
                param_five: 'Soon',
                param_six: '31%',
                param_seven: 'Soon',
                param_eight: '✓',
                param_nine: '✓',
                param_ten: '✓',
                price: 'Coming soon'
              }
            }
          },
          personalPage: {
            personal_info: 'Personal Info',
            profile: 'Profile',
            profile_name: 'Profile name',
            commission: 'Commission:',
            registration: 'Registration:',
            trades: 'Trades:',
            subscription: 'Subscription',
            subscription_text:
              'You have no active subscriptions. You can learn more about the subscription in the Prime page.',
            subscription_short: 'Now you can try five days free period.',
            try_now: 'try now',
            general_info: 'General information',
            trade_link: 'Trade link:',
            apply: 'Apply',
            api_key: 'API-key:',
            seller_link: 'Seller link:',
            contact_info: 'Contact information',
            not_installed: 'Not installed',
            your_inventory: 'Your inventory',
            you_have_something: 'You have something to tell?',
            create_post: 'Create a post'
          },
          blog: {
            write_comment: 'Write a comment',
            comments: 'Comments',
            send: 'Send',
            download_preview: 'Download preview',
            enter_title: 'Enter title',
            enter_tags: 'Enter tags',
            enter_text: 'Enter text',
            save: 'Save',
            publish: 'Publish',
            cancel: 'Cancel',
            delete: 'Delete',
            not_found: 'No Blogs Found'
          },
          language_modal: {
            us: 'English',
            ua: 'Ukrainian'
          },
          currency: 'Currency',
          language: 'Language',
          personal_area: 'Personal area',
          support: 'Support',
          log_out: 'Log out',
          add_cart: 'Add to cart',
          cart_empty: 'Your cart is empty',
          add_cart_items: 'Add some items you want to purchase',
          buy: 'Buy',
          reset_cart: 'Reset cart',
          sale: 'Sale',
          remove_sale: 'Remove from market',
          reset_fav: 'Reset favorites',
          fav_empty: 'Your wishlist is empty',
          add_fav_items: 'Add some items to see them in wishlist',
          change: 'Change',
          your_offer: 'Your offer',
          your_will_get: 'You will get',
          you_want: 'You want'
        }
      },
      ua: {
        translation: {
          settings: 'Налаштування',
          key: 'Привіт',
          footer_advantages:
            'Купуйте, продавайте та обмінюйте скіни легше та швидше. Усі угоди забезпечені методами захисту найвищого рівня.',
          footer_one_title: 'Компанія',
          footer_one_item_one: 'Prime',
          footer_one_item_two: 'Сервіс',
          footer_one_item_three: 'Блог',
          footer_one_item_four: 'Контакти',
          footer_two_title: 'Підтримка',
          footer_two_item_one: 'Спільнота',
          footer_two_item_two: 'ЧАПи',
          footer_two_item_three: 'Політика приватності',
          footer_two_item_four: 'Ресурси',
          footer_three_title: 'Наші контакти',
          copyright: 'Авторське право',
          sorting_newest: 'Новинки',
          sorting_price_low: 'Ціна: мін',
          sorting_price_high: 'Ціна: макс',
          sorting_float_low: 'Якість: мін',
          sorting_float_high: 'Якість: макс',
          filters: 'Фільтри',
          reset: 'Очистити',
          save: 'Зберегти',
          price: 'Ціна',
          type: 'Тип',
          exteriror: 'Вигляд',
          colour: 'Колір',
          float: 'Якість',
          rarity: 'Рідкість',
          other: 'Інше',
          factory_new: 'Щойно з фабрики',
          minimal_wear: 'Майже без подряпин',
          field_tested: 'Після бойових випробувань',
          well_worn: 'З численними подряпинами',
          battle_scarred: 'Понівечено в боях',
          consumer_grade: 'Роздрібного ґатунку',
          industrial_grade: 'Промислового ґатунку',
          milSpec_grade: 'Армійського ґатунку',
          restricted: 'Зброя спецслужб',
          classified: 'Секретна зброя',
          covert: 'Надсекретна зброя',
          knives: 'Ножі',
          gloves: 'Рукавиці',
          pistols: 'Пістолети',
          smgs: 'Пістолети-кулемети',
          assault_rifles: 'Штурмові гвинтівки',
          sniper_rifles: 'Снайперські гвинтівки',
          shotguns: 'Дробовики',
          machine_guns: 'Кулемети',
          main_title: 'Найкращий шлях для обміну скінами в CS',
          advantage_one: 'Бонус за поповнення балансу',
          advantage_two: 'CS предметів на нашому сайті',
          advantage_three: 'Від реєстрації до покупки',
          advantage_four: 'Онлайн підтримка, час відповіді менше ніж 5 секунд',
          popular_items: 'Популярні CS предмети',
          show_items: 'Показати всі предмети',
          header: {
            sign_in: 'Увійти',
            sign_up: 'Зареєструватись',
            trade: 'Трейд',
            market: 'Маркет',
            blog: 'Блог'
          },
          no_page: {
            page_not_found: 'Сторінку не знайдено',
            error_reload: 'Помилка 404. Неправильно набрано адресу або такої сторінки на сайті більше не існує.',
            move_trade: 'Перейти до Трейду',
            move_market: 'Перейти до Маркету'
          },
          advantage_slider: {
            one: {
              title: 'Магазин',
              text: 'Наш режим магазину робить процес купівлі товарів простішим та швидшим',
              advantages: {
                one: 'Предмети зі знижкою до 23 відсотків',
                two: 'Можливість покупки без Steam Guard і з будь-яким рівнем Steam'
              }
            },
            two: {
              title: 'Торгівля',
              text: 'Покращений торговий інтерфейс. Тепер швидше та зручніше:',
              advantages: {
                one: 'Оновлені пошукові фільтри',
                two: 'Додано інтерфейс кошика',
                three: 'Детальніші картки скінів'
              }
            },
            three: {
              title: 'Персональний акаунт',
              text: 'Додано ще кілька переваг: ',
              advantages: {
                one: 'Легкий доступ',
                two: 'Персоналізований досвід'
              }
            },
            four: {
              title: 'Різні статуси',
              text: 'Наш магазин має 3 статуси: ',
              advantages: {
                one: 'Базовий',
                two: 'Прайм',
                three: 'Трейдер +'
              }
            }
          },
          our_advantages: 'Наші переваги',
          not_authorized: 'Ви не авторизовані',
          authorize: 'Увійти',

          prime_page: {
            title: 'Все необхідне для прибуткової торгівлі',
            subtitle: 'Включає найновіші торгові інструменти та функції',
            try_free: 'Спробуйте безкоштовно',
            buy_now: 'Купити зараз',
            choose_plan: 'Виберіть план',
            current_plan: 'Поточний план',
            advantages: {
              one: {
                title: 'Збільшений депозитний бонус',
                text: 'Отримайте 15% бонус на поповнення'
              },
              two: {
                title: 'Торгова комісія лише 4%',
                text: 'Торгова комісія лише 4%.'
              },
              three: {
                title: 'Знижка 31% в магазині',
                text: 'Додаткова знижка 8% на купівлю всіх товарів у магазині'
              },
              four: {
                title: 'Перегляд 3D скінів',
                text: 'Жодних обмежень у використанні програми 3D skin Viewer'
              },
              five: {
                title: 'Пріоритетна підтримка',
                text: 'Миттєве вирішення будь-яких питань'
              }
            },
            try_prime: {
              title: 'Спробуйте режим Prime БЕЗКОШТОВНО',
              text: 'Отримайте доступ до всіх функцій і знижок за допомогою 5-денної пробної підписки! Зверніть увагу, що підписка поновлюється автоматично.'
            },
            table: {
              one: {
                param_one: 'Купівля, продаж і торгівля товарами',
                param_two: '3D огляд скінів',
                param_three: 'Особистий рахунок',
                param_four: 'Технічна підтримка',
                param_five: 'Бонус поповнення',
                param_six: 'Підвищена знижка в режимі магазину',
                param_seven: 'Торгова комісія',
                param_eight: 'Комісія з продажу',
                param_nine: 'Розширена статистика продажів',
                param_ten: 'Збільшені бонуси за продаж'
              },
              two: {
                title: 'Базовий',
                text: 'Для базових завдань, таких як купівля, продаж і торгівля предметами',
                param_one: '✓',
                param_two: 'Обмежено',
                param_three: 'Стандарт',
                param_four: 'Стандарт',
                param_five: '30-35%',
                param_six: '23%',
                param_seven: '7%',
                param_eight: '7%',
                param_nine: '',
                param_ten: 'Ні',
                price: 'Безкоштовно'
              },
              three: {
                title: 'Прайм',
                text: 'Для досвідчених користувачів. Включає додаткові функції та бонуси',
                param_one: '✓',
                param_two: 'Повний',
                param_three: 'Стандарт',
                param_four: 'Прайм',
                param_five: '45%',
                param_six: '31%',
                param_seven: '7%',
                param_eight: '7%',
                param_nine: '',
                param_ten: 'Немає',
                price: '$ 8.99  / місяць'
              },
              four: {
                title: 'Трейдер +',
                text: 'Для професійних трейдерів. Включає розширену статистику та додаткові бонуси',
                param_one: '✓',
                param_two: 'Повний',
                param_three: 'Розширений',
                param_four: 'Прайм',
                param_five: 'Скоро',
                param_six: '31%',
                param_seven: 'Скоро',
                param_eight: '✓',
                param_nine: '✓',
                param_ten: '✓',
                price: 'Незабаром'
              }
            }
          },
          personalPage: {
            personal_info: 'Персональна інформація',
            profile: 'Профіль',
            profile_name: "Ім'я профілю",
            commission: 'Комісія:',
            registration: 'Реєстрація:',
            trades: 'Трейди:',
            subscription: 'Підписка',
            subscription_text:
              'У вас немає активних підписок. Ви можете дізнатися більше про підписки на Prime сторінці',
            subscription_short: 'Зараз ви можете спробувати 5 днів безкоштовного періоду',
            try_now: 'Спробувати зараз',
            general_info: 'Загальна інформація',
            trade_link: 'Посилання на трейд:',
            apply: 'Застосувати',
            api_key: 'API-ключ:',
            seller_link: 'Посилання продавця:',
            contact_info: 'Контактна інформація',
            not_installed: 'Не встановлено',
            your_inventory: 'Ваш інвентар',
            you_have_something: 'У Вас є що сказати?',
            create_post: 'Створити пост'
          },
          blog: {
            write_comment: 'Write a comment',
            comments: 'Коментарі',
            send: 'Відправити',
            download_preview: 'Завантажити фото',
            enter_title: 'Введіть заголовок',
            enter_tags: 'Введіть теги',
            enter_text: 'Введіть текст',
            save: 'Зберегти',
            publish: 'Публікувати',
            cancel: 'Скасувати',
            delete: 'Видалити',
            not_found: 'Блоги не знайдені'
          },
          language_modal: {
            us: 'Англійська',
            ua: 'Українська'
          },
          currency: 'Валюта',
          language: 'Мова',
          personal_area: 'Особистий кабінет',
          support: 'Підтримка',
          log_out: 'Вийти',
          add_cart: 'Додати до кошику',
          cart_empty: 'Ваш кошик пустий',
          add_cart_items: 'Додайте предмети, які бажаєте придбати',
          buy: 'Купити',
          reset_cart: 'Очистити корзину',
          sale: 'Продати',
          remove_sale: 'Прибрати з ринку',
          reset_fav: 'Очистити бажання',
          fav_empty: 'Ваш список бажань пустий',
          add_fav_items: 'Додайте декілька елементів, щоб побачити їх у списку',
          change: 'Обміняти',
          your_offer: 'Ваша пропозиція',
          your_will_get: 'Ви отримаєте',
          you_want: 'Ви хочете'
        }
      }
    }
  })

export default i18n
