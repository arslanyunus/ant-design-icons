// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MoneyChangeBrokenSvg from '@ant-design/icons-svg/lib/asn/MoneyChangeBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MoneyChangeBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MoneyChangeBroken: MoneyChangeBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MoneyChangeBrokenSvg}></AntdIcon>;
};

MoneyChangeBroken.displayName = 'MoneyChangeBroken';
MoneyChangeBroken.inheritAttrs = false;
export default MoneyChangeBroken;