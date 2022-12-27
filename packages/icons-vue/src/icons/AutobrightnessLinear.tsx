// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import AutobrightnessLinearSvg from '@ant-design/icons-svg/lib/asn/AutobrightnessLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface AutobrightnessLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const AutobrightnessLinear: AutobrightnessLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AutobrightnessLinearSvg}></AntdIcon>;
};

AutobrightnessLinear.displayName = 'AutobrightnessLinear';
AutobrightnessLinear.inheritAttrs = false;
export default AutobrightnessLinear;