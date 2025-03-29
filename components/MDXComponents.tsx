import TOCInline from 'pliny/ui/TOCInline'
import Pre from 'pliny/ui/Pre'
import type { MDXComponents } from 'mdx/types'
import Image from './Image'
import CustomLink from './Link'
import TableWrapper from './TableWrapper'
import { Youtube } from './Youtube'

export const components: MDXComponents = {
  Image,
  TOCInline,
  Youtube,
  a: CustomLink,
  pre: Pre,
  table: TableWrapper,
}
