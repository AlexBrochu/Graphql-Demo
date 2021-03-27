import { ApolloServer } from 'apollo-server';

import { environment } from './environment';
import resolvers from './resolvers';
import typeDefs from './type-defs';

const server = new ApolloServer({ resolvers, typeDefs,
    introspection: environment.apollo.introspection, 
    playground: environment.apollo.playground
 });

//  console.log(environment)

server.listen(environment.port)
  .then(({ url }) => console.log(`Server ready at ${url}. `));

  // Hot Module Replacement
if (module.hot) {
  module.hot.accept();
  module.hot.dispose(() => console.log('Module disposed. '));
}