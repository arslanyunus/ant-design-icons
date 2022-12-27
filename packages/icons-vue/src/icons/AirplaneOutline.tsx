// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import AirplaneOutlineSvg from '@ant-design/icons-svg/lib/asn/AirplaneOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface AirplaneOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const AirplaneOutline: AirplaneOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AirplaneOutlineSvg}></AntdIcon>;
};

AirplaneOutline.displayName = 'AirplaneOutline';
AirplaneOutline.inheritAttrs = false;
export default AirplaneOutline;