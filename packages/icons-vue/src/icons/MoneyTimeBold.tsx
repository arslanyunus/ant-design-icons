// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MoneyTimeBoldSvg from '@ant-design/icons-svg/lib/asn/MoneyTimeBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MoneyTimeBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MoneyTimeBold: MoneyTimeBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MoneyTimeBoldSvg}></AntdIcon>;
};

MoneyTimeBold.displayName = 'MoneyTimeBold';
MoneyTimeBold.inheritAttrs = false;
export default MoneyTimeBold;