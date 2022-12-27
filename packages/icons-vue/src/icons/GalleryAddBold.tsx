// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GalleryAddBoldSvg from '@ant-design/icons-svg/lib/asn/GalleryAddBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GalleryAddBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GalleryAddBold: GalleryAddBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GalleryAddBoldSvg}></AntdIcon>;
};

GalleryAddBold.displayName = 'GalleryAddBold';
GalleryAddBold.inheritAttrs = false;
export default GalleryAddBold;