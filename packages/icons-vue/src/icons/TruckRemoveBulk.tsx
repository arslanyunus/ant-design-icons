// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TruckRemoveBulkSvg from '@ant-design/icons-svg/lib/asn/TruckRemoveBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TruckRemoveBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TruckRemoveBulk: TruckRemoveBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TruckRemoveBulkSvg}></AntdIcon>;
};

TruckRemoveBulk.displayName = 'TruckRemoveBulk';
TruckRemoveBulk.inheritAttrs = false;
export default TruckRemoveBulk;