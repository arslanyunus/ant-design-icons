// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Building4BoldSvg from '@ant-design/icons-svg/lib/asn/Building4Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Building4BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Building4Bold: Building4BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Building4BoldSvg}></AntdIcon>;
};

Building4Bold.displayName = 'Building4Bold';
Building4Bold.inheritAttrs = false;
export default Building4Bold;