// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MoneyForbiddenBoldSvg from '@ant-design/icons-svg/lib/asn/MoneyForbiddenBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MoneyForbiddenBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MoneyForbiddenBold: MoneyForbiddenBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MoneyForbiddenBoldSvg}></AntdIcon>;
};

MoneyForbiddenBold.displayName = 'MoneyForbiddenBold';
MoneyForbiddenBold.inheritAttrs = false;
export default MoneyForbiddenBold;