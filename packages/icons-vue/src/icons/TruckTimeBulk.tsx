// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TruckTimeBulkSvg from '@ant-design/icons-svg/lib/asn/TruckTimeBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TruckTimeBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TruckTimeBulk: TruckTimeBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TruckTimeBulkSvg}></AntdIcon>;
};

TruckTimeBulk.displayName = 'TruckTimeBulk';
TruckTimeBulk.inheritAttrs = false;
export default TruckTimeBulk;