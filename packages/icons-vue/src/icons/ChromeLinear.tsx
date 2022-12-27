// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ChromeLinearSvg from '@ant-design/icons-svg/lib/asn/ChromeLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ChromeLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ChromeLinear: ChromeLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ChromeLinearSvg}></AntdIcon>;
};

ChromeLinear.displayName = 'ChromeLinear';
ChromeLinear.inheritAttrs = false;
export default ChromeLinear;