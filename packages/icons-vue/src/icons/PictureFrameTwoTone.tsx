// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PictureFrameTwoToneSvg from '@ant-design/icons-svg/lib/asn/PictureFrameTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PictureFrameTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PictureFrameTwoTone: PictureFrameTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PictureFrameTwoToneSvg}></AntdIcon>;
};

PictureFrameTwoTone.displayName = 'PictureFrameTwoTone';
PictureFrameTwoTone.inheritAttrs = false;
export default PictureFrameTwoTone;