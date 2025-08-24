declare module '*.svg?react' {
  import * as React from 'react'
  const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>
  export default ReactComponent
}

// Allow importing raw SVG asset paths (for use in <img src={...} />) without the ?react suffix.
// Example: import avatarButton from '../assets/avatar-button.svg'
// Without this block TypeScript reports: Cannot find module '*.svg'.
declare module '*.svg' {
  const src: string
  export default src
}

declare module '*.png' {
  const src: string
  export default src
}

declare module '*.jpg' {
  const src: string
  export default src
}

declare module '*.jpeg' {
  const src: string
  export default src
}

declare module '*.gif' {
  const src: string
  export default src
}

declare module '*.webp' {
  const src: string
  export default src
}
