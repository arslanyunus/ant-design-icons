// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import StatusUpLinearSvg from '@ant-design/icons-svg/lib/asn/StatusUpLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface StatusUpLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const StatusUpLinear: StatusUpLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={StatusUpLinearSvg}></AntdIcon>;
};

StatusUpLinear.displayName = 'StatusUpLinear';
StatusUpLinear.inheritAttrs = false;
export default StatusUpLinear;