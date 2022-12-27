// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GalleryAddBulkSvg from '@ant-design/icons-svg/lib/asn/GalleryAddBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GalleryAddBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GalleryAddBulk: GalleryAddBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GalleryAddBulkSvg}></AntdIcon>;
};

GalleryAddBulk.displayName = 'GalleryAddBulk';
GalleryAddBulk.inheritAttrs = false;
export default GalleryAddBulk;