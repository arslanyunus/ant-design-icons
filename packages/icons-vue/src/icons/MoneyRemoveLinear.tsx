// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MoneyRemoveLinearSvg from '@ant-design/icons-svg/lib/asn/MoneyRemoveLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MoneyRemoveLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MoneyRemoveLinear: MoneyRemoveLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MoneyRemoveLinearSvg}></AntdIcon>;
};

MoneyRemoveLinear.displayName = 'MoneyRemoveLinear';
MoneyRemoveLinear.inheritAttrs = false;
export default MoneyRemoveLinear;