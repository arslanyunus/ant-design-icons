// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GalleryLinearSvg from '@ant-design/icons-svg/lib/asn/GalleryLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GalleryLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GalleryLinear: GalleryLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GalleryLinearSvg}></AntdIcon>;
};

GalleryLinear.displayName = 'GalleryLinear';
GalleryLinear.inheritAttrs = false;
export default GalleryLinear;