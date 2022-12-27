// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import VolumeMuteLinearSvg from '@ant-design/icons-svg/lib/asn/VolumeMuteLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface VolumeMuteLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const VolumeMuteLinear: VolumeMuteLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VolumeMuteLinearSvg}></AntdIcon>;
};

VolumeMuteLinear.displayName = 'VolumeMuteLinear';
VolumeMuteLinear.inheritAttrs = false;
export default VolumeMuteLinear;