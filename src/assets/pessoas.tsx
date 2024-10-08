import * as React from "react"

interface GitHubProps {
  props?: React.ReactNode
}

export function PessoasSVG(props: GitHubProps) {
  return (
    <svg
      width={18}
      height={18}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M11.5 16a6 6 0 100-12 6 6 0 000 12zm2.377 2.25H9.123A8.123 8.123 0 001 26.373c0 .9.728 1.627 1.625 1.627h17.748c.9 0 1.627-.727 1.627-1.627a8.124 8.124 0 00-8.123-8.123zm9.58.75h-3.46c2.153 1.767 3.503 4.41 3.503 7.373 0 .6-.178 1.154-.469 1.627H29.5c.83 0 1.5-.675 1.5-1.542C31 22.356 27.644 19 23.458 19zm-2.207-3a5.247 5.247 0 005.25-5.25 5.247 5.247 0 00-5.25-5.25 5.204 5.204 0 00-3.128 1.055C18.662 7.592 19 8.753 19 10c0 1.665-.56 3.194-1.48 4.44A5.233 5.233 0 0021.25 16z"
        fill="#3A536B"
      />
    </svg>
  )
}

