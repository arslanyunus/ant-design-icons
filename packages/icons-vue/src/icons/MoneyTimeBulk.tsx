// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MoneyTimeBulkSvg from '@ant-design/icons-svg/lib/asn/MoneyTimeBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MoneyTimeBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MoneyTimeBulk: MoneyTimeBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MoneyTimeBulkSvg}></AntdIcon>;
};

MoneyTimeBulk.displayName = 'MoneyTimeBulk';
MoneyTimeBulk.inheritAttrs = false;
export default MoneyTimeBulk;