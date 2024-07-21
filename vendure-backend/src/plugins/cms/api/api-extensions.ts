import gql from 'graphql-tag';

const articleAdminApiExtensions = gql`
  type Article implements Node {
    id: ID!
    createdAt: DateTime!
    updatedAt: DateTime!
    code: String!
  }

  type ArticleList implements PaginatedList {
    items: [Article!]!
    totalItems: Int!
  }

  # Generated at run-time by Vendure
  input ArticleListOptions

  extend type Query {
    article(id: ID!): Article
    articles(options: ArticleListOptions): ArticleList!
  }

  input CreateArticleInput {
    code: String!
  }

  input UpdateArticleInput {
    id: ID!
    code: String
  }

  extend type Mutation {
    createArticle(input: CreateArticleInput!): Article!
    updateArticle(input: UpdateArticleInput!): Article!
    deleteArticle(id: ID!): DeletionResponse!
  }
`;
export const adminApiExtensions = gql`
  ${articleAdminApiExtensions}
`;
