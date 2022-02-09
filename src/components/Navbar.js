import React, { useState } from "react";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [selectedLng, setSelectedLng] = useState(null);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setSelectedLng(lng);
  };

  return (
    <div className=" container mx-auto   p-4 flex justify-between items-center text-teal-400 ">
      <h2 className="uppercase text-4xl ">ip-info</h2>
      <p className="text-center text-xl text-teal-200 ">{t("title")}</p>
      <ul className="">
        {["en", "ru", "uz"].map((lng) => (
          <li
            onClick={() => changeLanguage(lng)}
            className={`inline m-2 uppercase cursor-pointer ${
              selectedLng === lng ? "underline" : null
            }`}
            key={lng}
          >
            {lng}
          </li>
        ))}
      </ul>
    </div>
  );
}
