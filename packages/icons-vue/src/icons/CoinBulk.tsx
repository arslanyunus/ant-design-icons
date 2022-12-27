// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CoinBulkSvg from '@ant-design/icons-svg/lib/asn/CoinBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CoinBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CoinBulk: CoinBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CoinBulkSvg}></AntdIcon>;
};

CoinBulk.displayName = 'CoinBulk';
CoinBulk.inheritAttrs = false;
export default CoinBulk;