import { Header } from "@/components";

export default {
  name: "App",
  render() {
    return (
      <div>
        <Header />
        <router-view></router-view>
      </div>
    );
  },
};
