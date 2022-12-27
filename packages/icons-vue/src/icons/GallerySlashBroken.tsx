// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GallerySlashBrokenSvg from '@ant-design/icons-svg/lib/asn/GallerySlashBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GallerySlashBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GallerySlashBroken: GallerySlashBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GallerySlashBrokenSvg}></AntdIcon>;
};

GallerySlashBroken.displayName = 'GallerySlashBroken';
GallerySlashBroken.inheritAttrs = false;
export default GallerySlashBroken;