import gql from 'graphql-tag';
import * as Urql from 'urql';

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
}

export enum Language {
  C = 'C',
  Cpp = 'Cpp',
  Csharp = 'Csharp',
  Fsharp = 'Fsharp',
  Go = 'Go',
  Haskell = 'Haskell',
  Java = 'Java',
  JavaScript = 'JavaScript',
  Lua = 'Lua',
  Php = 'Php',
  Python = 'Python',
  Ruby = 'Ruby',
  Rust = 'Rust',
  TypeScript = 'TypeScript',
}

export interface Player {
  __typename?: 'Player';
  displayName: Scalars['String'];
  email: Scalars['String'];
  id: Scalars['ID'];
  username: Scalars['String'];
}

export interface Puzzle {
  __typename?: 'Puzzle';
  constraint: Scalars['String'];
  id: Scalars['ID'];
  initialTemplate: Scalars['String'];
  inputDescription: Scalars['String'];
  mode: Scalars['String'];
  outputDescription: Scalars['String'];
  testCases: Maybe<TestCase>[];
  title: Scalars['String'];
}

export interface PuzzleInitialTemplateArgs {
  language: Language;
}

export enum PuzzleMode {
  Normal = 'normal',
  Reverse = 'reverse',
}

export interface Query {
  __typename?: 'Query';
  getPlayerById?: Maybe<Player>;
  getPuzzleById?: Maybe<Puzzle>;
  getPuzzleByTitle?: Maybe<Puzzle>;
  getRandomPuzzle?: Maybe<Puzzle>;
  getRandomPuzzleByMode?: Maybe<Puzzle>;
}

export interface QueryGetPlayerByIdArgs {
  id: Scalars['ID'];
}

export interface QueryGetPuzzleByIdArgs {
  id: Scalars['ID'];
}

export interface QueryGetPuzzleByTitleArgs {
  title: Scalars['String'];
}

export interface QueryGetRandomPuzzleByModeArgs {
  mode: PuzzleMode;
}

export interface TestCase {
  __typename?: 'TestCase';
  id: Scalars['ID'];
  input: Scalars['String'];
  mode: Scalars['String'];
  title: Scalars['String'];
}

export interface PuzzleFieldsFragment {
  __typename?: 'Puzzle';
  id: string;
  title: string;
}

export type GetRandomPuzzleQueryVariables = Exact<{ [key: string]: never }>;

export interface GetRandomPuzzleQuery {
  __typename?: 'Query';
  getRandomPuzzle?: { __typename?: 'Puzzle'; id: string; title: string } | null;
}

export const PuzzleFieldsFragmentDoc = gql`
  fragment PuzzleFields on Puzzle {
    id
    title
  }
`;
export const GetRandomPuzzleDocument = gql`
  query getRandomPuzzle {
    getRandomPuzzle {
      ...PuzzleFields
    }
  }
  ${PuzzleFieldsFragmentDoc}
`;

export function useGetRandomPuzzleQuery(
  options?: Omit<Urql.UseQueryArgs<GetRandomPuzzleQueryVariables>, 'query'>,
) {
  return Urql.useQuery<GetRandomPuzzleQuery>({
    query: GetRandomPuzzleDocument,
    ...options,
  });
}
