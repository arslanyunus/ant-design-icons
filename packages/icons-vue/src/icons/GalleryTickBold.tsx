// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GalleryTickBoldSvg from '@ant-design/icons-svg/lib/asn/GalleryTickBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GalleryTickBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GalleryTickBold: GalleryTickBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GalleryTickBoldSvg}></AntdIcon>;
};

GalleryTickBold.displayName = 'GalleryTickBold';
GalleryTickBold.inheritAttrs = false;
export default GalleryTickBold;