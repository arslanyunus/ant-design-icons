// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import AirpodLinearSvg from '@ant-design/icons-svg/lib/asn/AirpodLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface AirpodLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const AirpodLinear: AirpodLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AirpodLinearSvg}></AntdIcon>;
};

AirpodLinear.displayName = 'AirpodLinear';
AirpodLinear.inheritAttrs = false;
export default AirpodLinear;