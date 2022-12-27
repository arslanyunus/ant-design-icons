// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GalleryTickOutlineSvg from '@ant-design/icons-svg/lib/asn/GalleryTickOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GalleryTickOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GalleryTickOutline: GalleryTickOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GalleryTickOutlineSvg}></AntdIcon>;
};

GalleryTickOutline.displayName = 'GalleryTickOutline';
GalleryTickOutline.inheritAttrs = false;
export default GalleryTickOutline;