// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Group5LinearSvg from '@ant-design/icons-svg/lib/asn/Group5Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Group5LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Group5Linear: Group5LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Group5LinearSvg}></AntdIcon>;
};

Group5Linear.displayName = 'Group5Linear';
Group5Linear.inheritAttrs = false;
export default Group5Linear;