// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GalleryRemoveBoldSvg from '@ant-design/icons-svg/lib/asn/GalleryRemoveBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GalleryRemoveBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GalleryRemoveBold: GalleryRemoveBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GalleryRemoveBoldSvg}></AntdIcon>;
};

GalleryRemoveBold.displayName = 'GalleryRemoveBold';
GalleryRemoveBold.inheritAttrs = false;
export default GalleryRemoveBold;