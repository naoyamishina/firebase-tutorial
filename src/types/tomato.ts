import type { Timestamp } from '@/utils/firebase/firestore';
import type { Tomato as _Tomato, TomatoDocumentData as _TomatoDocumentData } from '@local/shared';

export type Tomato = _Tomato<Timestamp>;
export type TomatoDocumentData = _TomatoDocumentData<Timestamp>;
