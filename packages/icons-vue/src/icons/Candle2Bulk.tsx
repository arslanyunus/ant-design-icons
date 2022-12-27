// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Candle2BulkSvg from '@ant-design/icons-svg/lib/asn/Candle2Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Candle2BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Candle2Bulk: Candle2BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Candle2BulkSvg}></AntdIcon>;
};

Candle2Bulk.displayName = 'Candle2Bulk';
Candle2Bulk.inheritAttrs = false;
export default Candle2Bulk;