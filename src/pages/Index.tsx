import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedFlavor, setSelectedFlavor] = useState<string | null>(null);

  const tobaccoMenu = [
    { id: 1, name: 'Двойное яблоко', description: 'Классический восточный вкус', price: 1200, category: 'Классика', intensity: 'Средняя' },
    { id: 2, name: 'Грейпфрут с мятой', description: 'Свежий цитрусовый микс', price: 1400, category: 'Свежесть', intensity: 'Легкая' },
    { id: 3, name: 'Ягодный микс', description: 'Малина, черника, ежевика', price: 1500, category: 'Ягоды', intensity: 'Средняя' },
    { id: 4, name: 'Тропический взрыв', description: 'Манго, маракуйя, ананас', price: 1600, category: 'Тропики', intensity: 'Яркая' },
    { id: 5, name: 'Шоколад с вишней', description: 'Десертный вкус', price: 1700, category: 'Десерт', intensity: 'Насыщенная' },
    { id: 6, name: 'Ледяной арбуз', description: 'Освежающий и прохладный', price: 1300, category: 'Свежесть', intensity: 'Легкая' },
  ];

  const pricingPlans = [
    {
      name: 'Стандарт',
      price: 1500,
      duration: '1 час',
      features: ['Кальян на выбор', 'Безлимит угля', 'Смена вкуса'],
      icon: 'Flame',
    },
    {
      name: 'Премиум',
      price: 2500,
      duration: '2 часа',
      features: ['Премиум табак', 'Безлимит угля', 'Смена вкуса', 'Фруктовая чаша'],
      icon: 'Crown',
      popular: true,
    },
    {
      name: 'VIP',
      price: 4000,
      duration: '3 часа',
      features: ['Эксклюзивные миксы', 'Безлимит угля', 'Смена вкуса', 'Фруктовая чаша', 'Закуски'],
      icon: 'Sparkles',
    },
  ];

  const gallery = [
    'https://cdn.poehali.dev/projects/0f02d91e-afb7-483c-99e4-a921dab3de50/files/da8280d9-e942-4658-848d-a8b767fbb621.jpg',
    'https://cdn.poehali.dev/projects/0f02d91e-afb7-483c-99e4-a921dab3de50/files/1189b31c-9f2b-4047-b67c-47111aea7206.jpg',
    'https://cdn.poehali.dev/projects/0f02d91e-afb7-483c-99e4-a921dab3de50/files/6552ef0c-2bae-4479-8c70-11809e2595e8.jpg',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              HOOKAH LOUNGE
            </h1>
            <div className="hidden md:flex gap-6">
              <a href="#menu" className="hover:text-primary transition-colors">Меню</a>
              <a href="#pricing" className="hover:text-primary transition-colors">Цены</a>
              <a href="#gallery" className="hover:text-primary transition-colors">Галерея</a>
              <a href="#booking" className="hover:text-primary transition-colors">Бронь</a>
              <a href="#contacts" className="hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button className="bg-primary hover:bg-primary/90">
              <Icon name="Phone" size={16} className="mr-2" />
              Позвонить
            </Button>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            <Badge variant="secondary" className="mb-4">
              <Icon name="Sparkles" size={14} className="mr-1" />
              Премиум кальянная
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Атмосфера, которая
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent"> дышит</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Авторские миксы, уютная атмосфера и безупречный сервис в сердце города
            </p>
            <div className="flex gap-4 justify-center pt-6">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <Icon name="Calendar" size={18} className="mr-2" />
                Забронировать столик
              </Button>
              <Button size="lg" variant="outline">
                <Icon name="Menu" size={18} className="mr-2" />
                Посмотреть меню
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="menu" className="py-20 px-4 bg-card/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Меню табака и миксов</h2>
            <p className="text-muted-foreground text-lg">Более 50 вкусов и авторских миксов</p>
          </div>

          <Tabs defaultValue="all" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-5 mb-8">
              <TabsTrigger value="all">Все</TabsTrigger>
              <TabsTrigger value="Классика">Классика</TabsTrigger>
              <TabsTrigger value="Свежесть">Свежесть</TabsTrigger>
              <TabsTrigger value="Тропики">Тропики</TabsTrigger>
              <TabsTrigger value="Десерт">Десерт</TabsTrigger>
            </TabsList>

            {['all', 'Классика', 'Свежесть', 'Тропики', 'Десерт'].map((category) => (
              <TabsContent key={category} value={category}>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {tobaccoMenu
                    .filter((item) => category === 'all' || item.category === category)
                    .map((item) => (
                      <Card
                        key={item.id}
                        className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                        onClick={() => setSelectedFlavor(item.name)}
                      >
                        <CardHeader>
                          <div className="flex justify-between items-start mb-2">
                            <CardTitle className="text-xl">{item.name}</CardTitle>
                            <Badge variant="outline">{item.intensity}</Badge>
                          </div>
                          <CardDescription>{item.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="flex justify-between items-center">
                            <span className="text-2xl font-bold text-primary">{item.price} ₽</span>
                            <Button size="sm" variant="secondary">
                              Выбрать
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      <section id="pricing" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Тарифы</h2>
            <p className="text-muted-foreground text-lg">Выберите оптимальный вариант для вас</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan) => (
              <Card
                key={plan.name}
                className={`relative hover:shadow-xl transition-all duration-300 ${
                  plan.popular ? 'border-primary border-2 scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-primary to-accent">Популярный</Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-8">
                  <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name={plan.icon} size={32} className="text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="pt-4">
                    <span className="text-5xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground"> ₽</span>
                  </div>
                  <p className="text-muted-foreground">{plan.duration}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <Icon name="Check" size={18} className="text-primary" />
                      <span>{feature}</span>
                    </div>
                  ))}
                  <Button className="w-full mt-6" variant={plan.popular ? 'default' : 'outline'}>
                    Выбрать тариф
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 px-4 bg-card/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Атмосфера заведения</h2>
            <p className="text-muted-foreground text-lg">Погрузитесь в уютную атмосферу нашего лаунжа</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {gallery.map((image, idx) => (
              <div
                key={idx}
                className="relative overflow-hidden rounded-lg aspect-square group cursor-pointer"
              >
                <img
                  src={image}
                  alt={`Интерьер ${idx + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <Icon name="ZoomIn" size={24} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="booking" className="py-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <Card className="shadow-xl">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl">Бронирование столика</CardTitle>
              <CardDescription className="text-base">
                Забронируйте столик и внесите депозит онлайн
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Ваше имя</Label>
                  <Input id="name" placeholder="Иван Иванов" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Телефон</Label>
                  <Input id="phone" placeholder="+7 (___) ___-__-__" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="date">Дата</Label>
                  <Input id="date" type="date" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="time">Время</Label>
                  <Input id="time" type="time" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="guests">Количество гостей</Label>
                <Input id="guests" type="number" min="1" max="20" placeholder="2" />
              </div>

              <div className="bg-muted/50 p-4 rounded-lg space-y-3">
                <h3 className="font-semibold flex items-center gap-2">
                  <Icon name="CreditCard" size={18} />
                  Оплата депозита
                </h3>
                <div className="flex gap-2">
                  <Button variant="outline" className="flex-1">
                    <Icon name="Wallet" size={16} className="mr-2" />
                    50% (1000 ₽)
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <Icon name="CreditCard" size={16} className="mr-2" />
                    100% (2000 ₽)
                  </Button>
                </div>
              </div>

              <Dialog>
                <DialogTrigger asChild>
                  <Button size="lg" className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                    <Icon name="Calendar" size={18} className="mr-2" />
                    Забронировать и оплатить
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Оплата депозита</DialogTitle>
                    <DialogDescription>
                      Выберите способ оплаты для завершения бронирования
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4 py-4">
                    <Button variant="outline" className="w-full justify-start h-14">
                      <Icon name="CreditCard" size={20} className="mr-3" />
                      <span>Банковская карта</span>
                    </Button>
                    <Button variant="outline" className="w-full justify-start h-14">
                      <Icon name="Wallet" size={20} className="mr-3" />
                      <span>СБП (Система быстрых платежей)</span>
                    </Button>
                    <Button variant="outline" className="w-full justify-start h-14">
                      <Icon name="Smartphone" size={20} className="mr-3" />
                      <span>Google Pay / Apple Pay</span>
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-card/50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Контакты</h2>
            <p className="text-muted-foreground text-lg">Мы всегда рады вас видеть</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="MapPin" size={20} className="text-primary" />
                  Адрес
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-lg">г. Москва, ул. Примерная, д. 42</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Icon name="Clock" size={18} className="text-muted-foreground" />
                    <span>Пн-Чт: 14:00 - 02:00</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Clock" size={18} className="text-muted-foreground" />
                    <span>Пт-Вс: 14:00 - 06:00</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Phone" size={20} className="text-primary" />
                  Связь
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Icon name="Phone" size={18} className="text-muted-foreground" />
                    <a href="tel:+79991234567" className="text-lg hover:text-primary transition-colors">
                      +7 (999) 123-45-67
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Mail" size={18} className="text-muted-foreground" />
                    <a href="mailto:info@hookah-lounge.ru" className="hover:text-primary transition-colors">
                      info@hookah-lounge.ru
                    </a>
                  </div>
                </div>
                <div className="flex gap-3 pt-2">
                  <Button size="icon" variant="outline">
                    <Icon name="Instagram" size={18} />
                  </Button>
                  <Button size="icon" variant="outline">
                    <Icon name="Send" size={18} />
                  </Button>
                  <Button size="icon" variant="outline">
                    <Icon name="MessageCircle" size={18} />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-card border-t py-12 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            HOOKAH LOUNGE
          </h2>
          <p className="text-muted-foreground mb-6">
            Создано с любовью к кальянной культуре
          </p>
          <div className="flex justify-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-primary transition-colors">Правила заведения</a>
            <a href="#" className="hover:text-primary transition-colors">Вакансии</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;