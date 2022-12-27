// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GalleryTickLinearSvg from '@ant-design/icons-svg/lib/asn/GalleryTickLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GalleryTickLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GalleryTickLinear: GalleryTickLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GalleryTickLinearSvg}></AntdIcon>;
};

GalleryTickLinear.displayName = 'GalleryTickLinear';
GalleryTickLinear.inheritAttrs = false;
export default GalleryTickLinear;