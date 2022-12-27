// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FrameLinearSvg from '@ant-design/icons-svg/lib/asn/FrameLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FrameLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FrameLinear: FrameLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FrameLinearSvg}></AntdIcon>;
};

FrameLinear.displayName = 'FrameLinear';
FrameLinear.inheritAttrs = false;
export default FrameLinear;