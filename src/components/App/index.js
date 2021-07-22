import { useEffect, useState } from "react";
import api from "../../lib/services/api";
import Card from "../Card";
import SearchBar from "../SearchBar";

import "./styles.css";

function App() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [data, setData] = useState();

  const onSearch = () => {
    setPage(1);

    api
      .search(query)
      .then((data) => {
        setData(data);
      })
      .catch(() => {});
  };

  useEffect(() => {
    api
      .search(query, page)
      .then((data) => {
        setData(data);
      })
      .catch(() => {});
  }, [page]);

  return (
    <div className="app">
      <SearchBar query={query} setQuery={setQuery} onSearch={onSearch} />
      <ul className="list">
        {data?.results.map((card) => (
          <Card
            key={card.id}
            imgSrc={card.urls.regular}
            title={`${card.user.name}: ${card.description}`}
            alt={card.description}
          />
        ))}
      </ul>

      <ul>
        {!!data &&
          new Array(data.total_pages).fill(null).map((_, index) => (
            <button
              key={index}
              className={`pagination__item ${
                index + 1 === page ? "active" : ""
              }`}
              onClick={() => {
                setPage(index + 1);
              }}
            >
              {index + 1}
            </button>
          ))}
      </ul>
    </div>
  );
}

export default App;
