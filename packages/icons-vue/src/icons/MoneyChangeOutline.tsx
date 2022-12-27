// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MoneyChangeOutlineSvg from '@ant-design/icons-svg/lib/asn/MoneyChangeOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MoneyChangeOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MoneyChangeOutline: MoneyChangeOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MoneyChangeOutlineSvg}></AntdIcon>;
};

MoneyChangeOutline.displayName = 'MoneyChangeOutline';
MoneyChangeOutline.inheritAttrs = false;
export default MoneyChangeOutline;