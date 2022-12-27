// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SpeedometerBulkSvg from '@ant-design/icons-svg/lib/asn/SpeedometerBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SpeedometerBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SpeedometerBulk: SpeedometerBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SpeedometerBulkSvg}></AntdIcon>;
};

SpeedometerBulk.displayName = 'SpeedometerBulk';
SpeedometerBulk.inheritAttrs = false;
export default SpeedometerBulk;