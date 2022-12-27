// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PictureFrameBrokenSvg from '@ant-design/icons-svg/lib/asn/PictureFrameBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PictureFrameBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PictureFrameBroken: PictureFrameBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PictureFrameBrokenSvg}></AntdIcon>;
};

PictureFrameBroken.displayName = 'PictureFrameBroken';
PictureFrameBroken.inheritAttrs = false;
export default PictureFrameBroken;