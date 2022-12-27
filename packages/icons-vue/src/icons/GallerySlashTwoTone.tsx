// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GallerySlashTwoToneSvg from '@ant-design/icons-svg/lib/asn/GallerySlashTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GallerySlashTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GallerySlashTwoTone: GallerySlashTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GallerySlashTwoToneSvg}></AntdIcon>;
};

GallerySlashTwoTone.displayName = 'GallerySlashTwoTone';
GallerySlashTwoTone.inheritAttrs = false;
export default GallerySlashTwoTone;