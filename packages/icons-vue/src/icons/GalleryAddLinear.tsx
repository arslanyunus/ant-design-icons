// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GalleryAddLinearSvg from '@ant-design/icons-svg/lib/asn/GalleryAddLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GalleryAddLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GalleryAddLinear: GalleryAddLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GalleryAddLinearSvg}></AntdIcon>;
};

GalleryAddLinear.displayName = 'GalleryAddLinear';
GalleryAddLinear.inheritAttrs = false;
export default GalleryAddLinear;