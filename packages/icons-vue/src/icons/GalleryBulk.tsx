// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GalleryBulkSvg from '@ant-design/icons-svg/lib/asn/GalleryBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GalleryBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GalleryBulk: GalleryBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GalleryBulkSvg}></AntdIcon>;
};

GalleryBulk.displayName = 'GalleryBulk';
GalleryBulk.inheritAttrs = false;
export default GalleryBulk;