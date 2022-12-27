// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PenCloseLinearSvg from '@ant-design/icons-svg/lib/asn/PenCloseLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PenCloseLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PenCloseLinear: PenCloseLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PenCloseLinearSvg}></AntdIcon>;
};

PenCloseLinear.displayName = 'PenCloseLinear';
PenCloseLinear.inheritAttrs = false;
export default PenCloseLinear;