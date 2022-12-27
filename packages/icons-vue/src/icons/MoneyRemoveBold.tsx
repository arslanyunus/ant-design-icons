// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MoneyRemoveBoldSvg from '@ant-design/icons-svg/lib/asn/MoneyRemoveBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MoneyRemoveBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MoneyRemoveBold: MoneyRemoveBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MoneyRemoveBoldSvg}></AntdIcon>;
};

MoneyRemoveBold.displayName = 'MoneyRemoveBold';
MoneyRemoveBold.inheritAttrs = false;
export default MoneyRemoveBold;