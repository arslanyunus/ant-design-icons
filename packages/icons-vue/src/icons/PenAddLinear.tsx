// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PenAddLinearSvg from '@ant-design/icons-svg/lib/asn/PenAddLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PenAddLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PenAddLinear: PenAddLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PenAddLinearSvg}></AntdIcon>;
};

PenAddLinear.displayName = 'PenAddLinear';
PenAddLinear.inheritAttrs = false;
export default PenAddLinear;