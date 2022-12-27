// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GalleryBoldSvg from '@ant-design/icons-svg/lib/asn/GalleryBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GalleryBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GalleryBold: GalleryBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GalleryBoldSvg}></AntdIcon>;
};

GalleryBold.displayName = 'GalleryBold';
GalleryBold.inheritAttrs = false;
export default GalleryBold;