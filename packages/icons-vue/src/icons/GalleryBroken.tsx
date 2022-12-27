// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GalleryBrokenSvg from '@ant-design/icons-svg/lib/asn/GalleryBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GalleryBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GalleryBroken: GalleryBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GalleryBrokenSvg}></AntdIcon>;
};

GalleryBroken.displayName = 'GalleryBroken';
GalleryBroken.inheritAttrs = false;
export default GalleryBroken;