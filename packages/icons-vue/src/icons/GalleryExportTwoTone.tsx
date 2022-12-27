// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GalleryExportTwoToneSvg from '@ant-design/icons-svg/lib/asn/GalleryExportTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GalleryExportTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GalleryExportTwoTone: GalleryExportTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GalleryExportTwoToneSvg}></AntdIcon>;
};

GalleryExportTwoTone.displayName = 'GalleryExportTwoTone';
GalleryExportTwoTone.inheritAttrs = false;
export default GalleryExportTwoTone;