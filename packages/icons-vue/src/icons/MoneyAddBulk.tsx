// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MoneyAddBulkSvg from '@ant-design/icons-svg/lib/asn/MoneyAddBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MoneyAddBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MoneyAddBulk: MoneyAddBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MoneyAddBulkSvg}></AntdIcon>;
};

MoneyAddBulk.displayName = 'MoneyAddBulk';
MoneyAddBulk.inheritAttrs = false;
export default MoneyAddBulk;