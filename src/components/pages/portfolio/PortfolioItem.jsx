import React from "react";
import InvestmentHighlights from "./InvestmentHighlights";
import Header from "./Header";

const PortfolioItem = ({ header, img, investmentHighlights, data, link }) => (
    <>
        <Header {...header} />
        <div className="img">
            <img src={img.url} alt={img.title} />
        </div>
        {data.length && (
            <div className="table">
                <table>
                    {data.map(({ data, title }, key) => (
                        <tr key={key}>
                            <th scope="row">{title}</th>
                            <td>{data}</td>
                        </tr>
                    ))}
                </table>
                <InvestmentHighlights items={investmentHighlights} />
            </div>
        )}
        <a className="link-more" href={link}>
            View More Info
        </a>
    </>
);

export default PortfolioItem;
