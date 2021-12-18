import { server } from "./_server";

export default function Random() {
  return null;
}

export async function getServerSideProps({ params, req, res }) {
  const leftPokemon = params.name;
  const opponent = await (
    await fetch(`${server}/api/pokemon/getRandomName`)
  ).text();
  return {
    redirect: {
      permanent: false,
      destination: `/${leftPokemon}/vs/${opponent}`,
    },
    props: {},
  };
}
