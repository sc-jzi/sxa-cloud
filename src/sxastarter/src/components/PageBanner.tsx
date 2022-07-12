import React from 'react';
import { Field, ImageField, Text } from '@sitecore-jss/sitecore-jss-nextjs';

export type RichTextProps = {
  params: { [key: string]: string };
  fields: {
    Title: Field<string>,
    BannerImage: ImageField
  }
};

export const Default = (props: RichTextProps): JSX.Element => {
  return (
    <div className="page-title-area item-bg3">
      <div className="container">
        <div className="page-title-content">
          {/* <h2><Text field={props.fields.Title} /></h2> */}
          <h2>My title</h2>
          <ul>
            <li>
              <a href="/">
                Home
              </a>
            </li>
            {/* <li><Text field={props.fields.Title} /></li> */}
            <li>Another title field</li>
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
