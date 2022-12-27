// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ToggleOffCircleLinearSvg from '@ant-design/icons-svg/lib/asn/ToggleOffCircleLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ToggleOffCircleLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ToggleOffCircleLinear: ToggleOffCircleLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ToggleOffCircleLinearSvg}></AntdIcon>;
};

ToggleOffCircleLinear.displayName = 'ToggleOffCircleLinear';
ToggleOffCircleLinear.inheritAttrs = false;
export default ToggleOffCircleLinear;