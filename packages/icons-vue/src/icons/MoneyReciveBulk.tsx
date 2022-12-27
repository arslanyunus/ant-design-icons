// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MoneyReciveBulkSvg from '@ant-design/icons-svg/lib/asn/MoneyReciveBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MoneyReciveBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MoneyReciveBulk: MoneyReciveBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MoneyReciveBulkSvg}></AntdIcon>;
};

MoneyReciveBulk.displayName = 'MoneyReciveBulk';
MoneyReciveBulk.inheritAttrs = false;
export default MoneyReciveBulk;