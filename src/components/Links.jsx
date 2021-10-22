import React from 'react';
import { NavLink } from 'react-router-dom';

const links = [
  { url: '/search', text: ' 🔎 All' },
  { url: '/news', text: ' 📰 News' },
  { url: '/images', text: ' 📸 Images' },
  { url: '/videos', text: ' 📺 Videos' },
];

export const Links = () => (
  <div className="flex sm:justify-around justify-between items-center mt-4">
    {links.map(({ url, text }) => (
      <NavLink to={url} className="text-blue-700 border-b-2 sdark:text-blue-300 border-blue-700 pb-2 mr-5">{text}</NavLink>
    ))}
  </div>
);