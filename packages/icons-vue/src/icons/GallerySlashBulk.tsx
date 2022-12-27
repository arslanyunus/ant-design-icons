// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GallerySlashBulkSvg from '@ant-design/icons-svg/lib/asn/GallerySlashBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GallerySlashBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GallerySlashBulk: GallerySlashBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GallerySlashBulkSvg}></AntdIcon>;
};

GallerySlashBulk.displayName = 'GallerySlashBulk';
GallerySlashBulk.inheritAttrs = false;
export default GallerySlashBulk;