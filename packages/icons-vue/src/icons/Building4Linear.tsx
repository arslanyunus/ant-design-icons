// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Building4LinearSvg from '@ant-design/icons-svg/lib/asn/Building4Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Building4LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Building4Linear: Building4LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Building4LinearSvg}></AntdIcon>;
};

Building4Linear.displayName = 'Building4Linear';
Building4Linear.inheritAttrs = false;
export default Building4Linear;