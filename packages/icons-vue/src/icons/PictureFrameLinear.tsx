// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PictureFrameLinearSvg from '@ant-design/icons-svg/lib/asn/PictureFrameLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PictureFrameLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PictureFrameLinear: PictureFrameLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PictureFrameLinearSvg}></AntdIcon>;
};

PictureFrameLinear.displayName = 'PictureFrameLinear';
PictureFrameLinear.inheritAttrs = false;
export default PictureFrameLinear;