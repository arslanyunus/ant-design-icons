// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import AirplaneBrokenSvg from '@ant-design/icons-svg/lib/asn/AirplaneBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface AirplaneBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const AirplaneBroken: AirplaneBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AirplaneBrokenSvg}></AntdIcon>;
};

AirplaneBroken.displayName = 'AirplaneBroken';
AirplaneBroken.inheritAttrs = false;
export default AirplaneBroken;