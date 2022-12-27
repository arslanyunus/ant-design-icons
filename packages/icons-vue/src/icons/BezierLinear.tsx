// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BezierLinearSvg from '@ant-design/icons-svg/lib/asn/BezierLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BezierLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BezierLinear: BezierLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BezierLinearSvg}></AntdIcon>;
};

BezierLinear.displayName = 'BezierLinear';
BezierLinear.inheritAttrs = false;
export default BezierLinear;