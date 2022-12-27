// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import AirplaneSquareBrokenSvg from '@ant-design/icons-svg/lib/asn/AirplaneSquareBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface AirplaneSquareBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const AirplaneSquareBroken: AirplaneSquareBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AirplaneSquareBrokenSvg}></AntdIcon>;
};

AirplaneSquareBroken.displayName = 'AirplaneSquareBroken';
AirplaneSquareBroken.inheritAttrs = false;
export default AirplaneSquareBroken;