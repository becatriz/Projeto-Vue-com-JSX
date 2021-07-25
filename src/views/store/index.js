import { VCards } from "@/components";

import "./_styles.scss";

const CARDS = [
  {
    title: "Tênis bonitão",
  },
  {
    title: "Tênis bonitão",
  },
  {
    title: "Tênis bonitão",
  },
  {
    title: "Tênis bonitão",
  },
  {
    title: "Tênis bonitão",
  },
];

export default {
  name: "Home",
  data: () => ({
    user: {
      name: "Rebeca",
    },
  }),

  render() {
    return (
      <div class="cards">
        {CARDS.map((value) => (
          <VCards title={value.title}>
            <div slot="card">
              <img
                class="cards__img"
                src="https://cdn.pixabay.com/photo/2013/07/12/18/20/shoes-153310_960_720.png"
              />
            </div>
          </VCards>
        ))}
      </div>
    );
  },
};
