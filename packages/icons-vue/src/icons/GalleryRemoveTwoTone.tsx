// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GalleryRemoveTwoToneSvg from '@ant-design/icons-svg/lib/asn/GalleryRemoveTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GalleryRemoveTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GalleryRemoveTwoTone: GalleryRemoveTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GalleryRemoveTwoToneSvg}></AntdIcon>;
};

GalleryRemoveTwoTone.displayName = 'GalleryRemoveTwoTone';
GalleryRemoveTwoTone.inheritAttrs = false;
export default GalleryRemoveTwoTone;