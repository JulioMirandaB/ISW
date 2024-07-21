import {
    DeepPartial,
    HasCustomFields,
    VendureEntity
} from '@vendure/core';
import { Column, Entity } from 'typeorm';


export class ArticleCustomFields {}

@Entity()
export class Article extends VendureEntity implements HasCustomFields {
    constructor(input?: DeepPartial<Article>) {
        super(input);
    }

    @Column()
    code: string;

    @Column(type => ArticleCustomFields)
    customFields: ArticleCustomFields;
}
