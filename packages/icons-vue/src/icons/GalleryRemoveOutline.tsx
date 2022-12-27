// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GalleryRemoveOutlineSvg from '@ant-design/icons-svg/lib/asn/GalleryRemoveOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GalleryRemoveOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GalleryRemoveOutline: GalleryRemoveOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GalleryRemoveOutlineSvg}></AntdIcon>;
};

GalleryRemoveOutline.displayName = 'GalleryRemoveOutline';
GalleryRemoveOutline.inheritAttrs = false;
export default GalleryRemoveOutline;