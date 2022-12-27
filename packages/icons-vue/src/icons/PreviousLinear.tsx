// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PreviousLinearSvg from '@ant-design/icons-svg/lib/asn/PreviousLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PreviousLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PreviousLinear: PreviousLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PreviousLinearSvg}></AntdIcon>;
};

PreviousLinear.displayName = 'PreviousLinear';
PreviousLinear.inheritAttrs = false;
export default PreviousLinear;