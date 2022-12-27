// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MoneyForbiddenBrokenSvg from '@ant-design/icons-svg/lib/asn/MoneyForbiddenBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MoneyForbiddenBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MoneyForbiddenBroken: MoneyForbiddenBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MoneyForbiddenBrokenSvg}></AntdIcon>;
};

MoneyForbiddenBroken.displayName = 'MoneyForbiddenBroken';
MoneyForbiddenBroken.inheritAttrs = false;
export default MoneyForbiddenBroken;