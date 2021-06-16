import React, { useState } from "react";
import "./App.css";
import Menu from "./Menu/Menu";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
const App = () => {
  const [menuActive, setMenuActive] = useState(false);
  const items = [
    { value: "Home", href: "/main" },
    { value: "About", href: "/about" },
    { value: "Contacts", href: "/contacts" },
  ];
  return (
    <div className="app">
      <nav>
        <div className="burger-btn" onClick={() => setMenuActive(!menuActive)}>
          <span />
        </div>
      </nav>
      <Header />
      <main>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit cumque
          dignissimos assumenda, totam quod labore, nam optio, nemo praesentium
          autem ipsum vero voluptate omnis molestias consequatur in libero quia
          facere! Eum, sit voluptatibus sunt doloribus nobis placeat. Illo minus
          temporibus tempore voluptatum rem sint consequatur porro incidunt
          possimus nesciunt id doloribus earum cumque nam laudantium dolorum
          modi, voluptates suscipit. Voluptates. Quibusdam ipsum odit
          accusantium voluptates, quasi voluptate odio porro natus saepe aut
          vitae est nesciunt hic ipsa! Provident laudantium, accusantium quis
          tenetur sint nulla nobis voluptas est ea atque dolore. Eius dolor
          obcaecati cum repellendus odio, voluptatibus inventore consequatur
          doloremque, tenetur est voluptate debitis cupiditate, recusandae
          expedita fugiat perspiciatis? Sed odit error veritatis excepturi quas
          id cupiditate aut dolore dolorem. Reprehenderit placeat laboriosam
          illum dicta error a. Cumque ad dolor dignissimos, blanditiis nulla
          tenetur, et rerum voluptate, dolorum vero quam enim totam tempora?
          Exercitationem, recusandae inventore neque explicabo quo dolorum.
          Commodi, officiis! Accusantium vitae pariatur nihil aliquam qui iure
          repudiandae tempore voluptate facere neque, reiciendis soluta eius
          odio incidunt minima quam quis! Aspernatur sed sunt, accusantium modi
          esse ab nihil. Similique sequi consequatur aspernatur quo rem natus
          repudiandae, qui voluptate repellendus? Modi, veniam exercitationem.
          Assumenda suscipit, eos beatae aliquam a, ipsam nisi unde corporis
          molestiae illo, odit quam sunt eaque. Itaque numquam maxime nihil
          cupiditate dolor quis, tempora magni architecto unde qui, incidunt
          molestiae porro fugiat debitis. Earum quibusdam dolorem rem aperiam
          voluptatem. Tempore, nulla. Nisi soluta quia cum distinctio.
          Perferendis tempora quo itaque ex recusandae necessitatibus tempore,
          rerum doloremque pariatur temporibus optio cupiditate soluta
          repellendus voluptatum aliquam incidunt eveniet nisi numquam quam ipsa
          nostrum aspernatur architecto? Delectus, facilis tempora! Ipsam
          aspernatur minus, labore adipisci recusandae doloribus cum laborum
          exercitationem similique debitis.
        </p>
      </main>
      <Menu
        active={menuActive}
        setActive={setMenuActive}
        header={"Бургер меню"}
        items={items}
      />
      <Footer />
    </div>
  );
};

export default App;
