// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Driver2LinearSvg from '@ant-design/icons-svg/lib/asn/Driver2Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Driver2LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Driver2Linear: Driver2LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Driver2LinearSvg}></AntdIcon>;
};

Driver2Linear.displayName = 'Driver2Linear';
Driver2Linear.inheritAttrs = false;
export default Driver2Linear;