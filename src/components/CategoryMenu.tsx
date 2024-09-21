import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../redux/store";
import { fetchGames } from "../redux/gameSlice";
import styles from "../styles/CategoryMenu.module.scss";
import Link from 'next/link';

export default function CategoryMenu() {
  const dispatch = useDispatch<AppDispatch>();
  const categories = useSelector((state: RootState) => state.games.categories);

  const handleCategoryClick = (categoryId: string) => {
    dispatch(fetchGames({ category: categoryId }));
  };

  return (
    <nav className={styles.categoryMenu}>
      <ul>
        {categories.map((category: any) => (
          <li key={category.id}>
            <Link href={`/category/${category.name}`}>
              <button onClick={() => handleCategoryClick(category.id)}>
                {category.name}
              </button>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
