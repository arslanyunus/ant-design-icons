// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TradeBulkSvg from '@ant-design/icons-svg/lib/asn/TradeBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TradeBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TradeBulk: TradeBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TradeBulkSvg}></AntdIcon>;
};

TradeBulk.displayName = 'TradeBulk';
TradeBulk.inheritAttrs = false;
export default TradeBulk;