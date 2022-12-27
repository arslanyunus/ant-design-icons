// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GalleryAddTwoToneSvg from '@ant-design/icons-svg/lib/asn/GalleryAddTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GalleryAddTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GalleryAddTwoTone: GalleryAddTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GalleryAddTwoToneSvg}></AntdIcon>;
};

GalleryAddTwoTone.displayName = 'GalleryAddTwoTone';
GalleryAddTwoTone.inheritAttrs = false;
export default GalleryAddTwoTone;