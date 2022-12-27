// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Coin1BulkSvg from '@ant-design/icons-svg/lib/asn/Coin1Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Coin1BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Coin1Bulk: Coin1BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Coin1BulkSvg}></AntdIcon>;
};

Coin1Bulk.displayName = 'Coin1Bulk';
Coin1Bulk.inheritAttrs = false;
export default Coin1Bulk;