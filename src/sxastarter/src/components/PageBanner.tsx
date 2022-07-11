import React from 'react';
import { Field, ImageField, Text } from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  Title: Field<string>;
  BannerImage: ImageField
}

export type PageBannerProps = {
  params: { [key: string]: string };
  fields: Fields;
};

export const Default = (props: PageBannerProps): JSX.Element => {
  return (
    <div className={`page-title-area item-bg3`} style={{ backgroundImage: `url(${props.fields.BannerImage.value.src})` }}>
      <div className="container">
        <div className="page-title-content">
          <h2><Text field={props.fields.Title} /></h2>
          <ul>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
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
