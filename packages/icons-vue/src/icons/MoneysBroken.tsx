// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MoneysBrokenSvg from '@ant-design/icons-svg/lib/asn/MoneysBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MoneysBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MoneysBroken: MoneysBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MoneysBrokenSvg}></AntdIcon>;
};

MoneysBroken.displayName = 'MoneysBroken';
MoneysBroken.inheritAttrs = false;
export default MoneysBroken;