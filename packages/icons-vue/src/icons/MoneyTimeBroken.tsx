// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MoneyTimeBrokenSvg from '@ant-design/icons-svg/lib/asn/MoneyTimeBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MoneyTimeBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MoneyTimeBroken: MoneyTimeBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MoneyTimeBrokenSvg}></AntdIcon>;
};

MoneyTimeBroken.displayName = 'MoneyTimeBroken';
MoneyTimeBroken.inheritAttrs = false;
export default MoneyTimeBroken;