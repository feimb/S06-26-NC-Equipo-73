import { rm } from 'node:fs/promises';
import { resolve } from 'node:path';
import { generate } from 'openapi-typescript-codegen';

const swaggerUrl = 'http://localhost:8090/swagger.json';
const outputDir = resolve('frontend/src/contracts/generated');

const response = await fetch(swaggerUrl);

if (!response.ok) {
    throw new Error(`Failed to fetch ${swaggerUrl}: ${response.status} ${response.statusText}`);
}

const openApiSpec = await response.json();

await rm(outputDir, { force: true, recursive: true });

await generate({
    input: openApiSpec,
    output: outputDir,
    httpClient: 'fetch',
    useOptions: true,
});
