import { useRouter } from 'next/router';

export default function User() {
  const router = useRouter();
  return <div>{router.query.userId}</div>;
}
