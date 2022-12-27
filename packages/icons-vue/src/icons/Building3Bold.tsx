// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Building3BoldSvg from '@ant-design/icons-svg/lib/asn/Building3Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Building3BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Building3Bold: Building3BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Building3BoldSvg}></AntdIcon>;
};

Building3Bold.displayName = 'Building3Bold';
Building3Bold.inheritAttrs = false;
export default Building3Bold;