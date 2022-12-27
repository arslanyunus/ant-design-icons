// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import StatusLinearSvg from '@ant-design/icons-svg/lib/asn/StatusLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface StatusLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const StatusLinear: StatusLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={StatusLinearSvg}></AntdIcon>;
};

StatusLinear.displayName = 'StatusLinear';
StatusLinear.inheritAttrs = false;
export default StatusLinear;