import React, { useState } from "react";
import { useTranslation } from "react-i18next";

export default function Result({ data }) {

  const {t} = useTranslation()

  return (
    <div className="container mx-auto p-6">
      <div className="bg-teal-100  rounded-lg p-6 ">
        <h2 className="text-xl text-center">{t("result")}</h2>
        <div className="text-center text-red-500">{data?.error?.info}</div>
        <p className="text-right">
          ip: {data?.ip} | type: {data?.type}
        </p>
        <div className="border-b-2 border-teal-400 my-2"></div>

        <div className="space-y-4 text-center">
          <p>
            <span className="font-semibold">{t("address")}: </span>{" "}
            {data?.continent_name}, {data?.country_name}, {data?.region_name},{" "}
            {data?.city}, zip: {data?.zip}
          </p>
          <p>
            <span className="font-semibold">{t("capital")}: </span>{" "}
            <img
              className="w-8 h-6 inline mx-2"
              src={data?.location?.country_flag}
              alt="country flag"
            />{" "}
            {data?.location?.capital}
          </p>
          <p>
            <span className="font-semibold">{t("Location")}: </span> {data?.latitude}{" "}
            {data?.longitude}
          </p>
          <p>
            <span className="font-semibold">{t("current_time")}: </span>
            {new Date(data?.time_zone?.current_time).toLocaleString("ru-RU")}
          </p>
          <p>
            <span className="font-semibold">{t("currency")}: </span>
            {data?.currency?.symbol} | {data?.currency?.code} |{" "}
            {data?.currency?.name}
          </p>
          <p>
            <span className="font-semibold">{t("connection")}: </span>
            {data?.connection?.asn}, {data?.connection?.isp}
          </p>
          <p>
            <span className="font-semibold">{t("calling_code")}: </span>+
            {data?.location?.calling_code}
          </p>
          <div>
            <span className="font-semibold">{t("languages")}: </span>
            <ul className="inline">
              {data.location?.languages?.map((item) => (
                <li className="inline" key={item.name}>
                  {item.name},{" "}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
