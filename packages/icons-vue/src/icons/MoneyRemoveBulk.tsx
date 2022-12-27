// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MoneyRemoveBulkSvg from '@ant-design/icons-svg/lib/asn/MoneyRemoveBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MoneyRemoveBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MoneyRemoveBulk: MoneyRemoveBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MoneyRemoveBulkSvg}></AntdIcon>;
};

MoneyRemoveBulk.displayName = 'MoneyRemoveBulk';
MoneyRemoveBulk.inheritAttrs = false;
export default MoneyRemoveBulk;