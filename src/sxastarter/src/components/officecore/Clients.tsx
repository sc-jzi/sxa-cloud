import React, { Component } from 'react';
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

class PartnerContent extends Component<ClientProps> {
    constructor(props: ClientProps) {
        super(props);
    }
    render() {
        return (
            <div className="partner-area ptb-110 bg-f2f6f9">
                <div className="container">
                    <div className="section-title">
                        <h2><Text field={this.props.fields.data.item.Title} /></h2>
                        <p><Text field={this.props.fields.data.item.Text} /></p>
                    </div>
                    <div className="customers-partner-list">
                        {this.props.fields.data.search.results.map((client, index:number) => ( 
                            <div className="partner-item" key={index}>
                                <Link field={client.Website.jsonValue}>
                                    <Image field={client.Logo.jsonValue}/>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default PartnerContent;