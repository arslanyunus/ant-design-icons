// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LampChargeBulkSvg from '@ant-design/icons-svg/lib/asn/LampChargeBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LampChargeBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LampChargeBulk: LampChargeBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LampChargeBulkSvg}></AntdIcon>;
};

LampChargeBulk.displayName = 'LampChargeBulk';
LampChargeBulk.inheritAttrs = false;
export default LampChargeBulk;