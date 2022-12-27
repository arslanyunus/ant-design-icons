// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Backward15SecondsLinearSvg from '@ant-design/icons-svg/lib/asn/Backward15SecondsLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Backward15SecondsLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Backward15SecondsLinear: Backward15SecondsLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Backward15SecondsLinearSvg}></AntdIcon>;
};

Backward15SecondsLinear.displayName = 'Backward15SecondsLinear';
Backward15SecondsLinear.inheritAttrs = false;
export default Backward15SecondsLinear;