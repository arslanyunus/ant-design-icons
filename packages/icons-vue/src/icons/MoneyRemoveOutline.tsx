// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MoneyRemoveOutlineSvg from '@ant-design/icons-svg/lib/asn/MoneyRemoveOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MoneyRemoveOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MoneyRemoveOutline: MoneyRemoveOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MoneyRemoveOutlineSvg}></AntdIcon>;
};

MoneyRemoveOutline.displayName = 'MoneyRemoveOutline';
MoneyRemoveOutline.inheritAttrs = false;
export default MoneyRemoveOutline;