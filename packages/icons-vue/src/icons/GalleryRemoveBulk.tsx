// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GalleryRemoveBulkSvg from '@ant-design/icons-svg/lib/asn/GalleryRemoveBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GalleryRemoveBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GalleryRemoveBulk: GalleryRemoveBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GalleryRemoveBulkSvg}></AntdIcon>;
};

GalleryRemoveBulk.displayName = 'GalleryRemoveBulk';
GalleryRemoveBulk.inheritAttrs = false;
export default GalleryRemoveBulk;