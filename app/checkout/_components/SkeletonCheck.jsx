import React from 'react'
import ContentLoader from 'react-content-loader'

const SkeletonCheck = (props) => (
  <ContentLoader
    speed={2}
    width={600}
    height={600}
    viewBox="0 0 600 600"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="53" y="47" rx="3" ry="3" width="231" height="27" />
    <rect x="292" y="48" rx="3" ry="3" width="108" height="27" />
    <rect x="414" y="47" rx="3" ry="3" width="106" height="27" />
    <rect x="49" y="98" rx="3" ry="3" width="231" height="27" />
    <rect x="288" y="98" rx="3" ry="3" width="231" height="27" />
    <rect x="52" y="148" rx="3" ry="3" width="467" height="27" />
  </ContentLoader>
)

export default SkeletonCheck
