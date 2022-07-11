import React from 'react';
import { Field, LinkField, ImageField, Image, Link, Text } from '@sitecore-jss/sitecore-jss-nextjs';

// TODO: Get all clients and randomize list

export type ClientProps = {
    fields: {
        data: {
            item: {
                Title: Field<string>,
                Text: Field<string>,
            },
            search: {
                results: {
                    Vertical: string,
                    Website: {
                        jsonValue: LinkField
                    }
                    Logo: {
                        value: ImageField
                    }
                }
            }
        }
    }
}

export const Clients = (props: ClientProps): JSX.Element => {
    return (
        <div className="partner-area ptb-110 bg-f2f6f9">
            <div className="container">
                <div className="section-title">
                    <h2><Text field={props.fields.data.item.Title} /></h2>
                    <p><Text field={props.fields.data.item.Text} /></p>
                </div>
                <div className="customers-partner-list">
                    {props.fields.data.search.results.map((client, index: number) => (
                        <div className="partner-item" key={index}>
                            <Link field={client.Website.jsonValue}>
                                <Image field={client.Logo.jsonValue} />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
