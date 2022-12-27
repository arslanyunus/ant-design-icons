// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GalleryTickBulkSvg from '@ant-design/icons-svg/lib/asn/GalleryTickBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GalleryTickBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GalleryTickBulk: GalleryTickBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GalleryTickBulkSvg}></AntdIcon>;
};

GalleryTickBulk.displayName = 'GalleryTickBulk';
GalleryTickBulk.inheritAttrs = false;
export default GalleryTickBulk;