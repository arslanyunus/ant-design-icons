// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MoneysBulkSvg from '@ant-design/icons-svg/lib/asn/MoneysBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MoneysBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MoneysBulk: MoneysBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MoneysBulkSvg}></AntdIcon>;
};

MoneysBulk.displayName = 'MoneysBulk';
MoneysBulk.inheritAttrs = false;
export default MoneysBulk;