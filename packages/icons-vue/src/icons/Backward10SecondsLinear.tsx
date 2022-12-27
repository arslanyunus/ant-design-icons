// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Backward10SecondsLinearSvg from '@ant-design/icons-svg/lib/asn/Backward10SecondsLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Backward10SecondsLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Backward10SecondsLinear: Backward10SecondsLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Backward10SecondsLinearSvg}></AntdIcon>;
};

Backward10SecondsLinear.displayName = 'Backward10SecondsLinear';
Backward10SecondsLinear.inheritAttrs = false;
export default Backward10SecondsLinear;