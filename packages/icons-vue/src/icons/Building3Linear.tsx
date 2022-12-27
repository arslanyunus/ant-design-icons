// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Building3LinearSvg from '@ant-design/icons-svg/lib/asn/Building3Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Building3LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Building3Linear: Building3LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Building3LinearSvg}></AntdIcon>;
};

Building3Linear.displayName = 'Building3Linear';
Building3Linear.inheritAttrs = false;
export default Building3Linear;