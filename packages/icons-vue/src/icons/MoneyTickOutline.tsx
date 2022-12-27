// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MoneyTickOutlineSvg from '@ant-design/icons-svg/lib/asn/MoneyTickOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MoneyTickOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MoneyTickOutline: MoneyTickOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MoneyTickOutlineSvg}></AntdIcon>;
};

MoneyTickOutline.displayName = 'MoneyTickOutline';
MoneyTickOutline.inheritAttrs = false;
export default MoneyTickOutline;