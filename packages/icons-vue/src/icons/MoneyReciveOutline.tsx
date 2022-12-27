// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MoneyReciveOutlineSvg from '@ant-design/icons-svg/lib/asn/MoneyReciveOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MoneyReciveOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MoneyReciveOutline: MoneyReciveOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MoneyReciveOutlineSvg}></AntdIcon>;
};

MoneyReciveOutline.displayName = 'MoneyReciveOutline';
MoneyReciveOutline.inheritAttrs = false;
export default MoneyReciveOutline;