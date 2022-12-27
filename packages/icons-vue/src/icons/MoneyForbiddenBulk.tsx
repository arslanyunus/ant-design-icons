// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MoneyForbiddenBulkSvg from '@ant-design/icons-svg/lib/asn/MoneyForbiddenBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MoneyForbiddenBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MoneyForbiddenBulk: MoneyForbiddenBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MoneyForbiddenBulkSvg}></AntdIcon>;
};

MoneyForbiddenBulk.displayName = 'MoneyForbiddenBulk';
MoneyForbiddenBulk.inheritAttrs = false;
export default MoneyForbiddenBulk;