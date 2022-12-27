// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MoneyTickBrokenSvg from '@ant-design/icons-svg/lib/asn/MoneyTickBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MoneyTickBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MoneyTickBroken: MoneyTickBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MoneyTickBrokenSvg}></AntdIcon>;
};

MoneyTickBroken.displayName = 'MoneyTickBroken';
MoneyTickBroken.inheritAttrs = false;
export default MoneyTickBroken;