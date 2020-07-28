import React from "react";

const InvestmentHighlights = ({ items = [] }) => (
    <figure>
        <figcaption>Investment Highlights</figcaption>
        <ul>{items.length && items.map((item, key) => <li key={key}>{item}</li>)}</ul>
    </figure>
);

export default InvestmentHighlights;
