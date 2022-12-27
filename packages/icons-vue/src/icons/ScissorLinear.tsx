// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ScissorLinearSvg from '@ant-design/icons-svg/lib/asn/ScissorLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ScissorLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ScissorLinear: ScissorLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ScissorLinearSvg}></AntdIcon>;
};

ScissorLinear.displayName = 'ScissorLinear';
ScissorLinear.inheritAttrs = false;
export default ScissorLinear;