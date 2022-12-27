// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PictureFrameBoldSvg from '@ant-design/icons-svg/lib/asn/PictureFrameBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PictureFrameBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PictureFrameBold: PictureFrameBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PictureFrameBoldSvg}></AntdIcon>;
};

PictureFrameBold.displayName = 'PictureFrameBold';
PictureFrameBold.inheritAttrs = false;
export default PictureFrameBold;