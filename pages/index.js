import { useGraphQL } from "graphql-react";

export default function IndexPage() {
  const { loading, cacheValue: { data } = {} } = useGraphQL({
    fetchOptionsOverride(options) {
      options.url = "https://countries.trevorblades.com/";
    },
    operation: {
      query: /* GraphQL */ `
        {
          country(code: "ID") {
            name
            native
            capital
            emoji
            currency
            languages {
              code
              name
            }
          }
        }
      `,
    },
    loadOnMount: true,
    loadOnReload: true,
    loadOnReset: true,
  });

  return data ? (
    <h3>
      {data.country.name} - {data.country.capital}
    </h3>
  ) : loading ? (
    <p>Loading…</p>
  ) : (
    <p>Error!</p>
  );
}
