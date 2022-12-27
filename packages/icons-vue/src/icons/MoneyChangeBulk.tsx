// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MoneyChangeBulkSvg from '@ant-design/icons-svg/lib/asn/MoneyChangeBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MoneyChangeBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MoneyChangeBulk: MoneyChangeBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MoneyChangeBulkSvg}></AntdIcon>;
};

MoneyChangeBulk.displayName = 'MoneyChangeBulk';
MoneyChangeBulk.inheritAttrs = false;
export default MoneyChangeBulk;