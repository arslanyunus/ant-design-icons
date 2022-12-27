// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Driver2BrokenSvg from '@ant-design/icons-svg/lib/asn/Driver2Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Driver2BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Driver2Broken: Driver2BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Driver2BrokenSvg}></AntdIcon>;
};

Driver2Broken.displayName = 'Driver2Broken';
Driver2Broken.inheritAttrs = false;
export default Driver2Broken;