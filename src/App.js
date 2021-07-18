import { Header } from "@/components";

export default {
  name: "App",
  render() {
    return (
      <main>
        <Header />
        <router-view></router-view>
      </main>
    );
  },
};
