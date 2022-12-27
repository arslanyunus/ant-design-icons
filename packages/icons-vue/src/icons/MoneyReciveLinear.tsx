// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MoneyReciveLinearSvg from '@ant-design/icons-svg/lib/asn/MoneyReciveLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MoneyReciveLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MoneyReciveLinear: MoneyReciveLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MoneyReciveLinearSvg}></AntdIcon>;
};

MoneyReciveLinear.displayName = 'MoneyReciveLinear';
MoneyReciveLinear.inheritAttrs = false;
export default MoneyReciveLinear;