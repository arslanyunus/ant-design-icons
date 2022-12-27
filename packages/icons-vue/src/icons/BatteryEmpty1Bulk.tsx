// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BatteryEmpty1BulkSvg from '@ant-design/icons-svg/lib/asn/BatteryEmpty1Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BatteryEmpty1BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BatteryEmpty1Bulk: BatteryEmpty1BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BatteryEmpty1BulkSvg}></AntdIcon>;
};

BatteryEmpty1Bulk.displayName = 'BatteryEmpty1Bulk';
BatteryEmpty1Bulk.inheritAttrs = false;
export default BatteryEmpty1Bulk;