// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GalleryAddBrokenSvg from '@ant-design/icons-svg/lib/asn/GalleryAddBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GalleryAddBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GalleryAddBroken: GalleryAddBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GalleryAddBrokenSvg}></AntdIcon>;
};

GalleryAddBroken.displayName = 'GalleryAddBroken';
GalleryAddBroken.inheritAttrs = false;
export default GalleryAddBroken;