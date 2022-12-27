// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GalleryEditBrokenSvg from '@ant-design/icons-svg/lib/asn/GalleryEditBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GalleryEditBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GalleryEditBroken: GalleryEditBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GalleryEditBrokenSvg}></AntdIcon>;
};

GalleryEditBroken.displayName = 'GalleryEditBroken';
GalleryEditBroken.inheritAttrs = false;
export default GalleryEditBroken;