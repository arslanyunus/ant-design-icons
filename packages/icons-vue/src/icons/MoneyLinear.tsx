// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MoneyLinearSvg from '@ant-design/icons-svg/lib/asn/MoneyLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MoneyLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MoneyLinear: MoneyLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MoneyLinearSvg}></AntdIcon>;
};

MoneyLinear.displayName = 'MoneyLinear';
MoneyLinear.inheritAttrs = false;
export default MoneyLinear;