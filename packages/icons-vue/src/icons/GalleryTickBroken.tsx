// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GalleryTickBrokenSvg from '@ant-design/icons-svg/lib/asn/GalleryTickBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GalleryTickBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GalleryTickBroken: GalleryTickBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GalleryTickBrokenSvg}></AntdIcon>;
};

GalleryTickBroken.displayName = 'GalleryTickBroken';
GalleryTickBroken.inheritAttrs = false;
export default GalleryTickBroken;