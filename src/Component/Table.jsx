import React, { useState } from 'react';

const Table = () => {
  const [sortedData, setSortedData] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc');

  const data = [
    { date: "2022-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-02", views: 150, article: "Article 2" },
    { date: "2023-09-02", views: 120, article: "Article 3" },
    { date: "2020-09-03", views: 200, article: "Article 4" }
  ];

  const sortByDate = () => {
    const order = sortOrder === 'asc' ? 1 : -1;
    const sorted = data.slice().sort((a, b) => {
      if (a.date === b.date) {
        return (a.views - b.views) * order;
      }
      return new Date(b.date) - new Date(a.date);
    });
    setSortedData(sorted);

  };

  const sortByViews = () => {
    const order = sortOrder === 'asc' ? 1 : -1;
    const sorted = data.slice().sort((a, b) => {
      if (a.views === b.views) {
        return new Date(b.date) - new Date(a.date);
      }
      return (a.views - b.views) * order;
    });
    setSortedData(sorted);

  };

  const toggleSortOrder = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  return (
    <div>
      <h1>Date and Views Table</h1>
      <div>
        <button onClick={() => { sortByDate(); toggleSortOrder(); }}>Sort by Date</button>
        <button onClick={() => { sortByViews(); toggleSortOrder(); }}>Sort by Views</button>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Views</th>
              <th>Article</th>
            </tr>
          </thead>
          <tbody>
            {sortedData ? (
              sortedData.map((rows, idx) => (
                <tr key={idx}>
                  <td>{rows.date}</td>
                  <td>{rows.views}</td>
                  <td>{rows.article}</td>
                </tr>
              ))
            ) : (
              data.map((rows, idx) => (
                <tr key={idx}>
                  <td>{rows.date}</td>
                  <td>{rows.views}</td>
                  <td>{rows.article}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
