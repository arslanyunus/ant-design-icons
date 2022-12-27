// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GalleryExportBrokenSvg from '@ant-design/icons-svg/lib/asn/GalleryExportBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GalleryExportBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GalleryExportBroken: GalleryExportBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GalleryExportBrokenSvg}></AntdIcon>;
};

GalleryExportBroken.displayName = 'GalleryExportBroken';
GalleryExportBroken.inheritAttrs = false;
export default GalleryExportBroken;