// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MoneyChangeBoldSvg from '@ant-design/icons-svg/lib/asn/MoneyChangeBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MoneyChangeBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MoneyChangeBold: MoneyChangeBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MoneyChangeBoldSvg}></AntdIcon>;
};

MoneyChangeBold.displayName = 'MoneyChangeBold';
MoneyChangeBold.inheritAttrs = false;
export default MoneyChangeBold;