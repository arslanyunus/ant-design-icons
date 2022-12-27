// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MoneyBulkSvg from '@ant-design/icons-svg/lib/asn/MoneyBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MoneyBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MoneyBulk: MoneyBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MoneyBulkSvg}></AntdIcon>;
};

MoneyBulk.displayName = 'MoneyBulk';
MoneyBulk.inheritAttrs = false;
export default MoneyBulk;