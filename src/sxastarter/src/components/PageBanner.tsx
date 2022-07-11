import React from 'react';
import { Field } from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  Title: Field<string>;
}

export type RichTextProps = {
  params: { [key: string]: string };
  fields: Fields;
};

export const Default = (props: RichTextProps): JSX.Element => {
  return (
    <div className="page-title-area item-bg3">
      <div className="container">
        <div className="page-title-content">
          <h2><Text field={props.fields.Title} /></h2>
          <ul>
            <li>
              <a href="/">
                Home
              </a>
            </li>
            <li><Text field={props.fields.Title} /></li>
          </ul>
        </div>
      </div>

      <div className="lines">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </div>
  );
};
