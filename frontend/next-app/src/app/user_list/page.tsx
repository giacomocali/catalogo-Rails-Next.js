import { UserListItem } from "@/components/UserListItem";
import { Header } from "@/components/Header";

export default function Home() {
  return (
    <>
        <Header />
      <ul> <UserListItem /> </ul>
    </>
  );
}
