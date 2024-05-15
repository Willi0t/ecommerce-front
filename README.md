<a name="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
  <h3 align="center">E-commerce Platform</h3>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project!
![e-commerce-snippet](https://github.com/Willi0t/ecommerce-front/assets/113394429/33ca9fba-046e-4be2-b3a0-985abffa6bce)

This e-commerce project consists of two separate applications: [E-commerce Front](https://github.com/Willi0t/ecommerce-front) and [E-commerce Admin](https://github.com/Willi0t/ecommerce-admin). The store offers a simplified tech shop experience, featuring a variety of merchandise including phones, tablets, and laptops. The front end of the store is built using Next.js and showcases products with a user-friendly interface, utilizing Styled Components to demonstrate different styling approaches. The store includes a fully functional payment system powered by Stripe, ensuring secure and seamless transactions.

When testing the payment and order system, use a card number, such as 4242 4242 4242 4242. Enter the card number in the Dashboard or in any payment form.

- Use a valid future date, such as 12/34.
- Use any three-digit CVC (four digits for American Express cards).
- Use any value you like for other form fields.

[Stripe Testing Documentation](https://docs.stripe.com/testing)

The [E-commerce Admin](https://github.com/Willi0t/ecommerce-admin) application, also built with Next.js, provides a comprehensive admin panel for managing the store's inventory and processing orders. It allows administrators to easily add, update, and remove products, as well as handle customer orders efficiently. This dual-application setup ensures a smooth and efficient experience for both customers and store managers. You can explore the admin panel project in more detail [here](https://github.com/Willi0t/ecommerce-admin).


<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Built With

<a href="https://nextjs.org" target="_blank">
  <img src="https://img.shields.io/badge/nextjs-white?logo=nextdotjs&color=%2341444B" alt="Next.js Badge" style="width: auto; height: 30px;">
</a>

I chose Next.js for this project because it’s a powerful framework for React that brings a lot to the table. First off, it offers server-side rendering and static site generation, which means our web pages load faster and perform better in search engine rankings.Additionally, Next.js simplifies complex tasks like routing and API handling


</br>

<a href="https://stripe.com" target="_blank">
  <img src="https://img.shields.io/badge/stripe-white?logo=stripe&color=%23bae1ff" alt="Stripe Badge" style="width: auto; height: 30px;">
</a>

For handling payments, I went with Stripe. It’s known for its security and reliability, which is essential for managing transactions. Integrating Stripe is straightforward thanks to its well-documented API. It supports a wide range of payment methods and currencies, making it versatile for different users. Whether we’re dealing with small or large transactions, Stripe scales effortlessly, ensuring we can handle any volume of payments smoothly.

</br>

<a href="https://www.mongodb.com" target="_blank">
  <img src="https://img.shields.io/badge/MongoDB-white?logo=mongodb&color=%23a8dea0" alt="MongoDB Badge" style="width: auto; height: 30px;">
</a>

When it came to choosing a database, MongoDB was the clear choice. Its schema-less design means we can iterate quickly and adapt our data model as needed without a lot of hassle. MongoDB excels at handling large amounts of data and traffic, which is great for scalability. It’s also very developer-friendly, with simple queries and efficient data retrieval. This means we can focus more on building features rather than managing database constraints.

</br>

<a href="https://styled-components.com" target="_blank">
  <img src="https://img.shields.io/badge/Styled%20Components-white?logo=styledcomponents&color=%23ffdfba" alt="Styled Components Badge" style="width: auto; height: 30px;">
</a>

For styling, I opted for Styled Components. This library lets us write CSS directly within our JavaScript, making it easy to scope styles to individual components. This approach keeps our styling modular and reusable, which is great for maintaining the codebase. Styled Components also support theming and dynamic styling, allowing us to create a more cohesive and adaptable design system. The developer experience is fantastic too, with features like auto-completion and syntax highlighting in modern IDEs.


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

First, run

```bash
npm install
# or
npm run dev
#or
yarn dev
# or
pnpm dev
#
```

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

-   npm
    ```sh
    npm install npm@latest -g
    ```

### Installation

_Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._

1. Get a free API Key at [https://example.com](https://example.com)
2. Clone the repo
    ```sh
    git clone https://github.com/your_username_/Project-Name.git
    ```
3. Install NPM packages
    ```sh
    npm install
    ```
4. Enter your API in `config.js`
    ```js
    const API_KEY = "ENTER YOUR API";
    ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- Usage -->

## Usage

To use the Application you simply add any of the products on display to the cart. in the cart page you can the modify your order to add more or less of the same products. when you are happy with your order fill in any order information on the right. When testing the payment and order system, use a card number, such as 4242 4242 4242 4242. Enter the card number in the Dashboard or in any payment form.

- Use a valid future date, such as 12/34.
- Use any three-digit CVC (four digits for American Express cards).
- Use any value you like for other form fields.

[Stripe Testing Documentation](https://docs.stripe.com/testing)

<!-- CONTACT -->

## Contact

William Sinclair's social media & contact

<a href="https://www.linkedin.com/in/william-sinclair-2bab18153/" target="_blank">
  <img src="https://img.shields.io/badge/linked%20in-white?logo=linkedin&color=%230762C8" alt="LinkedIn Badge" style="width: auto; height: 35px;">
</a>
</br>
</br>
<a href="mailto:William.sinclair92@gmail.com" target="_blank">
  <img src="https://img.shields.io/badge/Gmail-white?logo=gmail&color=%23e87066" alt="Gmail Badge" style="width: auto; height: 35px;">
</a>
</br>
</br>
<a href="https://github.com/Willi0t" target="_blank">
  <img src="https://img.shields.io/badge/GitHub-white?logo=github&color=%2341444B" alt="GitHub Badge" style="width: auto; height: 35px;">
</a>
</br>
</br>
<a href="https://www.facebook.com/the.rune.is.on.fire/" target="_blank">
  <img src="https://img.shields.io/badge/facebook-white?logo=facebook&color=%233b5998" alt="Facebook Badge" style="width: auto; height: 35px;">
</a>







Project Link: [https://github.com/your_username/repo_name](https://github.com/your_username/repo_name)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

Use this space to list resources you find helpful and would like to give credit to. I've included a few of my favorites to kick things off!

-   [Choose an Open Source License](https://choosealicense.com)
-   [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet)
-   [Malven's Flexbox Cheatsheet](https://flexbox.malven.co/)
-   [Malven's Grid Cheatsheet](https://grid.malven.co/)
-   [Img Shields](https://shields.io)
-   [GitHub Pages](https://pages.github.com)
-   [Font Awesome](https://fontawesome.com)
-   [React Icons](https://react-icons.github.io/react-icons/search)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com
