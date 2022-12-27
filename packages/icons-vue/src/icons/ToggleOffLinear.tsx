// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ToggleOffLinearSvg from '@ant-design/icons-svg/lib/asn/ToggleOffLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ToggleOffLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ToggleOffLinear: ToggleOffLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ToggleOffLinearSvg}></AntdIcon>;
};

ToggleOffLinear.displayName = 'ToggleOffLinear';
ToggleOffLinear.inheritAttrs = false;
export default ToggleOffLinear;