import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {media} from 'sanity-plugin-media'
import {schemaTypes} from './schemas'

const projectId = process.env.SANITY_STUDIO_PROJECT_ID!
const dataset = process.env.SANITY_STUDIO_DATASET!

export default defineConfig({
  name: 'tvn_webpage',
  title: 'TV Nussbaumen',
  projectId,
  dataset,
  plugins: [structureTool(), media()],
  schema: {
    types: schemaTypes,
  },
})
