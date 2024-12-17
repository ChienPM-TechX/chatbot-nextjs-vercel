Clone the repository from Github

````
git clone https://github.com/ChienPM-TechX/chatbot-nextjs-vercel.git
cd chatbot-nextjs-vercel
````

Install dependencies

````
npm install -g pnpm
pnpm install or npm install
````

Configure environment variables. The environment variable values in the .env file as needed (e.g., API keys, backend URLs).

````
touch .env
````

Run start localhost:3000

```
pnpm run dev
or
npm run dev
```

````
UPSTASH_VECTOR_REST_URL="https://liberal-flounder-92182-us1-vector.upstash.io"
UPSTASH_VECTOR_REST_TOKEN="ABoFMGxpYmVyYWwtZmxvdW5kZXItOTIxODItdXMxYWRtaW5NalptWlRreFpqUXRabVpoTnkwMFlqSXhMVGd5TkRVdE9EazVPR1EzTlRabFpqTTA="
QSTASH_TOKEN=eyJVc2VySUQiOiIzMTAxODg1Ni01OGExLTRiODctOTU4Ni02NWNlNWIwNThhNzIiLCJQYXNzd29yZCI6IjQ2M2ViMTQzYjM2MzRiNTFhM2MxMTc4Y2NhNmI3ODRlIn0=
UPSTASH_REDIS_REST_URL="https://curious-elk-23447.upstash.io"
UPSTASH_REDIS_REST_TOKEN="AVuXAAIjcDEyOGExZmI3YThiYzk0NTQyOWM2NzY4Njc2MDY5NTliZXAxMA"
````
