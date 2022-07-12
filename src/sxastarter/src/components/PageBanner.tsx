import React from 'react';
import { Field } from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  Title: Field<string>;
}

export type PageBannerProps = {
  params: { [key: string]: string };
  fields: Fields;
};

const PageBanner = (props: PageBannerProps): JSX.Element => {
  return (
    <div className="page-title-area item-bg3">
      <div className="lines">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </div>
  );
};

export default PageBanner;
