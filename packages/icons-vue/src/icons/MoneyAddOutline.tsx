// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MoneyAddOutlineSvg from '@ant-design/icons-svg/lib/asn/MoneyAddOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MoneyAddOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MoneyAddOutline: MoneyAddOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MoneyAddOutlineSvg}></AntdIcon>;
};

MoneyAddOutline.displayName = 'MoneyAddOutline';
MoneyAddOutline.inheritAttrs = false;
export default MoneyAddOutline;