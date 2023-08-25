import { faker } from "@faker-js/faker";
import React from "react";

const FooterMenu = () => {
  return (
    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
      <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
        {faker.commerce.department()}
      </h2>
      <nav className="list-none mb-10">
        <li>
          <a className="text-gray-600 hover:text-gray-800">
            {faker.commerce.product()}
          </a>
        </li>
        <li>
          <a className="text-gray-600 hover:text-gray-800">
            {faker.commerce.product()}
          </a>
        </li>
        <li>
          <a className="text-gray-600 hover:text-gray-800">
            {faker.commerce.product()}
          </a>
        </li>
        <li>
          <a className="text-gray-600 hover:text-gray-800">
            {faker.commerce.product()}
          </a>
        </li>
      </nav>
    </div>
  );
}

export default FooterMenu;
