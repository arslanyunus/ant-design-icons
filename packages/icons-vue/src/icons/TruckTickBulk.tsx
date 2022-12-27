// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TruckTickBulkSvg from '@ant-design/icons-svg/lib/asn/TruckTickBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TruckTickBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TruckTickBulk: TruckTickBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TruckTickBulkSvg}></AntdIcon>;
};

TruckTickBulk.displayName = 'TruckTickBulk';
TruckTickBulk.inheritAttrs = false;
export default TruckTickBulk;