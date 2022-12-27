// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GalleryEditBulkSvg from '@ant-design/icons-svg/lib/asn/GalleryEditBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GalleryEditBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GalleryEditBulk: GalleryEditBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GalleryEditBulkSvg}></AntdIcon>;
};

GalleryEditBulk.displayName = 'GalleryEditBulk';
GalleryEditBulk.inheritAttrs = false;
export default GalleryEditBulk;