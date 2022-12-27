// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ToggleOnLinearSvg from '@ant-design/icons-svg/lib/asn/ToggleOnLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ToggleOnLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ToggleOnLinear: ToggleOnLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ToggleOnLinearSvg}></AntdIcon>;
};

ToggleOnLinear.displayName = 'ToggleOnLinear';
ToggleOnLinear.inheritAttrs = false;
export default ToggleOnLinear;