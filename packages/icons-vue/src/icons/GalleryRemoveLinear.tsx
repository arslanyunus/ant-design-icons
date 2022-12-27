// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GalleryRemoveLinearSvg from '@ant-design/icons-svg/lib/asn/GalleryRemoveLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GalleryRemoveLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GalleryRemoveLinear: GalleryRemoveLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GalleryRemoveLinearSvg}></AntdIcon>;
};

GalleryRemoveLinear.displayName = 'GalleryRemoveLinear';
GalleryRemoveLinear.inheritAttrs = false;
export default GalleryRemoveLinear;