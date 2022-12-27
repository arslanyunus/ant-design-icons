// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ToggleOnCircleLinearSvg from '@ant-design/icons-svg/lib/asn/ToggleOnCircleLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ToggleOnCircleLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ToggleOnCircleLinear: ToggleOnCircleLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ToggleOnCircleLinearSvg}></AntdIcon>;
};

ToggleOnCircleLinear.displayName = 'ToggleOnCircleLinear';
ToggleOnCircleLinear.inheritAttrs = false;
export default ToggleOnCircleLinear;