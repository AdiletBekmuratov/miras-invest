import React, { Suspense } from 'react';
import Routes from '@/routes/Routes';
import {
	QueryClient,
	QueryClientProvider,
} from 'react-query'
import Loader from 'react-loader-spinner';

const queryClient = new QueryClient()

export default function App() {
	return (
		<QueryClientProvider client={queryClient}>
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
		</QueryClientProvider>
	)
}
