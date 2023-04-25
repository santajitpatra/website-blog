'use client'

import {usePreview} from 'lib/sanity.preview'
import {query, DocumentsCount} from 'components/DocumentsCount'

export default function PreviewDocumentsCount({token}) {
  const data = usePreview(token, query)
  return <DocumentsCount data={data} />
}