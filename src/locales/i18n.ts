import i18n, { Resource } from "i18next";
import { initReactI18next } from "react-i18next";

export const resources: Resource = {
  ru: {
    translation: {
      inst: {
        nickname: "peach._tattoo",
        name: "Peach Tattoo",
      },
      text: {
        headIntro: "Ваш Тату-мастер в городе Кобург",
        slogan: "Проведу тебя в мир Тату",
      },
      buttons: {
        bookNow: "Записаться",
      },
      accordions: {
        accordion1: {
          title: "📩 Запись",
          content: `
Для записи, пожалуйста, укажите:
 • Ваше имя
 • Желаемый эскиз (можно скинуть пример или описать идею)
 • Часть тела, где хотите тату
 • Примерный размер (в сантиметрах)
 • Бюджет, если у вас есть лимит
 • Удобные даты — я подстроюсь под вас по возможности.

После получения этой информации я с вами свяжусь, и мы обсудим всё подробнее.`,
        },
        accordion2: {
          title: "⚠️ Важно: противопоказания и риски",
          content: `
Перед тату важно учитывать противопоказания. Я не рекомендую делать татуировку, если у вас:
 • простуда, вирусная инфекция, температура
 • кожные заболевания в месте будущей тату
 • проблемы со свертываемостью крови
 • беременность или грудное вскармливание
 • аллергия на пигменты, антисептики, обезболивающие
 • хронические заболевания в стадии обострения

Также стоит понимать, что возможны:
 • аллергическая реакция на краску (редко, но бывает)
 • индивидуальные особенности заживления
 • неравномерное заживление при неправильном уходе
 • обесцвечивание, если не соблюдать рекомендации по уходу`,
        },
        accordion3: {
          title: "💬 Консультация",
          content: `
Консультация нужна, чтобы:
 • определить оптимальное расположение тату
 • обсудить детали эскиза и подгонку под анатомию
 • рассказать, как будет проходить сеанс и заживление
 • развеять сомнения и ответить на все ваши вопросы

Консультация может быть онлайн или лично — по договорённости.`,
        },
        accordion4: {
          title: "💳 Предоплата",
          content: `
Предоплата — это гарантия вашего визита и моего времени.
После согласования даты я прошу внести предоплату в размере X € (укажешь свою сумму). Она входит в общую стоимость тату.
Если вы не пришли без предупреждения — предоплата не возвращается.
Если вы предупредили за минимум 2 дня — можно перенести дату один раз.`,
        },
        accordion5: {
          title: "🛠️ Коррекция",
          content: `
Коррекция проводится при необходимости, не всегда она требуется.
Важно: 80% успеха татуировки — это правильный уход!
Если вы нарушили рекомендации (царапали, не мазали, мочили, сдирали корочку и т.д.), тату может зажить неровно.
В таких случаях я делаю платную коррекцию по минимальному прайсу, так как это уже доработка.

Если всё зажило правильно и есть мелкие нюансы — я подкорректирую бесплатно, но не позже чем через 2 месяца после сеанса.`,
        },
        accordion6: {
          title: "🧼 Перед сеансом",
          content: `
Чтобы тату прошла максимально комфортно:
 • Выспитесь, хорошо покушайте (не на голодный желудок!)
 • Не употребляйте алкоголь, энергетики и препараты, разжижающие кровь (например, аспирин) за 24 часа
 • Не загорайте и не травмируйте кожу в зоне тату
 • Не планируйте баню, бассейн и спортзал на ближайшие дни после сеанса
 • Придите в удобной одежде, открывающей нужную зону
 • Возьмите с собой хорошее настроение и доверие ко мне 😊`,
        },
        accordion7: {
          title: "☀️ Татуировки летом",
          content: `
Летом делать тату можно, но важно понимать:
 • Кожа более подвержена воздействию солнца, пота и пыли, что может ухудшить заживление
 • Обязателен SPF 50+ после заживления татуировки — особенно в первые месяцы
 • Нельзя загорать, купаться в открытых водоёмах и бассейнах, пока тату полностью не заживёт
 • Жарко — потеем, одежда натирает — поэтому уход должен быть особенно тщательным

Если вы готовы соблюдать рекомендации — татуировка летом заживает не хуже, просто требует больше внимания.
`,
        },
        accordion8: {
          title: "🐣 Заживление",
          content: `
Заживление может проходить двумя способами — с плёнкой (Suprasorb или SecondSkin) или с пелёнками. Выбор зависит от тату и вашего типа кожи.

📦 С плёнкой:

День 1–3:
Плёнка остаётся на коже. Может выделяться сукровица, это нормально.

День 4–5:
Снимаем плёнку аккуратно под тёплой водой. Промываем тату антисептическим мылом, сушим, наносим тонкий слой заживляющего крема (например, TattooMed, Pegasus и т.д.).

День 6–14:
Продолжаем мазать 2–3 раза в день. Кожа может шелушиться и чесаться — это часть процесса. Не чешем, не сдираем!

После 2 недель:
Кожа может быть слегка тугой или бледной — цвет проявится полностью через 4–6 недель.

🍼 С пелёнками:

День 1 (сразу после сеанса):
Я закутываю тату пелёнкой, вы приходите домой и через 2–3 часа снимаете её. Промываете тату, наносите крем.

День 1–3:
Меняем пелёнку каждые 4–6 часов, каждый раз промывая тату и нанося свежий крем. Это важно!

День 4–10:
Пелёнка больше не нужна. Просто ухаживаем за тату — промываем 1–2 раза в день, мажем кремом.

Дальше:
Как и с плёнкой — шелушение, зуд, небольшое потемнение — норма. Цвет стабилизируется через месяц.`,
        },
      },
    },
  },
  en: {
    translation: {
      inst: {
        nickname: "peach._tattoo",
        name: "Peach Tattoo",
      },
      text: {
        headIntro: "Your tattoo master in the city of Coburg",
        slogan: "I will guide you into the world of tattoos",
      },
      buttons: {
        bookNow: "Book Now",
      },
      accordions: {
        accordion1: {
          title: "📩 Booking",
          content: `To book, please provide:
 • Your name
 • Desired sketch (you can send an example or describe your idea)
 • Body part where you want the tattoo
 • Approximate size (in centimeters)
 • Budget, if you have a limit
 • Convenient dates — I will try to adjust to you if possible.

After receiving this information, I will contact you and we will discuss everything in detail.`,
        },
        accordion2: {
          title: "⚠️ Important: contraindications and risks",
          content: `
Before getting a tattoo, it's important to consider contraindications. I do not recommend getting a tattoo if you have:
 • cold, viral infection, fever
 • skin diseases in the area of the future tattoo
 • blood clotting disorders
 • pregnancy or breastfeeding
 • allergy to pigments, antiseptics, anesthetics
 • chronic diseases in the acute stage

It's also important to understand that there may be:
 • allergic reactions to the ink (rare, but possible)
 • individual healing characteristics
 • uneven healing with improper care
 • discoloration if aftercare instructions are not followed`,
        },
        accordion3: {
          title: "💬 Consultation",
          content: `
Consultation is needed to:
 • determine the optimal placement of the tattoo
 • discuss the details of the sketch and adjust it to your anatomy
 • explain how the session and healing process will go
 • dispel doubts and answer all your questions

The consultation can be online or in person — as agreed.`,
        },
        accordion4: {
          title: "💳 Prepayment",
          content: `
Prepayment is a guarantee of your visit and my time.
After agreeing on the date, I ask you to make a prepayment of X € (you specify your amount). It is included in the total cost of the tattoo.
If you do not show up without warning — the prepayment is non-refundable.
If you notify at least 2 days in advance — you can reschedule once.`,
        },
        accordion5: {
          title: "🛠️ Correction",
          content: `
Correction is carried out if necessary, it is not always required.
Important: 80% of the success of the tattoo depends on proper care!
If you violate the recommendations (scratching, not applying ointment, wetting, peeling off the scab, etc.), the tattoo may heal unevenly.
In such cases, I make a paid correction at the minimum price, as this is already refinement.

If everything has healed properly and there are minor nuances — I will adjust it for free, but no later than 2 months after the session.`,
        },
        accordion6: {
          title: "🧼 Before the session",
          content: `
To make the tattooing process as comfortable as possible:
 • Get enough sleep and have a good meal (not on an empty stomach!)
 • Avoid alcohol, energy drinks, and blood-thinning medications (e.g., aspirin) for 24 hours
 • Do not sunbathe or injure the skin in the tattoo area
 • Avoid sauna, swimming pool, and gym for the next few days after the session
 • Wear comfortable clothing that exposes the required area
 • Bring a positive attitude and trust in me 😊`,
        },
        accordion7: {
          title: "☀️ Tattoos in summer",
          content: `
It is possible to get tattoos in summer, but it's important to understand:
 • The skin is more susceptible to the effects of the sun, sweat, and dust, which can worsen the healing process
 • SPF 50+ is mandatory after the tattoo has healed — especially in the first few months
 • No sunbathing, swimming in open water, and pools until the tattoo is fully healed
 • It's hot — we sweat, and clothes can rub — so care must be especially thorough

If you are ready to follow the recommendations — a tattoo in summer heals no worse, it just requires more attention.
`,
        },
        accordion8: {
          title: "🐣 Healing",
          content: `
Healing can occur in two ways — with film (Suprasorb or SecondSkin) or with diapers. The choice depends on the tattoo and your skin type.

📦 With film:

Day 1–3:
The film remains on the skin. Serum may be released, which is normal.

Day 4–5:
Carefully remove the film under warm water. Rinse the tattoo with antiseptic soap, dry, and apply a thin layer of healing cream (e.g., TattooMed, Pegasus, etc.).

Day 6–14:
Continue to apply 2–3 times a day. The skin may peel and itch — this is part of the process. Do not scratch or peel!

After 2 weeks:
The skin may be slightly tight or pale — the color will fully manifest in 4–6 weeks.

🍼 With diapers:

Day 1 (immediately after the session):
I wrap the tattoo with a diaper, you go home and remove it after 2–3 hours. Rinse the tattoo and apply cream.

Day 1–3:
Change the diaper every 4–6 hours, rinsing the tattoo and applying fresh cream each time. This is important!

Day 4–10:
The diaper is no longer needed. Just care for the tattoo — rinse 1–2 times a day, apply cream.

Later:
As with the film — peeling, itching, slight darkening — is normal. The color stabilizes after a month.`,
        },
      },
    },
  },
  de: {
    translation: {
      inst: {
        nickname: "peach._tattoo",
        name: "Peach Tattoo",
      },
      text: {
        headIntro: "Ihr Tätoowiererinnen in der Stadt Coburg",
        slogan: "Ich werde dich in die Welt der Tattoos führen",
      },
      buttons: {
        bookNow: "Jetzt buchen",
      },
      accordions: {
        accordion1: {
          title: "📩 Buchung",
          content: `Um einen Termin zu buchen, geben Sie bitte an:
 • Ihren Namen
 • Gewünschtes Motiv (Sie können ein Beispiel senden oder Ihre Idee beschreiben)
 • Körperstelle, an der Sie das Tattoo möchten
 • Ungefähre Größe (in Zentimetern)
 • Budget, falls Sie eine Grenze haben
 • Bequeme Termine — ich versuche, mich nach Ihnen zu richten, wenn möglich.

Nach Erhalt dieser Informationen melde ich mich bei Ihnen und wir besprechen alles im Detail.`,
        },
        accordion2: {
          title: "⚠️ Wichtig: Kontraindikationen и Risiken",
          content: `
Vor dem Tätowieren ist es wichtig, Kontraindikationen zu berücksichtigen. Ich empfehle nicht, sich tätowieren zu lassen, wenn Sie:
 • Erkältung, Virusinfektion, Fieber haben
 • Hauterkrankungen im Bereich des zukünftigen Tattoos имеют
 • Probleme mit der Blutgerinnung haben
 • Schwanger sind oder stillen
 • Allergien gegen Pigmente, Antiseptika, Betäubungsmittel haben
 • Chronische Krankheiten im akuten Stadium haben

Es ist auch wichtig zu verstehen, dass es zu folgenden Reaktionen kommen kann:
 • Allergische Reaktionen auf die Farbe (selten, aber möglich)
 • Individuelle Heilungsmerkmale
 • Ungleichmäßige Heilung bei unsachgemäßer Pflege
 • Verfärbung, wenn die Pflegehinweise nicht beachtet werden`,
        },
        accordion3: {
          title: "💬 Beratung",
          content: `
Die Beratung ist erforderlich, um:
 • Die optimale Platzierung des Tattoos zu bestimmen
 • Die Details des Entwurfs zu besprechen und ihn an Ihre Anatomie anzupassen
 • Zu erklären, wie die Sitzung und der Heilungsprozess ablaufen
 • Zweifel auszuräumen und alle Ihre Fragen zu beantworten

Die Beratung kann online oder persönlich erfolgen — nach Vereinbarung.`,
        },
        accordion4: {
          title: "💳 Vorauszahlung",
          content: `
Die Vorauszahlung ist eine Garantie für Ihren Besuch und meine Zeit.
Nach der Terminvereinbarung bitte ich Sie, eine Vorauszahlung von X € (Sie geben Ihren Betrag an) zu leisten. Sie ist im Gesamtpreis des Tattoos enthalten.
Wenn Sie ohne Vorankündigung nicht erscheinen, ist die Vorauszahlung nicht erstattbar.
Wenn Sie mindestens 2 Tage im Voraus informieren, können Sie den Termin einmal verschieben.`,
        },
        accordion5: {
          title: "🛠️ Korrektur",
          content: `
Die Korrektur erfolgt bei Bedarf, sie ist nicht immer erforderlich.
Wichtig: 80% des Erfolgs des Tattoos hängen von der richtigen Pflege ab!
Wenn Sie die Empfehlungen (Kratzern, Nichtauftragen von Salbe, Nassen, Abziehen der Kruste usw.) verletzen, kann das Tattoo ungleichmäßig heilen.
In solchen Fällen nehme ich eine kostenpflichtige Korrektur zum минимальном Preis vor, da dies bereits eine Nachbearbeitung ist.

Wenn alles richtig verheilt ist und es nur kleine Nuancen gibt, passe ich es kostenlos an, aber nicht später als 2 Monate nach der Sitzung.`,
        },
        accordion6: {
          title: "🧼 Vor der Sitzung",
          content: `
Um den Tätowierungsprozess so angenehm wie möglich zu gestalten:
 • Schlafen Sie ausreichend und essen Sie gut (nicht auf nüchternen Magen!)
 • Vermeiden Sie Alkohol, Energydrinks und blutverdünnende Medikamente (z.B. Aspirin) 24 Stunden vor der Sitzung
 • Sonnenbaden oder die Haut im Tätowierungsbereich verletzen Sie bitte nicht
 • Sauna, Schwimmbad und Fitnessstudio in den nächsten Tagen nach der Sitzung vermeiden
 • Tragen Sie bequeme Kleidung, die den benötigten Bereich freilegt
 • Bringen Sie eine positive Einstellung und Vertrauen in mich mit 😊`,
        },
        accordion7: {
          title: "☀️ Tätowierungen im Sommer",
          content: `
Es ist möglich, sich im Sommer tätowieren zu lassen, aber es ist wichtig zu beachten:
 • Die Haut ist empfindlicher gegenüber Sonnenlicht, Schweiß und Staub, was den Heilungsprozess beeinträchtigen kann
 • SPF 50+ ist nach der Heilung des Tattoos Pflicht — besonders in den ersten Monaten
 • Kein Sonnenbaden, Schwimmen in offenen Gewässern und Pools, bis das Tattoo vollständig verheilt ist
 • Es ist heiß — wir schwitzen, und Kleidung kann scheuern — daher muss die Pflege besonders gründlich sein

Wenn Sie bereit sind, die Empfehlungen zu befolgen, heilt ein Tattoo im Sommer nicht schlechter, es erfordert nur mehr Aufmerksamkeit.
`,
        },
        accordion8: {
          title: "🐣 Heilung",
          content: `
Die Heilung kann auf zwei Arten erfolgen — mit Folie (Suprasorb oder SecondSkin) oder mit Windeln. Die Wahl hängt vom Tattoo und Ihrem Hauttyp ab.

📦 Mit Folie:

Tag 1–3:
Die Folie bleibt auf der Haut. Es kann Serum austreten, was normal ist.

Tag 4–5:
Entfernen Sie die Folie vorsichtig unter warmem Wasser. Reinigen Sie das Tattoo mit antiseptischer Seife, trocknen Sie es und tragen Sie eine dünne Schicht heilender Creme auf (z.B. TattooMed, Pegasus usw.).

Tag 6–14:
Fahren Sie fort, 2–3 mal am Tag aufzutragen. Die Haut kann sich schälen und jucken — das ist Teil des Prozesses. Nicht kratzen oder abziehen!

Nach 2 Wochen:
Die Haut kann leicht straff oder blass sein — die Farbe zeigt sich vollständig nach 4–6 Wochen.

🍼 Mit Windeln:

Tag 1 (sofort nach der Sitzung):
Ich wickele das Tattoo in eine Windel, Sie gehen nach Hause und entfernen sie nach 2–3 Stunden. Reinigen Sie das Tattoo und tragen Sie die Creme auf.

Tag 1–3:
Wechseln Sie die Windel alle 4–6 Stunden, reinigen Sie das Tattoo und tragen Sie bei jedem Wechsel frische Creme auf. Das ist wichtig!

Tag 4–10:
Die Windel ist nicht mehr nötig. Pflegen Sie das Tattoo einfach — reinigen Sie es 1–2 mal am Tag, tragen Sie die Creme auf.

Später:
Wie bei der Folie — Schälungen, Juckreiz, leichte Verdunkelung — sind normal. Die Farbe stabilisiert sich nach einem Monat.`,
        },
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "de",
  fallbackLng: "de",
  interpolation: {
    escapeValue: false,
  },
});
