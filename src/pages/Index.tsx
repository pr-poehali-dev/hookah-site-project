import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import Icon from '@/components/ui/icon';

interface TobaccoItem {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  intensity: string;
}

const Index = () => {
  const [activeCategory, setActiveCategory] = useState('Все');
  const [selectedTariff, setSelectedTariff] = useState<string | null>(null);
  const [bookingData, setBookingData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    deposit: 50
  });
  const { toast } = useToast();

  const tobaccoMenu: TobaccoItem[] = [
    { id: 1, name: 'Двойное яблоко', description: 'Классический восточный вкус', price: 1200, category: 'Классика', intensity: 'Средняя' },
    { id: 2, name: 'Грейпфрут с мятой', description: 'Свежий цитрусовый микс', price: 1400, category: 'Свежесть', intensity: 'Легкая' },
    { id: 3, name: 'Ягодный микс', description: 'Малина, черника, ежевика', price: 1500, category: 'Ягоды', intensity: 'Средняя' },
    { id: 4, name: 'Тропический взрыв', description: 'Манго, маракуйя, ананас', price: 1600, category: 'Тропики', intensity: 'Яркая' },
    { id: 5, name: 'Шоколад с вишней', description: 'Десертный вкус', price: 1700, category: 'Десерт', intensity: 'Насыщенная' },
    { id: 6, name: 'Ледяной арбуз', description: 'Освежающий и прохладный', price: 1300, category: 'Свежесть', intensity: 'Легкая' },
    { id: 7, name: 'Мята', description: 'Освежающая классика', price: 1100, category: 'Классика', intensity: 'Легкая' },
    { id: 8, name: 'Персик с малиной', description: 'Сладкий фруктовый микс', price: 1450, category: 'Ягоды', intensity: 'Средняя' },
  ];

  const categories = ['Все', 'Классика', 'Свежесть', 'Ягоды', 'Тропики', 'Десерт'];

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

  const filteredMenu = activeCategory === 'Все' 
    ? tobaccoMenu 
    : tobaccoMenu.filter(item => item.category === activeCategory);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!bookingData.name || !bookingData.phone || !bookingData.date || !bookingData.time) {
      toast({
        title: "Ошибка",
        description: "Заполните все обязательные поля",
        variant: "destructive"
      });
      return;
    }

    const depositAmount = selectedTariff 
      ? pricingPlans.find(p => p.name === selectedTariff)?.price || 2000
      : 2000;
    
    const finalDeposit = (depositAmount * bookingData.deposit) / 100;

    toast({
      title: "Бронирование принято!",
      description: `К оплате: ${finalDeposit} ₽. Мы свяжемся с вами для подтверждения.`,
    });

    console.log('Booking data:', { ...bookingData, tariff: selectedTariff, depositAmount: finalDeposit });
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="sticky top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              HOOKAH LOUNGE
            </h1>
            <div className="hidden md:flex gap-6 items-center">
              <button onClick={() => scrollToSection('menu')} className="hover:text-primary transition-colors">
                Меню
              </button>
              <button onClick={() => scrollToSection('pricing')} className="hover:text-primary transition-colors">
                Цены
              </button>
              <button onClick={() => scrollToSection('gallery')} className="hover:text-primary transition-colors">
                Галерея
              </button>
              <button onClick={() => scrollToSection('booking')} className="hover:text-primary transition-colors">
                Бронь
              </button>
              <button onClick={() => scrollToSection('contacts')} className="hover:text-primary transition-colors">
                Контакты
              </button>
            </div>
            <Button className="bg-primary hover:bg-primary/90">
              <Icon name="Phone" size={16} className="mr-2" />
              +7 (999) 123-45-67
            </Button>
          </div>
        </div>
      </nav>

      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Премиум кальянная
              <br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                в центре Москвы
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Авторские миксы табака, уютная атмосфера и профессиональный сервис
            </p>
            <div className="flex gap-4 justify-center pt-6">
              <Button size="lg" onClick={() => scrollToSection('booking')} className="bg-primary hover:bg-primary/90">
                <Icon name="Calendar" size={18} className="mr-2" />
                Забронировать
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection('menu')}>
                Посмотреть меню
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="menu" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Меню табака</h2>
            <p className="text-muted-foreground text-lg">Выберите свой идеальный вкус</p>
          </div>

          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? 'default' : 'outline'}
                onClick={() => setActiveCategory(category)}
                className="transition-all"
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {filteredMenu.map((item) => (
              <Card key={item.id} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
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
                    <Badge>{item.category}</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Тарифы</h2>
            <p className="text-muted-foreground text-lg">Выберите подходящий вариант</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan) => (
              <Card
                key={plan.name}
                className={`relative transition-all duration-300 cursor-pointer ${
                  plan.popular ? 'border-primary border-2' : ''
                } ${selectedTariff === plan.name ? 'ring-2 ring-primary' : ''}`}
                onClick={() => setSelectedTariff(plan.name)}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-primary to-accent">Популярный</Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-6">
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
                <CardContent className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <Icon name="Check" size={18} className="text-primary flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Атмосфера</h2>
            <p className="text-muted-foreground text-lg">Посмотрите на наше заведение</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {gallery.map((image, idx) => (
              <div
                key={idx}
                className="relative overflow-hidden rounded-lg aspect-square group"
              >
                <img
                  src={image}
                  alt={`Интерьер ${idx + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="booking" className="py-16 px-4">
        <div className="container mx-auto max-w-2xl">
          <Card className="shadow-xl">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl">Бронирование</CardTitle>
              <CardDescription className="text-base">
                Заполните форму и выберите депозит
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleBooking} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Ваше имя *</Label>
                    <Input
                      id="name"
                      placeholder="Иван Иванов"
                      value={bookingData.name}
                      onChange={(e) => setBookingData({...bookingData, name: e.target.value})}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Телефон *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+7 (999) 123-45-67"
                      value={bookingData.phone}
                      onChange={(e) => setBookingData({...bookingData, phone: e.target.value})}
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="date">Дата *</Label>
                    <Input
                      id="date"
                      type="date"
                      value={bookingData.date}
                      onChange={(e) => setBookingData({...bookingData, date: e.target.value})}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="time">Время *</Label>
                    <Input
                      id="time"
                      type="time"
                      value={bookingData.time}
                      onChange={(e) => setBookingData({...bookingData, time: e.target.value})}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="guests">Количество гостей</Label>
                  <Input
                    id="guests"
                    type="number"
                    min="1"
                    max="20"
                    value={bookingData.guests}
                    onChange={(e) => setBookingData({...bookingData, guests: e.target.value})}
                  />
                </div>

                {selectedTariff && (
                  <div className="bg-primary/10 p-4 rounded-lg">
                    <p className="text-sm font-semibold">Выбран тариф: {selectedTariff}</p>
                  </div>
                )}

                <div className="bg-muted/50 p-4 rounded-lg space-y-3">
                  <Label>Депозит</Label>
                  <div className="flex gap-2">
                    <Button
                      type="button"
                      variant={bookingData.deposit === 50 ? 'default' : 'outline'}
                      className="flex-1"
                      onClick={() => setBookingData({...bookingData, deposit: 50})}
                    >
                      50%
                    </Button>
                    <Button
                      type="button"
                      variant={bookingData.deposit === 100 ? 'default' : 'outline'}
                      className="flex-1"
                      onClick={() => setBookingData({...bookingData, deposit: 100})}
                    >
                      100%
                    </Button>
                  </div>
                </div>

                <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-primary to-secondary">
                  <Icon name="Calendar" size={18} className="mr-2" />
                  Забронировать
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="contacts" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Контакты</h2>
            <p className="text-muted-foreground text-lg">Приходите к нам</p>
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

      <footer className="bg-card border-t py-8 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-xl font-bold mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            HOOKAH LOUNGE
          </h2>
          <p className="text-muted-foreground text-sm">
            © 2025 Все права защищены
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
