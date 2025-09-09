import { type SchemaTypeDefinition } from "sanity";

import { AboutPageType } from "./aboutPage";
import { AuthorType } from "./author";
import { BlockContentType } from "./blockContent";
import { BrandType } from "./brand";
import { CategoryType } from "./category";
import { PostType } from "./post";
import { ServiceType } from "./service";
import { HomePageType } from "./homePage";
import { TestimonialType } from "./testimonial";
import { teamMemberType } from "./teamMember";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    AboutPageType,
    AuthorType,
    BlockContentType,
    BrandType,
    CategoryType,
    PostType,
    ServiceType,
    HomePageType,
    TestimonialType,
    teamMemberType,
  ],
};
