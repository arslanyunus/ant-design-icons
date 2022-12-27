// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MoneyOutlineSvg from '@ant-design/icons-svg/lib/asn/MoneyOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MoneyOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MoneyOutline: MoneyOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MoneyOutlineSvg}></AntdIcon>;
};

MoneyOutline.displayName = 'MoneyOutline';
MoneyOutline.inheritAttrs = false;
export default MoneyOutline;