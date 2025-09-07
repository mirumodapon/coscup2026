import type { IconifyChars, IconifyInfo, IconifyJSON, IconifyMetaData } from '@iconify/types'

import _chars from './chars.json' with { type: 'json' }
import _icons from './icons.json' with { type: 'json' }
import _info from './info.json' with { type: 'json' }
import _metadata from './metadata.json' with { type: 'json' }

export const chars: IconifyChars = _chars
export const icons: IconifyJSON = _icons
export const info: IconifyInfo = _info
export const metadata: IconifyMetaData = _metadata
