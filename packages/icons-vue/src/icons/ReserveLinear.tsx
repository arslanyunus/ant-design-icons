// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ReserveLinearSvg from '@ant-design/icons-svg/lib/asn/ReserveLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ReserveLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ReserveLinear: ReserveLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ReserveLinearSvg}></AntdIcon>;
};

ReserveLinear.displayName = 'ReserveLinear';
ReserveLinear.inheritAttrs = false;
export default ReserveLinear;