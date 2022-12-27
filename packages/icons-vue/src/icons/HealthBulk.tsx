// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HealthBulkSvg from '@ant-design/icons-svg/lib/asn/HealthBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface HealthBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const HealthBulk: HealthBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HealthBulkSvg}></AntdIcon>;
};

HealthBulk.displayName = 'HealthBulk';
HealthBulk.inheritAttrs = false;
export default HealthBulk;