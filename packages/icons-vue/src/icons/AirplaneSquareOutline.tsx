// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import AirplaneSquareOutlineSvg from '@ant-design/icons-svg/lib/asn/AirplaneSquareOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface AirplaneSquareOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const AirplaneSquareOutline: AirplaneSquareOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AirplaneSquareOutlineSvg}></AntdIcon>;
};

AirplaneSquareOutline.displayName = 'AirplaneSquareOutline';
AirplaneSquareOutline.inheritAttrs = false;
export default AirplaneSquareOutline;