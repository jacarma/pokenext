import { getRandomName } from "../../../api/pokemon";

export default function Random() {
  return null;
}

export async function getServerSideProps({ params }) {
  const leftPokemon = params.name;
  return {
    redirect: {
      permanent: false,
      destination: `/${leftPokemon}/vs/${getRandomName()}`,
    },
    props: {},
  };
}
