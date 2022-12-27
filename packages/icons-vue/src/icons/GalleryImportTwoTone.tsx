// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GalleryImportTwoToneSvg from '@ant-design/icons-svg/lib/asn/GalleryImportTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GalleryImportTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GalleryImportTwoTone: GalleryImportTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GalleryImportTwoToneSvg}></AntdIcon>;
};

GalleryImportTwoTone.displayName = 'GalleryImportTwoTone';
GalleryImportTwoTone.inheritAttrs = false;
export default GalleryImportTwoTone;