import { getChannelList } from "../api/api";

export default function Category() {
  console.log(getChannelList());
  return <div>Category</div>;
}
