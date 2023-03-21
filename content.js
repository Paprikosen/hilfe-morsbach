export const posts = [
    // Den Wohnsitz anmelden
  {
     topicGerman: "Den Wohnsitz anmelden",
     topicUkrainian: "Зареєструвати місце проживання",
     textGerman: "",
     textUkrainian: "",
     subtopics: [
         {
         topicGerman: "Ich wurde von der Gemeinde Morsbach untergebracht",
         topicUkrainian: "Мене розмістив муніципалітет Морсбаха",
         textGerman: `<p>
         Dann müssen Sie nichts tun. Wir melden Sie direkt bei uns an.
         <br><br> Wenn Sie eine Meldebescheinigung benötigen, bekommen Sie diese während der Öffnungszeiten im Bürgerbüro in der Gemeindeverwaltung Morsbach.
         </p>`,
         textUkrainian: `<p>
         Тоді вам не потрібно нічого робити. Ми зареєструємо вас безпосередньо у нас.
         <br><br>Якщо вам потрібне свідоцтво про реєстрацію, ви можете отримати його в робочий час в офісі для громадян у муніципальній адміністрації Морсбаха.
         </p>`
         },
         {
         topicGerman: "Ich bin privat untergekommen/ Ich habe eine Unterkunft gemietet",
         topicUkrainian: "Я маю власне житло / я орендую житло",
         textGerman: `<p>
         Bitte lassen Sie Ihren Vermieter die Wohnungsgeberbestätigung ausfüllen und unterschreiben.
          Bringen Sie dieses Dokument und Ihren Reisepass während der Öffnungszeiten in die Gemeindeverwaltung Morsbach.
           Im Bürgerbüro werden Sie angemeldet und erhalten eine Meldebescheinigung. <br><br>
           Im Bürgerbüro wird man Sie nach Ihrem Geburtsort (Stadt), Ihrer Konfession und Ihren Familienstand fragen (ledig, verheiratet, geschieden, verwitwet) fragen.<br><br>
           Die Anmeldung muss spätestens 2 Wochen nach Einzug in die Unterkunft geschehen.<br><br> Die Anmeldung kann NICHT vor dem tatsächlichen Einzugsdatum geschehen. Der Link zur Wohnungsgeberbestätigung:</p><br><br> <a href="https://www.morsbach.de/wp-content/uploads/2020/04/Wohnungsgeberbestaetigung_%C2%A719BMG.pdf" target="_blank">Wohnungsgeberbestätigung</a><br><br>`,
         textUkrainian: `<p>
         Попросіть вашого орендодавця заповнити та підписати підтвердження від постачальника житла. Принесіть цей документ і свій паспорт до міської адміністрації Морсбаха в робочий час.
          У відділі обслуговування громадян вас зареєструють і видадуть довідку про реєстрацію.<br><br>
          У Bürgerbüro вас запитають про місце народження (місто), віросповідання та сімейний стан (неодружений, одружений, розлучений, вдівець). 
          Реєстрація повинна відбутися не пізніше, ніж через 2 тижні після заселення в житло. Реєстрація НЕ може бути здійснена до фактичної дати заселення. Посилання на підтвердження від постачальника житла:</p><br><br> <a href="https://www.morsbach.de/wp-content/uploads/2020/04/Wohnungsgeberbestaetigung_%C2%A719BMG.pdf" target="_blank">Підтвердження господаря житла</a><br><br>`
         },
     ]
     },

    // Hilfe beim Sozialamt beantragen
     {
      topicGerman: "Hilfe beim Sozialamt beantragen",
      topicUkrainian: "Зверніться за допомогою до управління соціального захисту населення",
      textGerman: `<p>
      Wenn Sie gerade erst in Deutschland angekommen sind, können Sie für die erste Zeit  Sozialhilfe im Sozialamt beantragen. Darunter fallen die Kosten für: die Miete, den Lebensunterhalt und für die Krankenhilfe.<br><br>
       Wichtig: Das gilt nur, wenn Sie ihren Lebensunterhalt nicht aus eigenen Mitteln bestreiten können.</p>`,
      textUkrainian: `<p>
      Якщо ви щойно приїхали до Німеччини, ви можете вперше подати заяву на отримання соціальної допомоги в управлінні соціального забезпечення.<br><br>Сюди входять витрати на оренду житла, витрати на проживання та медичне обслуговування.
      <br><br>Важливо: це стосується лише тих випадків, коли ви не можете покрити свої витрати на проживання за рахунок власних коштів.</p>`,
      subtopics: [
          {
          topicGerman: `Ich bin mittellos, bzw. habe nur sehr geringes monatliches Einkommen.
          `,
          topicUkrainian: "Я не маю ні копійки або маю дуже низький щомісячний дохід.",
          textGerman: `<p>Die Sachbearbeiter*innen des Sozialamts bereiten Ihnen unkompliziert einen Antrag auf Sozialhilfe vor.<br><br> Sobald Sie unterschrieben haben, bekommen Sie einen Barcheck an der Gemeindekasse. Mit diesem können Sie sich die Sozialhilfe bei der Volksbank Oberberg direkt neben dem Rathausgebäude auszahlen lassen.</p>`,
          textUkrainian: `<p>
          Працівники Управління соціального захисту населення підготують для вас просту заяву на отримання соціальної допомоги. <br><br>
          Після того, як ви підпишете заяву, ви отримаєте грошовий чек у муніципальній касі. З ним ви можете отримати соціальну допомогу в банку Volksbank Oberberg, що знаходиться поруч з будівлею ратуші.</p>`
          },
          {
          topicGerman: "Ich verfüge über großes Vermögen, auf das ich Zugriff habe, und/oder bin berufstätig.",
          topicUkrainian: "У мене є великі активи, до яких я можу отримати доступ, та/або я працюю.",
          textGerman: `<p>
          Wenn Sie sich Ihren Lebensunterhalt selbst finanzieren können, haben Sie leider kein Anrecht auf Sozialhilfe.<br><br> 
          Falls Sie sich unsicher sind, stellen Sie trotzdem den Antrag. Geben Sie dabei Ihr Vermögen und Einkommen an. Wenn Sie arbeiten, können Sie trotzdem Anrecht auf Sozialleistungen, wie zum Beispiel Kindergeld oder Wohngeld haben. Bitte prüfen Sie hierzu die unteren Themenblöcke.</p>`,
          textUkrainian: `<p>
          Якщо ви можете самостійно фінансувати свої витрати на проживання, ви, на жаль, не маєте права на соціальну допомогу. <br><br>
          Якщо ви не впевнені, все одно подайте заяву на отримання допомоги. При цьому задекларуйте своє майно і доходи. Якщо ви працюєте, можливо, ви все ще маєте право на соціальні виплати, такі як допомога на дитину або житлова допомога. Будь ласка, ознайомтеся з темами нижче.</p>`
          },
      ]
      },

      //   Briefkasten
    {
        topicGerman: 'Ihren Namen auf den Briefkasten schreiben/kleben',
        topicUkrainian: "Напишіть/наклейте своє ім'я на поштову скриньку",
        textGerman: `<p>
        Bitte besprechen Sie mit Ihrem Vermieter, wer Ihren Nachnamen auf den Briefkasten klebt oder schreibt. Nur so können Sie Post von uns oder anderen (wie zum Beispiel die Ausländerbehörde) erhalten.<br><br> 
        Dies ist sehr wichtig, da die Post andernfalls wieder zurückgeschickt wird.</p>`,
        textUkrainian: `<p>
        Будь ласка, обговоріть з орендодавцем, хто наклеїть або напише ваше прізвище на поштовій скриньці. Це єдиний спосіб, яким ви зможете отримувати пошту від нас або інших осіб (наприклад, від Управління з питань реєстрації іноземців).<br><br> 
        Це дуже важливо, інакше пошта буде повернута. інакше пошта не буде доставлена.</p>`,
        subtopics: "",
        },


    //   Bankkonto
    {
        topicGerman: 'Ein Bankkonto eröffnen',
        topicUkrainian: 'Відкрийте банківський рахунок',
        textGerman: `<p>Sie sollten sobald wie möglich ein Bankkonto eröffnen, damit Sie später Arbeitslosengeld I (Hartz IV, **ab 1. Januar 2023 Bürgergeld**) erhalten können. Die Beantragung ist einfach. Sie brauchen dafür nur:</p>
        <ul>
            <li>einen gültigen, biometrischen Reisepass</li>
            <li>die Meldebescheinigung über Ihren Wohnsitz</li>
            <li>Ihre Steuer-Identifikationsnummer (Steuer-ID; kann auch nachgereicht werden)</li>
        </ul>
        <p>Sie können das Konto bei einer Bank Ihrer Wahl eröffnen. Es gibt manche Banken, die Vergünstigungen für ukrainische Geflüchtete anbieten. In Morsbach befinden sich die Filialen der Kreissparkasse Köln und der Volksbank Oberberg direkt auf dem Rathausplatz.
        <br><br>
        Bitte vereinbaren Sie zur Kontoeröffnung in der Bank einen Termin! In manchen Bankfilialen arbeiten russischsprachige Mitarbeiter*innen, die Ihnen weiterhelfen können.
        <br><br>
        Wir empfehlen, bei der Eröffnung des Bankkontos das Onlinebanking zu aktivieren. Dadurch können sie gut nachverfolgen, welche Einnahmen und Ausgaben Sie haben. Außerdem können Sie digitale Kontoauszüge erstellen.
        </p>`,
        textUkrainian: `<p>Вам слід відкрити банківський рахунок якомога швидше, щоб згодом ви могли отримувати допомогу по безробіттю (Hartz IV, з 1 січня 2023 року Bürgergeld). Подати заяву на відкриття рахунку дуже просто. Все, що вам потрібно:</p>
        <ul>
            <li>дійсний біометричний паспорт</li>
            <li>свідоцтво про реєстрацію місця проживання</li>
            <li>ідентифікаційний номер платника податків (податковий номер; може бути наданий пізніше)</li>
        </ul>
        <p>Ви можете відкрити рахунок у будь-якому банку на ваш вибір. Деякі банки пропонують знижки для українських біженців. У Морсбаху відділення Kreissparkasse Köln та Volksbank Oberberg розташовані безпосередньо на Ратгаусплац, на площі біля ратуші.<br><br>
        Будь ласка, запишіться на прийом для відкриття рахунку в банку! У деяких відділеннях банку є російськомовний персонал, який може вам допомогти.
        <br><br>
        Ми рекомендуємо активувати онлайн-банкінг, коли ви відкриваєте свій банківський рахунок. Це дозволить відстежувати ваші доходи і витрати. Ви також можете створювати цифрові банківські виписки.
        </p>
        `,
        subtopics: [
            {
            topicGerman: `❗Ich habe keinen biometrischen Reisepass oder mein Reisepass ist abgelaufen.`,
            topicUkrainian: `❗У мене немає біометричного паспорта або термін дії мого паспорта закінчився.`,
            textGerman: `<p>
                Das ist ein Problem. Falls Ihr Reisepass in Kürze abläuft, versuchen Sie in der ukrainischen Botschaft oder im örtlichen ukrainischen Konsulat eine Verlängerung Ihres Passes zu bekommen.<br><br>
                Falls der Pass abgelaufen ist oder Sie einen alten ukrainischen Inlandspass haben, müssen Sie auf Ersatzdokumente von der Ausländerbehörde warten, bis Sie ein Konto eröffnen können. Dies kann jedoch mehrere Monate dauern.
                </p>`,
            textUkrainian: `
            <p>
                Це проблема. Якщо термін дії вашого паспорта закінчується, спробуйте продовжити його в українському посольстві або місцевому українському консульстві.<br><br>
                Якщо термін дії вашого паспорта закінчився або у вас старий український внутрішній паспорт, вам доведеться чекати на заміну документів від імміграційної служби, перш ніж ви зможете відкрити рахунок. Однак це може зайняти кілька місяців.
            </p>
            `
            },
        ]
        },

    // Kinder für die Schule / den Kindergarten anmelden
    {
            topicGerman: `
            Kinder für die Schule / den Kindergarten anmelden
            `,
            topicUkrainian: `
            Зареєструвати дітей до школи / дитячого садка
            `,
            textGerman: ``,
            textUkrainian: ``,
            subtopics: [
                {
                    topicGerman: `
                    Ich brauche einen Kindergartenplatz für mein Kind.
                `,
                    topicUkrainian: `Мені потрібне місце в дитячому садку для моєї дитини.
                `,
                    textGerman: `
                    <p>
                        Kindergartenplätze sind rar in Deutschland. Normalerweise müssen Eltern ihre Kinder schon ein Jahr im Voraus im Kindergarten anmelden. In beliebten Kindergärten gibt es lange Wartelisten. Allerdings werden manchmal Plätze frei.<br><br>
                        Kitaplätze lassen sich am besten über die Plattform Little Bird finden. Hier der Link: <a href="https://portal.little-bird.de/Suche/Morsbach" target="_blank">Little Birds</a><br><br>
                        Manchmal lohnt es sich jedoch, sich persönlich bei einem Kindergarten nach einem Platz zu erkundigen.
                    </p>
                `,
                    textUkrainian: `
                    <p>
                        Місця в дитячих садках у Німеччині - рідкість. Зазвичай батьки повинні реєструвати своїх дітей до дитячого садка за рік до його відкриття. У популярних дитячих садках існують довгі списки очікування. Однак іноді місця звільняються.<br><br>
                        Найкращий спосіб знайти місце в дитячому садку - через платформу Little Bird. Ось посилання: <a href="https://portal.little-bird.de/Suche/Morsbach" target="_blank">Little Bird</a><br><br>
                        Іноді, однак, варто запитати про місце особисто в дитячому садку.
                    </p>
                `
                },
                {
                    topicGerman: `
                    Ich habe ein schulpflichtiges Kind.
                    `,
                    topicUkrainian: `
                    У мене дитина шкільного віку.
                    `,
                    textGerman: `
                    <p>
                    Schulpflichtig sind alle Kinder, die
                     </p>
                    <ul>
                        <li>
                            ihren Wohnsitz oder gewöhnlichen Aufenthalt in NRW haben.
                        </li>
                        <li>
                            die bis zum 30. September sechs Jahre alt geworden sind (Schulpflicht startet am 1. August desselben Jahres)
                        </li>
                        <li>
                            die unter 18 Jahre alt sind und noch keinen ukrainischen Schulabschluss nach der 11. Klasse erworben haben
                        </li>
                    </ul>
                    <p>
                        In Morsbach gibt es eine Grundschule mit drei Standorten und eine weiterführende Schule bis zur 10. Klasse.
                        <br><br>
                        Informationen auf Ukrainisch zum deutschen Schulsystem: <a href="https://handbookgermany.de/uk/school" target="_blank">Handbook-Germany</a>
                        <br><br>
                        Weitere Fragen:
                    </p>
                    `,
                    textUkrainian: `
                    <p>Німецьку школу повинні відвідувати всі діти, які</p>
                    <ul>
                        <li>мають прописку або постійне місце проживання в Північній Рейн-Вестфалії.</li>
                        <li>яким до 30 вересня виповнилося шість років (обов'язкове шкільне навчання починається з 1 серпня того ж року).</li>
                        <li>які не досягли 18 років і ще не отримали український атестат про повну загальну середню освіту після 11-го класу.</li>
                    </ul>
                    <p>
                        У Морсбаху є початкова школа з трьома відділеннями та середня школа до 10 класу.<br><br>
                        Інформація українською мовою про шкільну систему Німеччини: <a href="https://handbookgermany.de/uk/school" target="_blank">https://handbookgermany.de/uk/school</a><br><br>
                        Інші питання:
                    </p>
                    `,
                    subtopics: [
                        {
                            topicGerman: `
                            Kann mein Kind statt der deutschen Schule auch die ukrainische Schule (online) besuchen?
                        `,
                            topicUkrainian: `
                            Чи може моя дитина відвідувати українську школу (онлайн) замість німецької?
                        `,
                            textGerman: `
                            <p>In Deutschland hat die deutsche Schule Vorrang. Das heißt, dass der ukrainische Schulunterricht nur außerhalb des deutschen Unterrichts besucht werden kann.<br><br> Manche Schulen finden mit den Eltern Kompromisse. Allerdings hat der Erwerb der deutschen Sprache Priorität.</p>
                        `,
                            textUkrainian: `
                            <p>У Німеччині німецька школа має пріоритет. Це означає, що уроки в українській школі можна відвідувати лише після уроків німецької.<br><br> Деякі школи знаходять компроміси з батьками. Однак, вивчення німецької мови є пріоритетним.</p>
                        `
                        },
                        {
                            topicGerman: `
                            Bekommt mein Kind an der deutschen Schule Noten?
                            `,
                            topicUkrainian: `
                            Чи буде моя дитина отримувати оцінки в німецькій школі?
                            `,
                            textGerman: `
                            <p>Ihr Kind hat in Deutschland zwei Jahre Zeit, um die deutsche Sprache zu lernen. In dieser Zeit wird das Kind nicht benotet, außer es wird explizit erwünscht. Nach zwei Jahren wird das Kind beurteilt und der passenden Schulform zugewiesen.</p>
                            `,
                            textUkrainian: `
                            <p>Ваша дитина має два роки для вивчення німецької мови в Німеччині. Протягом цього часу дитину не оцінюють, якщо тільки вона цього не попросить. Після двох років дитина проходить оцінювання і направляється до відповідного типу школи.</p>
                            `
                        },
                        {
                            topicGerman: `
                            Was muss ich tun, um mein Kind an der Schule anzumelden?
                            `,
                            topicUkrainian: `
                            Що мені потрібно зробити, щоб записати дитину до школи?
                            `,
                            textGerman: `
                            <p>
                                Wenn Ihr Kind in der Ukraine die 1. - 4. Klasse besucht hat ist die Amitola-Grundschule für Sie zuständig.
                                <br><br>
                                Wenn Ihr Kind in der Ukraine die 5. - 9. Klasse besucht hat, ist die Leonardo da Vinci-Schule zuständig.
                                <br><br>
                                Wenn Ihr Kind in der Ukraine die 10. - 11. Klasse besucht hat, ist ein Berufskolleg für Sie zuständig. Das Erstgespräch führen Sie trotzdem in der Leonardo da Vinci-Schule in Morsbach.
                                <br><br>
                                Bitte nehmen Sie Kontakt zu der zuständigen Schule auf und vereinbaren Sie einen Termin für ein Erstgespräch. Die Schule stellt nach dem Erstgespräch einen Antrag beim örtlichen Schulamt. Das Schulamt entscheidet daraufhin, an welche Schule Ihr Kind gehen wird. Dies kann eine bis mehrere Wochen dauern. Die Schule meldet sich bei Ihnen, sobald Ihr Kind zur Schule gehen kann.
                            </p>
                            `,
                            textUkrainian: `
                            <p>
                                Якщо ваша дитина відвідувала 1-4 класи в Україні, за вас відповідає Початкова школа "Амітола".<br><br>
                                Якщо ваша дитина відвідувала 5-9 класи в Україні, за вас відповідає школа Леонардо да Вінчі.<br><br>
                                Якщо ваша дитина відвідувала 10-11 клас в Україні, за вас відповідає професійно-технічний коледж. Ви все одно пройдете первинну співбесіду в Школі Леонардо да Вінчі в Морсбаху.<br><br>
                                Будь ласка, зв'яжіться з відповідальною школою та домовтеся про зустріч на первинну співбесіду. Після первинної співбесіди школа подає заявку до шкільної адміністрації. Шкільна адміністрація вирішує, до якої школи піде ваша дитина. Це може зайняти від одного до декількох тижнів. Школа зв'яжеться з вами, як тільки ваша дитина зможе піти до школи.
                            </p>
                            `
                        },
                        {
                            topicGerman: `
                            Mein Kind ist zwischen 16 und 18 Jahre alt und hat schon das ukrainische Abitur.
                            `,
                            topicUkrainian: `
                            Моїй дитині від 16 до 18 років і вона вже має український атестат про повну загальну середню освіту.
                            `,
                            textGerman: `
                            <p>In dem Fall muss das Kind nicht das Berufskolleg besuchen. Wenn es möchte, kann es einen Integrationskurs (Jugendintegrationskurs) von einem Sprachkursträger in der Region belegen. Holen Sie sich dafür eine Verpflichtung von Ihrem Jobcenter.</p>
                            `,
                            textUkrainian: `
                            <p>У цьому випадку дитина не зобов'язана відвідувати професійно-технічне училище. За бажанням вона може пройти інтеграційний курс (курс інтеграції молоді) у мовній школі в регіоні. Отримайте для цього направлення у своєму центрі зайнятості.</p>
                            `
                        },
                 ]
                },
            ]
        },

    //   Nächster Eintrag
    {
        topicGerman: `
        Einladung von der Ausländerbehörde
        `,
        topicUkrainian: `
        Запрошення з Управління з питань реєстрації іноземців
        `,
        textGerman: `
        <p>
            Innerhalb einer Woche sollten Sie eine Einladung zu einem Gespräch in der Ausländerbehörde erhalten. Bitte füllen Sie den beiliegenden Antrag vollständig aus! Nehmen Sie zu dem Termin alle nötigen Unterlagen (vor allem Passpapiere) mit. Vor Ort werden Ihre Fingerabdrücke genommen und ein Passfoto gemacht.
            <br><br>
            Bei dem Gespräch wird Ihnen eine Fiktionsbescheinigung ausgehändigt. Mit dieser haben Sie eine befristete Aufenthaltsgenehmigung und in der Regel eine Arbeitserlaubnis in Deutschland. Achten Sie auf die Wohnsitzauflage! Normalerweise dürfen Sie nur in dem Bundesland (evtl. auch Gemeinde/Stadt) eine Wohnadresse anmelden, in der Sie Ihre Fiktionsbescheinigung erhalten haben.
            <br><br>
            Bei dem Termin in der Ausländerbehörde stellen Sie einen Antrag auf einen Aufenthaltstitel (siehe unten). Sobald dieser fertig ist, erhalten Sie einen weiteren Brief mit weiteren Informationen. In der Regel dauert dies mindestens einen Monat.
            <br><br>
            Wenn Sie den Aufenthaltstitel abholen, erhalten Sie ein weiteres grünes Zusatzblatt. Bitte beachten Sie, dass Sie beide Dokumente mit sich führen müssen.
        </p>
        `,
        textUkrainian: `
        <p>
            Протягом одного тижня ви повинні отримати запрошення на співбесіду до Управління у справах іноземців. **Будь ласка, повністю заповніть анкету, що додається, і візьміть з собою на співбесіду всі необхідні документи (особливо паспортні документи). На місці у вас знімуть відбитки пальців та зроблять фотографію на паспорт.
            <br><br>
            Під час співбесіди вам видадуть фіктивну довідку. Це дає вам дозвіл на тимчасове проживання і, як правило, дозвіл на роботу в Німеччині. Зверніть увагу на вимогу щодо місця проживання! Як правило, ви можете зареєструвати адресу проживання лише у тій федеральній землі (можливо, також у громаді/місті), де ви отримали посвідку на фактичне проживання.
            <br><br>
            На прийомі у відділі реєстрації іноземців ви подасте заяву на отримання права на проживання (див. нижче). Як тільки вона буде готова, ви отримаєте ще одного листа з подальшою інформацією. Як правило, це займає не менше одного місяця.
            <br><br>
            Коли ви отримаєте посвідку на проживання, ви отримаєте ще один зелений додатковий аркуш. Зверніть увагу, що ви повинні зберігати обдва документи.
        </p>
        `,
        subtopics: [
            {
                topicGerman: `
                Ich bin aus der Ukraine geflüchtet, habe aber keine ukrainische Staatsbürgerschaft.
            `,
                topicUkrainian: `
                Я виїхав з України, але не маю українського громадянства.
            `,
                textGerman: `
                <p>
                    Wenn Sie in der Ukraine über einen unbefristeten Aufenthaltstitel verfügen und Sie am 24. Februar 2022 in der Ukraine gelebt haben, fallen Sie wahrscheinlich auch unter §24-Aufenthaltsgesetz. Näheres erfahren Sie bei Ihrer Ausländerbehörde. 
                </p>
            `,
                textUkrainian: `
                <p>
                    Якщо у вас є посвідка на постійне проживання в Україні і ви проживали в Україні 24 лютого 2022 року, ви, ймовірно, також підпадаєте під дію §24 Закону про перебування. Ви можете дізнатися більше у своєму органі у по справах іноземців.
                </p>
            `
            },
            {
                topicGerman: `
                Beispieldokumente
            `,
                topicUkrainian: `
                Приклади документів
            `,
                textGerman: `
                <figure>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Fiktionsbescheinigung-Traegervordruck.jpg/1024px-Fiktionsbescheinigung-Traegervordruck.jpg" alt="Beispiel für Fiktionsbescheinigung">
                    <figcaption>Eine Fiktionsbescheinigung sieht so aus (s.o.). (Bildquelle: wikipedia.de)</figcaption>
                </figure>
                <figure>
                    <img src="https://upload.wikimedia.org/wikipedia/de/e/e6/Aufenthaltserlaubnis_D_2021.png" alt="Beispiel für Aufenthaltstitel">
                    <figcaption>Beispiel für einen Aufenthaltstitel. (Quelle: wikipedia.de)</figcaption>
                </figure>
            `,
                textUkrainian: `
                <figure>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Fiktionsbescheinigung-Traegervordruck.jpg/1024px-Fiktionsbescheinigung-Traegervordruck.jpg" alt="Beispiel für Fiktionsbescheinigung">
                    <figcaption>Свідоцтво про вигадку виглядає так: (Джерело зображення: wikipedia.de)</figcaption>
                </figure>
                <figure>
                    <img src="https://upload.wikimedia.org/wikipedia/de/e/e6/Aufenthaltserlaubnis_D_2021.png" alt="Beispiel für Aufenthaltstitel">
                    <figcaption>Приклад дозволу на проживання: (Джерело: wikipedia.de)</figcaption>
                </figure>
            `
            },
        ]
        },
    

    //   Nächster Eintrag
    // {
    //     topicGerman: `
        
    //     `,
    //     topicUkrainian: `
        
    //     `,
    //     textGerman: `
        
    //     `,
    //     textUkrainian: `
        
    //     `,
    //     subtopics: [
    //         {
    //             topicGerman: `
            
    //         `,
    //             topicUkrainian: `
            
    //         `,
    //             textGerman: `
            
    //         `,
    //             textUkrainian: `
            
    //         `
    //         },
    //         {
    //             topicGerman: `
            
    //         `,
    //             topicUkrainian: `
            
    //         `,
    //             textGerman: `
            
    //         `,
    //             textUkrainian: `
            
    //         `
    //         },
    //     ]
    //     },
 ]