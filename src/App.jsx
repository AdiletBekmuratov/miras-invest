import React, { Suspense } from 'react';
import Routes from '@/routes/Routes';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import Loader from 'react-loader-spinner';

const client = new ApolloClient({
	uri: 'http://localhost:1337/graphql',
	cache: new InMemoryCache()
})

export default function App() {
	return (
		<ApolloProvider client={client}>
			<Suspense fallback={
				<div className="flex my-auto justify-center">
					<Loader
						type="TailSpin"
						color="#00BFFF"
						height={100}
						width={100}
					/>
				</div>
			}>
				<Routes />
			</Suspense>
		</ApolloProvider>
	)
}
