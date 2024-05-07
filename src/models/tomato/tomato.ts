import { collection, doc, getConverter, getFirestore, orderBy, query } from '@/utils/firebase/firestore';
import type { Tomato, TomatoDocumentData } from '@/types';
import type { DocumentReference, QueryConstraint } from '@/utils/firebase/firestore';

export const tomatoConverter = getConverter<TomatoDocumentData>();

export const tomatoesRef = () => collection(getFirestore(), 'tomatoes').withConverter(tomatoConverter);

type RefOrNull<Id extends string | null | undefined> = Id extends string ? DocumentReference<Tomato> : null;
export const tomatoRef = <Id extends string | null | undefined>(id: Id) =>
  (id ? doc(tomatoesRef(), id) : null) as RefOrNull<Id>;

export const tomatoesQuery = (...queryConstraints: QueryConstraint[]) =>
  query(tomatoesRef(), ...(queryConstraints.length === 0 ? [orderBy('createdAt', 'asc')] : queryConstraints));
