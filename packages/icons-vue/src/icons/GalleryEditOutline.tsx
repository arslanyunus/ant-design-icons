// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GalleryEditOutlineSvg from '@ant-design/icons-svg/lib/asn/GalleryEditOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GalleryEditOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GalleryEditOutline: GalleryEditOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GalleryEditOutlineSvg}></AntdIcon>;
};

GalleryEditOutline.displayName = 'GalleryEditOutline';
GalleryEditOutline.inheritAttrs = false;
export default GalleryEditOutline;