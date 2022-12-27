// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MoneyTickBulkSvg from '@ant-design/icons-svg/lib/asn/MoneyTickBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MoneyTickBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MoneyTickBulk: MoneyTickBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MoneyTickBulkSvg}></AntdIcon>;
};

MoneyTickBulk.displayName = 'MoneyTickBulk';
MoneyTickBulk.inheritAttrs = false;
export default MoneyTickBulk;