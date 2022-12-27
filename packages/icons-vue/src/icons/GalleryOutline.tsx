// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GalleryOutlineSvg from '@ant-design/icons-svg/lib/asn/GalleryOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GalleryOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GalleryOutline: GalleryOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GalleryOutlineSvg}></AntdIcon>;
};

GalleryOutline.displayName = 'GalleryOutline';
GalleryOutline.inheritAttrs = false;
export default GalleryOutline;