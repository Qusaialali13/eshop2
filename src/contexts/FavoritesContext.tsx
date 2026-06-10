'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { CharmDesign } from '@/types';

interface FavoritesContextType {
  favorites: CharmDesign[];
  addToFavorites: (design: CharmDesign) => void;
  removeFromFavorites: (id: string) => void;
  isFavorite: (id: string) => boolean;
  getFavoriteById: (id: string) => CharmDesign | undefined;
  clearFavorites: () => void;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (context === undefined) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
};

interface FavoritesProviderProps {
  children: ReactNode;
}

export const FavoritesProvider: React.FC<FavoritesProviderProps> = ({ children }) => {
  const [favorites, setFavorites] = useState<CharmDesign[]>(() => {
    if (typeof window !== 'undefined') {
      const savedFavorites = localStorage.getItem('luxcharms_favorites');
      return savedFavorites ? JSON.parse(savedFavorites) : [];
    }
    return [];
  });

  // Save favorites to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('luxcharms_favorites', JSON.stringify(favorites));
  }, [favorites]);

  const addToFavorites = (design: CharmDesign) => {
    setFavorites((prev) => {
      if (prev.some((fav) => fav.id === design.id)) {
        return prev;
      }
      return [...prev, { ...design, updatedAt: Date.now() }];
    });
  };

  const removeFromFavorites = (id: string) => {
    setFavorites((prev) => prev.filter((fav) => fav.id !== id));
  };

  const isFavorite = (id: string) => {
    return favorites.some((fav) => fav.id === id);
  };

  const getFavoriteById = (id: string) => {
    return favorites.find((fav) => fav.id === id);
  };

  const clearFavorites = () => {
    setFavorites([]);
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite,
        getFavoriteById,
        clearFavorites,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};