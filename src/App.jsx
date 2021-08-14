import React, { Suspense } from 'react';
import Routes from '@/routes/Routes';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { API_URL } from '@/utils/imageURL';
import Loader from 'react-loader-spinner';

const client = new ApolloClient({
	uri: `${API_URL}/graphql`,
	cache: new InMemoryCache()
})

export default function App() {
	return (
		<ApolloProvider client={client}>
			<Suspense fallback={
				<div className="flex min-h-screen items-center justify-center">
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
