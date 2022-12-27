// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Box1BoldSvg from '@ant-design/icons-svg/lib/asn/Box1Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Box1BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Box1Bold: Box1BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Box1BoldSvg}></AntdIcon>;
};

Box1Bold.displayName = 'Box1Bold';
Box1Bold.inheritAttrs = false;
export default Box1Bold;