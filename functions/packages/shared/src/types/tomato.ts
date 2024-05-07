import type { WithId } from './firebase';

export type TomatoDocumentData<Timestamp> = {
  createdAt: Timestamp;
  updatedAt: Timestamp;
};

export type Tomato<Timestamp> = WithId<TomatoDocumentData<Timestamp>>;
