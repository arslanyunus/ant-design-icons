// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MoneyTimeOutlineSvg from '@ant-design/icons-svg/lib/asn/MoneyTimeOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MoneyTimeOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MoneyTimeOutline: MoneyTimeOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MoneyTimeOutlineSvg}></AntdIcon>;
};

MoneyTimeOutline.displayName = 'MoneyTimeOutline';
MoneyTimeOutline.inheritAttrs = false;
export default MoneyTimeOutline;