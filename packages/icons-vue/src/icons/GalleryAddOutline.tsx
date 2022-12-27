// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GalleryAddOutlineSvg from '@ant-design/icons-svg/lib/asn/GalleryAddOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GalleryAddOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GalleryAddOutline: GalleryAddOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GalleryAddOutlineSvg}></AntdIcon>;
};

GalleryAddOutline.displayName = 'GalleryAddOutline';
GalleryAddOutline.inheritAttrs = false;
export default GalleryAddOutline;