import { getConverter, getFirestore } from '../utils/firebase';
import type { TomatoDocumentData } from '../types/tomato';

export const tomatoConverter = getConverter<TomatoDocumentData>();

export const tomatoesRef = () => getFirestore().collection('tomatoes').withConverter(tomatoConverter);

export const tomatoRef = (id: string) => tomatoesRef().doc(id);
