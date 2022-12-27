// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import AirplaneSquareTwoToneSvg from '@ant-design/icons-svg/lib/asn/AirplaneSquareTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface AirplaneSquareTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const AirplaneSquareTwoTone: AirplaneSquareTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AirplaneSquareTwoToneSvg}></AntdIcon>;
};

AirplaneSquareTwoTone.displayName = 'AirplaneSquareTwoTone';
AirplaneSquareTwoTone.inheritAttrs = false;
export default AirplaneSquareTwoTone;