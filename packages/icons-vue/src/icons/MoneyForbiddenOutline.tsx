// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MoneyForbiddenOutlineSvg from '@ant-design/icons-svg/lib/asn/MoneyForbiddenOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MoneyForbiddenOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MoneyForbiddenOutline: MoneyForbiddenOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MoneyForbiddenOutlineSvg}></AntdIcon>;
};

MoneyForbiddenOutline.displayName = 'MoneyForbiddenOutline';
MoneyForbiddenOutline.inheritAttrs = false;
export default MoneyForbiddenOutline;