import React, { useState } from "react";
import { useRouter } from "next/router";

const Searchbar = () => {
  const router = useRouter();
  const { search } = router.query;
  const [query, setQuery] = useState(search);

  const handleParam = () => (e: any) => {
    const value = e.target.value;
    setQuery(value);
  };
  // Form Submit function
  const formSubmit = (e: any) => {
    e.preventDefault();
    if (query) {
      router.push(`/items?search=${query}`);
    }
  };
  return (
    <a
      role="button"
      className="navbar-item control"
      aria-label="menu"
      aria-expanded="true"
      data-target="navbarBasicExample"
    >
      <form onSubmit={formSubmit} className="full-width">
        <div className="field">
          <label className="label"></label>
          <p className="control has-icons-right">
            <input
              type="text"
              name="name"
              placeholder="Buscar productos, marcas y más..."
              className="input"
              value={query}
              onChange={handleParam()}
            />
            <span className="icon is-right">
              <i className="fas fa-search"></i>
            </span>
          </p>
        </div>
      </form>
    </a>
  );
};
export default Searchbar;
