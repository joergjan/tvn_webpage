import DocumentsPane from 'sanity-plugin-documents-pane'
import {StructureBuilder} from 'sanity/structure'

export const InboundReferencesView = (S: StructureBuilder) =>
  S.view
    .component(DocumentsPane)
    .options({
      query: `*[!(_id in path("drafts.**")) && references($id)]`,
      params: {id: `_id`},
      useDraft: false,
    })
    .title('Documents referencing this document')
