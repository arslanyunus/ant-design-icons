// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GallerySlashOutlineSvg from '@ant-design/icons-svg/lib/asn/GallerySlashOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GallerySlashOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GallerySlashOutline: GallerySlashOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GallerySlashOutlineSvg}></AntdIcon>;
};

GallerySlashOutline.displayName = 'GallerySlashOutline';
GallerySlashOutline.inheritAttrs = false;
export default GallerySlashOutline;