// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Driver2OutlineSvg from '@ant-design/icons-svg/lib/asn/Driver2Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Driver2OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Driver2Outline: Driver2OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Driver2OutlineSvg}></AntdIcon>;
};

Driver2Outline.displayName = 'Driver2Outline';
Driver2Outline.inheritAttrs = false;
export default Driver2Outline;