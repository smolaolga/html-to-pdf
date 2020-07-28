import React from "react";
import Section from "../../Section";
import portfolioMocks from "../../../mocks/portfolio";
import PortfolioItem from "./PortfolioItem";

const PropertyPortfolio = () => (
    <Section title="Property Portfolio: following table will NOT be split between pdf document pages">
        {portfolioMocks.length && (
            <table className="rows">
                <tr>
                    {portfolioMocks.map((portfolio, key) => (
                            <td className="row">
                                <PortfolioItem {...portfolio} />
                            </td>
                        )
                    )}
                </tr>
            </table>
        )}
        <span className="notes">
            <em>
                <sup>1</sup> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
            </em>
        </span>
    </Section>
);

export default PropertyPortfolio;
