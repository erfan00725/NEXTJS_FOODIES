import React from "react";
import clasess from "./page.module.css";
import Link from "next/link";
import MealsGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/lib/meals";

const Meals = async () => {
  
}

const MealsPage = async () => {
  const meals = await getMeals();

  return (
    <>
      <header className={clasess.header}>
        <h1>
          Delicious meals, created
          <span className={clasess.highlight}>by you</span>
        </h1>

        <p className={clasess.cta}>
          <Link href="/meals/share">Share Your Favorite Recipe</Link>
        </p>
      </header>
      <main className={clasess.main}>
        <MealsGrid meals={meals} />
      </main>
    </>
  );
};

export default MealsPage;
