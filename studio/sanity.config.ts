import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {media} from 'sanity-plugin-media'
import {schemaTypes} from './schemas'
import {projectId, dataset} from './env'

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
