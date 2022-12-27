// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GalleryRemoveBrokenSvg from '@ant-design/icons-svg/lib/asn/GalleryRemoveBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GalleryRemoveBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GalleryRemoveBroken: GalleryRemoveBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GalleryRemoveBrokenSvg}></AntdIcon>;
};

GalleryRemoveBroken.displayName = 'GalleryRemoveBroken';
GalleryRemoveBroken.inheritAttrs = false;
export default GalleryRemoveBroken;