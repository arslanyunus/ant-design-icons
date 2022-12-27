// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Group9LinearSvg from '@ant-design/icons-svg/lib/asn/Group9Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Group9LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Group9Linear: Group9LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Group9LinearSvg}></AntdIcon>;
};

Group9Linear.displayName = 'Group9Linear';
Group9Linear.inheritAttrs = false;
export default Group9Linear;