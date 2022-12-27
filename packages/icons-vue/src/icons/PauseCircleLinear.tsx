// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PauseCircleLinearSvg from '@ant-design/icons-svg/lib/asn/PauseCircleLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PauseCircleLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PauseCircleLinear: PauseCircleLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PauseCircleLinearSvg}></AntdIcon>;
};

PauseCircleLinear.displayName = 'PauseCircleLinear';
PauseCircleLinear.inheritAttrs = false;
export default PauseCircleLinear;