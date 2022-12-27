// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GalleryEditLinearSvg from '@ant-design/icons-svg/lib/asn/GalleryEditLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GalleryEditLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GalleryEditLinear: GalleryEditLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GalleryEditLinearSvg}></AntdIcon>;
};

GalleryEditLinear.displayName = 'GalleryEditLinear';
GalleryEditLinear.inheritAttrs = false;
export default GalleryEditLinear;