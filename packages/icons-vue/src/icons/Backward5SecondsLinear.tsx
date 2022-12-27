// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Backward5SecondsLinearSvg from '@ant-design/icons-svg/lib/asn/Backward5SecondsLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Backward5SecondsLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Backward5SecondsLinear: Backward5SecondsLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Backward5SecondsLinearSvg}></AntdIcon>;
};

Backward5SecondsLinear.displayName = 'Backward5SecondsLinear';
Backward5SecondsLinear.inheritAttrs = false;
export default Backward5SecondsLinear;