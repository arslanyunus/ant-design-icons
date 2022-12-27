// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PauseLinearSvg from '@ant-design/icons-svg/lib/asn/PauseLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PauseLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PauseLinear: PauseLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PauseLinearSvg}></AntdIcon>;
};

PauseLinear.displayName = 'PauseLinear';
PauseLinear.inheritAttrs = false;
export default PauseLinear;