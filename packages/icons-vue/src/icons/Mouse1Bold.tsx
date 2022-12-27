// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Mouse1BoldSvg from '@ant-design/icons-svg/lib/asn/Mouse1Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Mouse1BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Mouse1Bold: Mouse1BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Mouse1BoldSvg}></AntdIcon>;
};

Mouse1Bold.displayName = 'Mouse1Bold';
Mouse1Bold.inheritAttrs = false;
export default Mouse1Bold;