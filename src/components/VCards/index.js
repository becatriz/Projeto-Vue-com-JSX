import "./_styles.scss";

export const VCards = {
  name: "VCards",
  functional: true,
  props: {
    title: {
      type: String,
      default: "",
    },
  },

  render(h, { slots, props }) {
    return (
      <div>
        <div class="card">
          <h1 class="card__title">{props.title}</h1>
          {slots().card}
        </div>
      </div>
    );
  },
};

export default VCards;
