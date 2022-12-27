// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GasStationBulkSvg from '@ant-design/icons-svg/lib/asn/GasStationBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GasStationBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GasStationBulk: GasStationBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GasStationBulkSvg}></AntdIcon>;
};

GasStationBulk.displayName = 'GasStationBulk';
GasStationBulk.inheritAttrs = false;
export default GasStationBulk;