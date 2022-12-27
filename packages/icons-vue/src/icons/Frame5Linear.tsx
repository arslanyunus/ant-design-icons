// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Frame5LinearSvg from '@ant-design/icons-svg/lib/asn/Frame5Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Frame5LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Frame5Linear: Frame5LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Frame5LinearSvg}></AntdIcon>;
};

Frame5Linear.displayName = 'Frame5Linear';
Frame5Linear.inheritAttrs = false;
export default Frame5Linear;