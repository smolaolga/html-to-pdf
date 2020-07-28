import { PAGE_BREAK_CLASS } from "../common/consts";
import React from "react";

const Section = ({ mainClassName, title, subTitle, children }) => (
    <>
        <div className={PAGE_BREAK_CLASS}></div>
        <section>
            <h2>{title}</h2>
            {subTitle && (
                <div className="sub-title">{subTitle}</div>
            )}
            <main className={mainClassName}>{children}</main>
        </section>
    </>
);

export default Section;
