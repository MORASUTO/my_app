"use client"; // Нужен для useState
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    if (email) {
      alert(`Спасибо за подписку, ${email}!`);
      setEmail("");
    } else {
      alert("Пожалуйста, введите email.");
    }
  };

  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">
        Стань программистом за 30 дней!
      </h1>
      <Image
        src="/banner.png"
        alt="Баннер курса"
        width={600}
        height={300}
        className="mx-auto mb-6"
      />
      <p className="text-lg text-gray-700 mb-8">
        Запишись на курс и начни свой путь в IT!
      </p>
      <div className="card bg-base-100 shadow-xl max-w-md mx-auto">
        <div className="card-body">
          <h2 className="card-title">Подпишись на курс</h2>
          <input
            type="email"
            placeholder="Твой email"
            className="input input-bordered w-full mb-4"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="btn btn-primary" onClick={handleSubmit}>
            Записаться
          </button>
        </div>
      </div>
    </div>
  );
}