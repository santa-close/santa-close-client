import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A type representing a formatted java.time.LocalDateTime */
  DateTime: any;
};

export type AppAuthInfo = {
  __typename?: 'AppAuthInfo';
  accessToken: Scalars['String'];
  expiredAt: Scalars['DateTime'];
};

export type AppCoordinate = {
  __typename?: 'AppCoordinate';
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};

export type AppCoordinateInput = {
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};

export type AppLocation = {
  coordinate: AppCoordinate;
  id: Scalars['ID'];
  type: LocationType;
};

export enum AppUserRole {
  User = 'USER',
  Viewer = 'VIEWER'
}

export type CategoryAppList = {
  __typename?: 'CategoryAppList';
  mountainDifficulty: Array<MountainDifficultyCategory>;
};

export type CreateMountainAppInput = {
  address: Scalars['String'];
  altitude: Scalars['Int'];
  images: Array<Scalars['String']>;
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
  management: MountainManagement;
  name: Scalars['String'];
  postcode: Scalars['String'];
};

export type CreateMountainReviewAppInput = {
  content: Scalars['String'];
  difficulty: MountainDifficulty;
  images: Array<Scalars['String']>;
  mountainId: Scalars['ID'];
  parking: Scalars['Int'];
  scenery: Scalars['Int'];
  title: Scalars['String'];
  toilet: Scalars['Int'];
  traffic: Scalars['Int'];
  trail: Scalars['Int'];
  tree: Scalars['Int'];
};

export type CreateRestaurantReviewAppInput = {
  content: Scalars['String'];
  images: Array<Scalars['String']>;
  priceAverage: Scalars['Int'];
  priceComment: PriceComment;
  rating: RestaurantRatingInput;
  restaurantId: Scalars['ID'];
  title: Scalars['String'];
};

export type CreateSampleAppInput = {
  name: Scalars['String'];
  price: Scalars['Int'];
  status: SampleStatus;
};

export type LocationAppInput = {
  diagonalFrom: AppCoordinateInput;
  diagonalTo: AppCoordinateInput;
};

export enum LocationType {
  Mountain = 'MOUNTAIN',
  Restaurant = 'RESTAURANT'
}

export type MountainAppLocation = AppLocation & {
  __typename?: 'MountainAppLocation';
  coordinate: AppCoordinate;
  id: Scalars['ID'];
  type: LocationType;
};

export type MountainDetailAppInput = {
  id: Scalars['ID'];
};

export enum MountainDifficulty {
  Easy = 'EASY',
  Hard = 'HARD',
  Normal = 'NORMAL'
}

export type MountainDifficultyCategory = {
  __typename?: 'MountainDifficultyCategory';
  code: MountainDifficulty;
  name: Scalars['String'];
};

export enum MountainManagement {
  Municipal = 'MUNICIPAL',
  National = 'NATIONAL',
  Normal = 'NORMAL',
  Provincial = 'PROVINCIAL'
}

export type Mutation = {
  __typename?: 'Mutation';
  /** 산 리뷰 등록하기 */
  createMountainReview: Scalars['Boolean'];
  /** 음식점 리뷰 등록하기 */
  createRestaurantReview: Scalars['Boolean'];
  /** 샘플 데이터 */
  createSample: Scalars['Boolean'];
  /** 산 등록하기 */
  registerMountain: Scalars['Boolean'];
  /** 로그인 및 회원가입 */
  signIn: AppAuthInfo;
};


export type MutationCreateMountainReviewArgs = {
  input: CreateMountainReviewAppInput;
};


export type MutationCreateRestaurantReviewArgs = {
  input: CreateRestaurantReviewAppInput;
};


export type MutationCreateSampleArgs = {
  input: CreateSampleAppInput;
};


export type MutationRegisterMountainArgs = {
  input: CreateMountainAppInput;
};


export type MutationSignInArgs = {
  input: SignInAppInput;
};

export enum PriceComment {
  IsCheap = 'IS_CHEAP',
  IsExpensive = 'IS_EXPENSIVE',
  IsNormal = 'IS_NORMAL'
}

export type Query = {
  __typename?: 'Query';
  /** category 데이터 */
  categories: CategoryAppList;
  /** 지도 위치 데이터 */
  locations: Array<AppLocation>;
  /** 산 상세 조회 */
  mountainDetail: Scalars['Boolean'];
  /** 샘플 데이터 */
  sample: SampleAppDetail;
};


export type QueryLocationsArgs = {
  input: LocationAppInput;
};


export type QueryMountainDetailArgs = {
  input: MountainDetailAppInput;
};


export type QuerySampleArgs = {
  input: SampleAppItemInput;
};

export type RestaurantAppLocation = AppLocation & {
  __typename?: 'RestaurantAppLocation';
  coordinate: AppCoordinate;
  id: Scalars['ID'];
  type: LocationType;
};

export type RestaurantRatingInput = {
  clean: Scalars['Int'];
  kind: Scalars['Int'];
  mood: Scalars['Int'];
  parkingSpace: Scalars['Int'];
  taste: Scalars['Int'];
};

export type SampleAppDetail = {
  __typename?: 'SampleAppDetail';
  name: Scalars['String'];
  price: Scalars['Int'];
  status: SampleStatus;
};

export type SampleAppItemInput = {
  name?: InputMaybe<Scalars['String']>;
  price: Scalars['Int'];
};

export enum SampleStatus {
  Close = 'CLOSE',
  Open = 'OPEN'
}

export type SignInAppInput = {
  code: Scalars['String'];
  type: SignInType;
};

export enum SignInType {
  Apple = 'APPLE',
  Kakao = 'KAKAO'
}

export type SampleQueryVariables = Exact<{
  input: SampleAppItemInput;
}>;


export type SampleQuery = { __typename?: 'Query', sample: { __typename?: 'SampleAppDetail', name: string, price: number, status: SampleStatus } };


export const SampleDocument = gql`
    query Sample($input: SampleAppItemInput!) {
  sample(input: $input) {
    name
    price
    status
  }
}
    `;
export function useSampleQuery(baseOptions: Apollo.QueryHookOptions<SampleQuery, SampleQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SampleQuery, SampleQueryVariables>(SampleDocument, options);
      }
export function useSampleLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SampleQuery, SampleQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SampleQuery, SampleQueryVariables>(SampleDocument, options);
        }
export type SampleQueryHookResult = ReturnType<typeof useSampleQuery>;
export type SampleLazyQueryHookResult = ReturnType<typeof useSampleLazyQuery>;
export type SampleQueryResult = Apollo.QueryResult<SampleQuery, SampleQueryVariables>;