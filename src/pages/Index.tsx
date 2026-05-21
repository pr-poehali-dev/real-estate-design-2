import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_BG = "https://cdn.poehali.dev/projects/aaccd30d-ea20-41a6-9c8d-db6ae7b35198/files/8f077fe7-41a9-4636-a23c-8621d1fad86b.jpg";
const REALTOR_PHOTO = "https://cdn.poehali.dev/projects/aaccd30d-ea20-41a6-9c8d-db6ae7b35198/files/c5cd5ab5-288d-443f-8123-112e36ff3baf.jpg";

const NAV_LINKS = [
  { label: "О компании", href: "#about" },
  { label: "Цены", href: "#pricing" },
  { label: "Преимущества", href: "#advantages" },
  { label: "Объекты", href: "#properties" },
  { label: "Отзывы", href: "#reviews" },
  { label: "Контакты", href: "#contacts" },
];

const ADVANTAGES = [
  { icon: "Shield", title: "Юридическая чистота", desc: "Полная проверка документов и юридическое сопровождение на каждом этапе сделки" },
  { icon: "Clock", title: "15 лет опыта", desc: "Более тысячи успешно закрытых сделок в Москве и Подмосковье" },
  { icon: "Heart", title: "Индивидуальный подход", desc: "Подбираем варианты исключительно под ваши запросы и бюджет" },
  { icon: "TrendingUp", title: "Выгодные условия", desc: "Помогаем получить ипотеку по специальным ставкам у партнёрских банков" },
  { icon: "MapPin", title: "Знание рынка", desc: "Глубокое знание районов, застройщиков и реальных цен на недвижимость" },
  { icon: "Star", title: "Послепродажный сервис", desc: "Поддержка после сделки: переоформление, коммунальные службы, управляющие компании" },
];

const PROPERTIES = [
  { type: "Новостройка", name: "ЖК «Золотые паруса»", area: "42–95 м²", price: "от 8 500 000 ₽", rooms: "1–3 комнаты", tag: "Хит продаж" },
  { type: "Вторичное жильё", name: "ЖК «Берёзовая роща»", area: "55–120 м²", price: "от 11 200 000 ₽", rooms: "2–4 комнаты", tag: "Эксклюзив" },
  { type: "Новостройка", name: "ЖК «Лазурный берег»", area: "38–85 м²", price: "от 6 900 000 ₽", rooms: "Студии, 1–2 комнаты", tag: "Сдача 2025" },
  { type: "Пентхаус", name: "ЖК «Дворянское гнездо»", area: "180–240 м²", price: "от 42 000 000 ₽", rooms: "4–5 комнат", tag: "Премиум" },
];

const REVIEWS = [
  { name: "Марина Воронова", date: "Март 2024", text: "Анна помогла нам найти идеальную квартиру за три недели! Профессионально, внимательно, без лишних нервов. Рекомендую всем друзьям.", rating: 5 },
  { name: "Дмитрий Кузнецов", date: "Январь 2024", text: "Отличный специалист. Помогла продать квартиру по хорошей цене и быстро найти новую. Все документы были оформлены безупречно.", rating: 5 },
  { name: "Светлана Орлова", date: "Ноябрь 2023", text: "Очень рада, что обратилась именно к Анне. Терпеливо отвечала на все мои вопросы, сопровождала на каждом этапе. Всё прошло гладко!", rating: 5 },
];

const INCLUDED = [
  { icon: "Search", title: "Поиск объектов", desc: "Подбор вариантов по вашим критериям из всех доступных баз" },
  { icon: "Eye", title: "Организация просмотров", desc: "Согласование времени и сопровождение на каждом просмотре" },
  { icon: "FileText", title: "Проверка документов", desc: "Юридическая экспертиза объекта и продавца" },
  { icon: "Handshake", title: "Переговоры", desc: "Торг с продавцом для достижения лучшей цены" },
  { icon: "PenLine", title: "Оформление сделки", desc: "Подготовка и подписание всех необходимых договоров" },
  { icon: "Key", title: "Передача ключей", desc: "Присутствие при передаче и подписании акта приёмки" },
];

const FAQ = [
  { q: "Сколько стоят ваши услуги?", a: "Комиссия риэлтора составляет 2–3% от стоимости сделки. Точная сумма обсуждается на первичной консультации и зависит от сложности и объёма работы." },
  { q: "Как долго длится сделка?", a: "В среднем от поиска до получения ключей уходит 1–3 месяца. Сроки зависят от типа объекта, ипотеки и готовности документов у продавца." },
  { q: "Помогаете ли вы с ипотекой?", a: "Да! Мы работаем с 12 банками-партнёрами и помогаем получить одобрение по сниженным ставкам. Консультация по ипотеке бесплатна." },
  { q: "Работаете ли вы с новостройками?", a: "Работаем как с новостройками от застройщиков, так и со вторичным рынком. В нашей базе более 200 актуальных объектов." },
  { q: "Можно ли записаться на просмотр онлайн?", a: "Да, вы можете заполнить форму на сайте, и я свяжусь с вами в течение 1 часа для согласования удобного времени." },
];

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [form, setForm] = useState({ name: "", phone: "", type: "viewing", comment: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="font-golos text-[#3a2a1a] bg-[#faf7f2]">

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#faf7f2]/90 backdrop-blur-md border-b border-[#d4b896]/30">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <button onClick={() => scrollTo("#hero")} className="font-cormorant text-2xl font-semibold text-[#5c3d2e] tracking-wide">
            Анна Соколова
          </button>
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((l) => (
              <button key={l.href} onClick={() => scrollTo(l.href)}
                className="text-sm font-medium text-[#7a5c48] hover:text-[#e07b39] transition-colors duration-200">
                {l.label}
              </button>
            ))}
            <button onClick={() => scrollTo("#booking")}
              className="bg-[#e07b39] text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-[#c96b2a] transition-all duration-200 shadow-md">
              Записаться
            </button>
          </div>
          <button className="md:hidden text-[#5c3d2e]" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-[#faf7f2] border-t border-[#d4b896]/30 px-6 py-4 flex flex-col gap-4">
            {NAV_LINKS.map((l) => (
              <button key={l.href} onClick={() => scrollTo(l.href)}
                className="text-left text-sm font-medium text-[#7a5c48] hover:text-[#e07b39] transition-colors">
                {l.label}
              </button>
            ))}
            <button onClick={() => scrollTo("#booking")}
              className="bg-[#e07b39] text-white text-sm font-semibold px-5 py-2.5 rounded-full text-center">
              Записаться
            </button>
          </div>
        )}
      </nav>

      {/* HERO — split screen */}
      <section id="hero" className="min-h-screen pt-16 flex flex-col md:flex-row overflow-hidden bg-[#faf7f2]">

        {/* Left — текст */}
        <div className="flex-1 flex flex-col justify-center px-8 md:px-16 lg:px-24 py-16 md:py-0 relative z-10">
          {/* Декоративная линия */}
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-px bg-[#e07b39]" />
            <span className="text-[#e07b39] text-xs font-semibold tracking-[0.25em] uppercase">Риэлтор · Москва</span>
          </div>

          <h1 className="font-cormorant text-[clamp(3rem,6vw,5.5rem)] font-bold text-[#2a1a0e] leading-[0.95] mb-8">
            Квартира,<br />
            <span className="italic text-[#e07b39]">которую вы</span><br />
            искали
          </h1>

          <p className="text-[#7a5c48] text-base md:text-lg leading-relaxed max-w-sm mb-10">
            Помогаю найти, проверить и купить недвижимость без стресса. 15 лет на рынке Москвы и Подмосковья.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-14">
            <a href="tel:+79001234567"
              className="inline-flex items-center justify-center gap-2 bg-[#2a1a0e] text-[#faf7f2] font-semibold px-8 py-4 rounded-2xl hover:bg-[#e07b39] transition-all duration-300 text-sm">
              <Icon name="Phone" size={16} />
              Позвонить сейчас
            </a>
            <button onClick={() => scrollTo("#booking")}
              className="inline-flex items-center justify-center gap-2 border-2 border-[#2a1a0e] text-[#2a1a0e] font-semibold px-8 py-4 rounded-2xl hover:bg-[#2a1a0e] hover:text-[#faf7f2] transition-all duration-300 text-sm">
              <Icon name="CalendarCheck" size={16} />
              Записаться
            </button>
          </div>

          {/* Stats strip */}
          <div className="flex gap-8 pt-8 border-t border-[#e8d5c0]">
            {[["1000+", "сделок"], ["15", "лет опыта"], ["98%", "довольных"]].map(([val, lbl]) => (
              <div key={lbl}>
                <div className="font-cormorant text-3xl font-bold text-[#2a1a0e]">{val}</div>
                <div className="text-xs text-[#9a7a5a] mt-0.5 uppercase tracking-wide">{lbl}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — фото + карточка */}
        <div className="flex-1 relative min-h-[50vh] md:min-h-0 overflow-hidden">
          {/* Фото ЖК */}
          <img src={HERO_BG} alt="Жилой комплекс"
            className="absolute inset-0 w-full h-full object-cover" />

          {/* Тёмный оверлей снизу */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#2a1a0e]/60 via-transparent to-transparent" />

          {/* Фото риэлтора — снизу */}
          <div className="absolute bottom-0 left-8 w-40 md:w-52 z-10">
            <img src={REALTOR_PHOTO} alt="Анна Соколова"
              className="w-full object-cover object-top"
              style={{ maskImage: "linear-gradient(to top, transparent 0%, black 20%)", WebkitMaskImage: "linear-gradient(to top, transparent 0%, black 20%)" }}
            />
          </div>

          {/* Карточка-бейдж */}
          <div className="absolute bottom-8 right-8 bg-white/95 backdrop-blur-sm rounded-2xl px-5 py-4 shadow-2xl max-w-[180px]">
            <div className="flex gap-1 mb-2">
              {[1,2,3,4,5].map(i => (
                <Icon key={i} name="Star" size={12} className="text-[#e07b39] fill-[#e07b39]" />
              ))}
            </div>
            <div className="font-cormorant text-sm font-bold text-[#2a1a0e] leading-tight">Анна Соколова</div>
            <div className="text-[#9a7a5a] text-xs mt-0.5">Риэлтор №1 в районе</div>
          </div>

          {/* Бейдж "онлайн" */}
          <div className="absolute top-8 right-8 bg-[#e07b39] text-white text-xs font-bold px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
            <span className="w-2 h-2 bg-white rounded-full inline-block animate-pulse" />
            Онлайн-запись открыта
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-24 bg-[#2a1a0e]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="inline-block text-[#e07b39] text-xs font-semibold tracking-[0.25em] uppercase mb-4">Стоимость услуг</span>
            <h2 className="font-cormorant text-5xl font-bold text-white leading-tight">
              Прозрачные условия<br />
              <span className="italic text-[#e07b39]">без скрытых комиссий</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Карточка 1 — Квартиры */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col hover:border-[#e07b39]/50 transition-colors duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#e07b39]/20 flex items-center justify-center flex-shrink-0">
                  <Icon name="Building2" size={22} className="text-[#e07b39]" />
                </div>
                <div>
                  <div className="text-white font-bold text-lg leading-tight">Продажа квартиры</div>
                  <div className="text-[#9a7a5a] text-sm">Первичный и вторичный рынок</div>
                </div>
              </div>

              <div className="mb-6">
                <div className="font-cormorant text-5xl font-bold text-white">2–3%</div>
                <div className="text-[#9a7a5a] text-sm mt-1">от стоимости сделки</div>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {[
                  "Подбор вариантов по вашим критериям",
                  "Организация просмотров",
                  "Проверка юридической чистоты",
                  "Переговоры и торг с продавцом",
                  "Полное сопровождение сделки",
                  "Помощь с ипотекой у банков-партнёров",
                ].map(item => (
                  <li key={item} className="flex items-start gap-3 text-[#e8d5c0] text-sm">
                    <Icon name="Check" size={16} className="text-[#e07b39] mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <button onClick={() => scrollTo("#booking")}
                className="w-full bg-[#e07b39] text-white font-semibold py-4 rounded-2xl hover:bg-[#c96b2a] transition-colors duration-200 text-sm">
                Получить консультацию
              </button>
            </div>

            {/* Карточка 2 — Дома */}
            <div className="bg-[#e07b39]/10 border border-[#e07b39]/40 rounded-3xl p-8 flex flex-col relative overflow-hidden hover:border-[#e07b39] transition-colors duration-300">
              <div className="absolute top-6 right-6 bg-[#e07b39] text-white text-xs font-bold px-3 py-1.5 rounded-full">
                Популярно
              </div>

              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#e07b39]/30 flex items-center justify-center flex-shrink-0">
                  <Icon name="TreePine" size={22} className="text-[#e07b39]" />
                </div>
                <div>
                  <div className="text-white font-bold text-lg leading-tight">Продажа дома с участком</div>
                  <div className="text-[#9a7a5a] text-sm">Загородная недвижимость</div>
                </div>
              </div>

              <div className="mb-6">
                <div className="font-cormorant text-5xl font-bold text-white">3–4%</div>
                <div className="text-[#9a7a5a] text-sm mt-1">от стоимости сделки</div>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {[
                  "Оценка дома и земельного участка",
                  "Проверка документов на землю и дом",
                  "Анализ инфраструктуры и коммуникаций",
                  "Переговоры с собственником",
                  "Контроль перехода права собственности",
                  "Сопровождение до передачи ключей",
                ].map(item => (
                  <li key={item} className="flex items-start gap-3 text-[#e8d5c0] text-sm">
                    <Icon name="Check" size={16} className="text-[#e07b39] mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <button onClick={() => scrollTo("#booking")}
                className="w-full bg-white text-[#2a1a0e] font-semibold py-4 rounded-2xl hover:bg-[#e07b39] hover:text-white transition-colors duration-200 text-sm">
                Получить консультацию
              </button>
            </div>
          </div>

          <p className="text-center text-[#9a7a5a] text-sm mt-8">
            Первичная консультация — бесплатно. Точная стоимость обсуждается индивидуально.
          </p>
        </div>
      </section>

      <section id="about" className="py-24 bg-[#f5ede1]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-[#e07b39] text-sm font-semibold tracking-widest uppercase mb-4">О компании</span>
              <h2 className="font-cormorant text-5xl font-bold text-[#3a2a1a] mb-6 leading-tight">
                Риэлтор, которому<br />можно доверять
              </h2>
              <p className="text-[#7a5c48] leading-relaxed mb-5">
                Меня зовут Анна Соколова, я профессиональный риэлтор с 15-летним опытом работы на рынке недвижимости Москвы и Подмосковья. За эти годы я помогла более чем тысяче семей найти свой идеальный дом.
              </p>
              <p className="text-[#7a5c48] leading-relaxed mb-8">
                Я работаю честно и прозрачно — никаких скрытых комиссий и пустых обещаний. Моя цель — сделать покупку или продажу недвижимости комфортным и приятным опытом для каждого клиента.
              </p>
              <div className="flex gap-12">
                {[["1000+", "Сделок"], ["15", "Лет опыта"], ["98%", "Довольных клиентов"]].map(([val, label]) => (
                  <div key={label}>
                    <div className="font-cormorant text-4xl font-bold text-[#e07b39]">{val}</div>
                    <div className="text-sm text-[#9a7a5a] mt-1">{label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <img src={REALTOR_PHOTO} alt="Анна Соколова" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-[#e07b39] text-white p-6 rounded-2xl shadow-xl">
                <div className="font-cormorant text-3xl font-bold">№1</div>
                <div className="text-sm opacity-90 mt-1">по продажам в районе</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ADVANTAGES */}
      <section id="advantages" className="py-24 bg-[#faf7f2]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block text-[#e07b39] text-sm font-semibold tracking-widest uppercase mb-4">Почему выбирают нас</span>
            <h2 className="font-cormorant text-5xl font-bold text-[#3a2a1a]">Наши преимущества</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ADVANTAGES.map((adv) => (
              <div key={adv.title}
                className="group bg-white border border-[#e8d5c0] rounded-2xl p-8 hover:border-[#e07b39]/40 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-[#f5ede1] rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#e07b39]/10 transition-colors">
                  <Icon name={adv.icon} size={22} className="text-[#e07b39]" />
                </div>
                <h3 className="font-cormorant text-xl font-semibold text-[#3a2a1a] mb-3">{adv.title}</h3>
                <p className="text-[#9a7a5a] text-sm leading-relaxed">{adv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROPERTIES */}
      <section id="properties" className="py-24 bg-[#3a2a1a]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block text-[#e07b39] text-sm font-semibold tracking-widest uppercase mb-4">Портфолио</span>
            <h2 className="font-cormorant text-5xl font-bold text-[#faf7f2]">Что мы продаём</h2>
            <p className="text-[#c4a882] mt-4 max-w-lg mx-auto">Актуальная подборка объектов в Москве и Подмосковье</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {PROPERTIES.map((p) => (
              <div key={p.name} className="bg-[#4a3828] border border-[#6a4c38] rounded-2xl p-8 hover:border-[#e07b39]/50 transition-all duration-300 group">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="text-xs text-[#e07b39] font-semibold tracking-wide uppercase">{p.type}</span>
                    <h3 className="font-cormorant text-2xl font-bold text-[#faf7f2] mt-1">{p.name}</h3>
                  </div>
                  <span className="bg-[#e07b39]/20 text-[#e07b39] text-xs font-semibold px-3 py-1.5 rounded-full border border-[#e07b39]/30 whitespace-nowrap ml-3">
                    {p.tag}
                  </span>
                </div>
                <div className="flex gap-8 mb-6">
                  <div>
                    <div className="text-[#9a7a5a] text-xs mb-1">Площадь</div>
                    <div className="text-[#e8d5c0] font-medium">{p.area}</div>
                  </div>
                  <div>
                    <div className="text-[#9a7a5a] text-xs mb-1">Планировки</div>
                    <div className="text-[#e8d5c0] font-medium">{p.rooms}</div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="font-cormorant text-2xl font-bold text-[#e07b39]">{p.price}</div>
                  <button className="text-sm text-[#c4a882] hover:text-[#e07b39] transition-colors flex items-center gap-1">
                    Подробнее <Icon name="ArrowRight" size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-24 bg-[#f5ede1]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block text-[#e07b39] text-sm font-semibold tracking-widest uppercase mb-4">Отзывы</span>
            <h2 className="font-cormorant text-5xl font-bold text-[#3a2a1a]">Что говорят клиенты</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {REVIEWS.map((r) => (
              <div key={r.name} className="bg-white rounded-2xl p-8 border border-[#e8d5c0] shadow-sm hover:shadow-md transition-shadow">
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="text-[#e07b39] fill-[#e07b39]" />
                  ))}
                </div>
                <p className="text-[#5c3d2e] leading-relaxed mb-6 italic font-cormorant text-lg">«{r.text}»</p>
                <div className="flex items-center gap-3 pt-4 border-t border-[#f0e4d4]">
                  <div className="w-10 h-10 rounded-full bg-[#e07b39]/20 flex items-center justify-center">
                    <span className="font-cormorant font-bold text-[#e07b39]">{r.name[0]}</span>
                  </div>
                  <div>
                    <div className="font-semibold text-[#3a2a1a] text-sm">{r.name}</div>
                    <div className="text-[#9a7a5a] text-xs">{r.date}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INCLUDED */}
      <section id="included" className="py-24 bg-[#faf7f2]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block text-[#e07b39] text-sm font-semibold tracking-widest uppercase mb-4">Прозрачность</span>
            <h2 className="font-cormorant text-5xl font-bold text-[#3a2a1a]">Что входит в стоимость</h2>
            <p className="text-[#9a7a5a] mt-4 max-w-md mx-auto">Никаких скрытых платежей — всё включено в единую комиссию</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {INCLUDED.map((item, i) => (
              <div key={item.title} className="flex gap-5 p-6 bg-[#f5ede1] rounded-2xl border border-[#e8d5c0]">
                <div className="flex-shrink-0 w-10 h-10 bg-[#e07b39] rounded-xl flex items-center justify-center">
                  <Icon name={item.icon} size={18} className="text-white" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[#c4a882] text-xs font-bold">0{i + 1}</span>
                    <h3 className="font-semibold text-[#3a2a1a]">{item.title}</h3>
                  </div>
                  <p className="text-[#9a7a5a] text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOOKING FORM */}
      <section id="booking" className="py-24 bg-[#3a2a1a]">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-block text-[#e07b39] text-sm font-semibold tracking-widest uppercase mb-4">Онлайн-запись</span>
            <h2 className="font-cormorant text-5xl font-bold text-[#faf7f2]">Запишитесь прямо сейчас</h2>
            <p className="text-[#c4a882] mt-4">Свяжусь с вами в течение часа для подтверждения</p>
          </div>

          {submitted ? (
            <div className="bg-[#4a3828] border border-[#e07b39]/30 rounded-2xl p-12 text-center">
              <div className="w-16 h-16 bg-[#e07b39]/20 rounded-full flex items-center justify-center mx-auto mb-5">
                <Icon name="CheckCircle" size={32} className="text-[#e07b39]" />
              </div>
              <h3 className="font-cormorant text-3xl font-bold text-[#faf7f2] mb-3">Заявка отправлена!</h3>
              <p className="text-[#c4a882]">Свяжусь с вами в ближайшее время. Спасибо за доверие!</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-[#4a3828] rounded-2xl p-8 md:p-10 border border-[#6a4c38] space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[#c4a882] text-sm mb-2 font-medium">Ваше имя *</label>
                  <input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                    placeholder="Например, Мария"
                    className="w-full bg-[#3a2a1a] border border-[#6a4c38] rounded-xl px-4 py-3 text-[#faf7f2] placeholder:text-[#7a5c48] focus:outline-none focus:border-[#e07b39] transition-colors" />
                </div>
                <div>
                  <label className="block text-[#c4a882] text-sm mb-2 font-medium">Телефон *</label>
                  <input required value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })}
                    placeholder="+7 (___) ___-__-__" type="tel"
                    className="w-full bg-[#3a2a1a] border border-[#6a4c38] rounded-xl px-4 py-3 text-[#faf7f2] placeholder:text-[#7a5c48] focus:outline-none focus:border-[#e07b39] transition-colors" />
                </div>
              </div>

              <div>
                <label className="block text-[#c4a882] text-sm mb-2 font-medium">Тип записи</label>
                <div className="grid grid-cols-2 gap-3">
                  {[["viewing", "Просмотр квартиры"], ["consultation", "Консультация"]].map(([val, lbl]) => (
                    <button key={val} type="button"
                      onClick={() => setForm({ ...form, type: val })}
                      className={`py-3 px-4 rounded-xl border text-sm font-medium transition-all ${form.type === val
                        ? "bg-[#e07b39] border-[#e07b39] text-white"
                        : "border-[#6a4c38] text-[#c4a882] hover:border-[#e07b39]/50"}`}>
                      {lbl}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-[#c4a882] text-sm mb-2 font-medium">Комментарий</label>
                <textarea value={form.comment} onChange={e => setForm({ ...form, comment: e.target.value })}
                  rows={3} placeholder="Укажите район, бюджет или интересующий объект..."
                  className="w-full bg-[#3a2a1a] border border-[#6a4c38] rounded-xl px-4 py-3 text-[#faf7f2] placeholder:text-[#7a5c48] focus:outline-none focus:border-[#e07b39] transition-colors resize-none" />
              </div>

              <button type="submit"
                className="w-full bg-[#e07b39] hover:bg-[#c96b2a] text-white font-semibold py-4 rounded-xl transition-all duration-200 shadow-lg text-base">
                Отправить заявку
              </button>
              <p className="text-center text-[#7a5c48] text-xs">Нажимая кнопку, вы соглашаетесь с обработкой персональных данных</p>
            </form>
          )}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 bg-[#faf7f2]">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block text-[#e07b39] text-sm font-semibold tracking-widest uppercase mb-4">FAQ</span>
            <h2 className="font-cormorant text-5xl font-bold text-[#3a2a1a]">Вопросы и ответы</h2>
          </div>
          <div className="space-y-3">
            {FAQ.map((item, i) => (
              <div key={i} className="bg-white border border-[#e8d5c0] rounded-2xl overflow-hidden">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-7 py-5 text-left hover:bg-[#fdf9f5] transition-colors">
                  <span className="font-semibold text-[#3a2a1a] pr-4">{item.q}</span>
                  <Icon name={openFaq === i ? "ChevronUp" : "ChevronDown"} size={18} className="text-[#e07b39] flex-shrink-0" />
                </button>
                {openFaq === i && (
                  <div className="px-7 pb-5 text-[#7a5c48] leading-relaxed text-sm border-t border-[#f0e4d4] pt-4">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-24 bg-[#f5ede1]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block text-[#e07b39] text-sm font-semibold tracking-widest uppercase mb-4">Контакты</span>
            <h2 className="font-cormorant text-5xl font-bold text-[#3a2a1a]">Свяжитесь со мной</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {[
              { icon: "Phone", title: "Телефон", val: "+7 (900) 123-45-67", href: "tel:+79001234567" },
              { icon: "Mail", title: "Email", val: "anna@realty.ru", href: "mailto:anna@realty.ru" },
              { icon: "MapPin", title: "Адрес", val: "Москва, ул. Тверская, 12", href: "#" },
            ].map((c) => (
              <a key={c.title} href={c.href}
                className="group flex flex-col items-center text-center p-8 bg-white rounded-2xl border border-[#e8d5c0] hover:border-[#e07b39]/40 hover:shadow-md transition-all">
                <div className="w-14 h-14 bg-[#e07b39]/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-[#e07b39]/20 transition-colors">
                  <Icon name={c.icon} size={22} className="text-[#e07b39]" />
                </div>
                <div className="text-sm text-[#9a7a5a] mb-1">{c.title}</div>
                <div className="font-semibold text-[#3a2a1a]">{c.val}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#2a1a0e] py-8 border-t border-[#4a3828]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-cormorant text-xl text-[#c4a882]">Анна Соколова — Риэлтор</span>
          <span className="text-[#7a5c48] text-sm">© 2024 Все права защищены</span>
          <a href="tel:+79001234567" className="text-[#e07b39] font-medium text-sm hover:text-[#c96b2a] transition-colors">
            +7 (900) 123-45-67
          </a>
        </div>
      </footer>
    </div>
  );
}