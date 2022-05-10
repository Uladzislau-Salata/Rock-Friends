import React from "react";
import "./Menu.css";

function Menu() {
  return (
    <section id="menu">
      <div id="container">
        <div className="menu-title">
          <strong>01</strong>
          <h1 className="heading">NASZE MENU</h1>
          <hr />
        </div>
        <div className="menu-center">
          <div className="drinks">
            <div>
              <b>Бочковое Пиво</b>
              <br />
              Tyskie Classic 6/8 зл.
              <br />
              Kozel Светлое 7/10 зл.
              <br />
              Каждую среду Tyskie Classic 6 зл. за 0,5 л
              <br />
              <br />
              <b>Бутылочное пиво 10-14 зл.</b>
              <br />
              Большой выбор крафтовых пивоварен
              <br />
              <br />
              <b>Виски</b>
              <br />
              <div className="whisky_left">
                <div>
                  Ballantine’s Finest 10 зл.
                  <br />
                  Ballantine’s Hard Fired 10 зл.
                  <br />
                  Ballantine’s 12 лет 16 зл.
                </div>
              </div>
              <div className="whisky_right">
                <div>
                  Glenlivet 12 лет 24 зл.
                  <br />
                  Glenfiddich 12 лет 24 зл.
                  <br />
                  Lagavulin 16 лет 30 зл.
                </div>
              </div>
              <b>По четвергам Ballantine's 8 зл.</b>
              <br />
              <br />
              <b>Наша специализация - ИНФУЗИЯ!</b>
              <br />
              Мы сочетаем сезонные фрукты с алкоголем и создаем ваши любимые
              вкусы.
              <br />
              Доступен для шотов или в качестве основы для наших оригинальных
              коктейлей.
              <br />
              <br />
              Коктейли 17 зл. | Шоты 8-10 зл.
              <br />
              <br />
              <b>Дегустация (пн-чт) 5 шотов / 20 зл.</b>
            </div>
          </div>
          <div className="foods">
            <div>
              <br />
              <b>Горячие багеты 10 зл.</b>
              <br />
              Курица, вяленые помидоры, оливки и руккола
              <br />
              Сыр с плесенью, луковый чатни, орехи и руккола
              <br />
              Сыр с плесенью, луковый чатни, орехи и руккола
              <br />
              <br />
              <b>Тосты 4 шт 10 зл.</b>
              <br />
              Сыр, салями, оливки и соус
              <br />
              Сыр, ветчина, вяленые помидоры и соус
              <br />
              Сыр, сыр с плесенью, фундук и соус
              <br />
              <br />
              <b>Сало домашнее 10 зл.</b>
              <br/>
              <br/>
              <b>Сельдь 10 зл.</b>
              <br/>
              <br/>
              <b>Начос + сальса 9 зл.</b>
              <br/>
              <br/>
              Чипсы | Арахис | Хлебные палочки / 5 зл.
              <br/>
              <br/>
              <b>Мы предлагаем специальное меню для групповых заказов</b>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Menu;
