// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GalleryEditBoldSvg from '@ant-design/icons-svg/lib/asn/GalleryEditBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GalleryEditBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GalleryEditBold: GalleryEditBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GalleryEditBoldSvg}></AntdIcon>;
};

GalleryEditBold.displayName = 'GalleryEditBold';
GalleryEditBold.inheritAttrs = false;
export default GalleryEditBold;