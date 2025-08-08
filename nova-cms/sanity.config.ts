import { defineConfig } from 'sanity'
import { visionTool } from '@sanity/vision'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from './schemaTypes'

// ✅ Import the structure correctly
import { Structure } from './structure'

export default defineConfig({
  name: 'default',
  title: 'nova-cms',

  projectId: 'wkexqpkp',
  dataset: 'production',

  plugins: [
    structureTool({ structure: Structure }),
    visionTool()
  ],

  schema: {
    types: schemaTypes,
  },
})
