import type { GraphQLResolveInfo } from 'graphql';

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
export type RequireFields<T, K extends keyof T> = Omit<T, K> & {
  [P in K]-?: NonNullable<T[P]>;
};
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

export type ResolverTypeWrapper<T> = Promise<T> | T;

export interface ResolverWithResolve<TResult, TParent, TContext, TArgs> {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
}
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => Promise<TResult> | TResult;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs,
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs,
> =
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {},
> =
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>);

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo,
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo,
) => Promise<boolean> | boolean;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {},
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => Promise<TResult> | TResult;

/** Mapping between all available schema types and the resolvers types */
export interface ResolversTypes {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Language: Language;
  Player: ResolverTypeWrapper<Player>;
  Puzzle: ResolverTypeWrapper<Puzzle>;
  PuzzleMode: PuzzleMode;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']>;
  TestCase: ResolverTypeWrapper<TestCase>;
}

/** Mapping between all available schema types and the resolvers parents */
export interface ResolversParentTypes {
  Boolean: Scalars['Boolean'];
  ID: Scalars['ID'];
  Player: Player;
  Puzzle: Puzzle;
  Query: {};
  String: Scalars['String'];
  TestCase: TestCase;
}

export interface PlayerResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Player'] = ResolversParentTypes['Player'],
> {
  displayName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}

export interface PuzzleResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Puzzle'] = ResolversParentTypes['Puzzle'],
> {
  constraint?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  initialTemplate?: Resolver<
    ResolversTypes['String'],
    ParentType,
    ContextType,
    RequireFields<PuzzleInitialTemplateArgs, 'language'>
  >;
  inputDescription?: Resolver<
    ResolversTypes['String'],
    ParentType,
    ContextType
  >;
  mode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  outputDescription?: Resolver<
    ResolversTypes['String'],
    ParentType,
    ContextType
  >;
  testCases?: Resolver<
    Maybe<ResolversTypes['TestCase']>[],
    ParentType,
    ContextType
  >;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}

export interface QueryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query'],
> {
  getPlayerById?: Resolver<
    Maybe<ResolversTypes['Player']>,
    ParentType,
    ContextType,
    RequireFields<QueryGetPlayerByIdArgs, 'id'>
  >;
  getPuzzleById?: Resolver<
    Maybe<ResolversTypes['Puzzle']>,
    ParentType,
    ContextType,
    RequireFields<QueryGetPuzzleByIdArgs, 'id'>
  >;
  getPuzzleByTitle?: Resolver<
    Maybe<ResolversTypes['Puzzle']>,
    ParentType,
    ContextType,
    RequireFields<QueryGetPuzzleByTitleArgs, 'title'>
  >;
  getRandomPuzzle?: Resolver<
    Maybe<ResolversTypes['Puzzle']>,
    ParentType,
    ContextType
  >;
  getRandomPuzzleByMode?: Resolver<
    Maybe<ResolversTypes['Puzzle']>,
    ParentType,
    ContextType,
    RequireFields<QueryGetRandomPuzzleByModeArgs, 'mode'>
  >;
}

export interface TestCaseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['TestCase'] = ResolversParentTypes['TestCase'],
> {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  input?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  mode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}

export interface Resolvers<ContextType = any> {
  Player?: PlayerResolvers<ContextType>;
  Puzzle?: PuzzleResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  TestCase?: TestCaseResolvers<ContextType>;
}
